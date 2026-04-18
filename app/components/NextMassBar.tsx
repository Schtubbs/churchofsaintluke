"use client";

import { useEffect, useMemo, useState } from "react";
import { MASS_SCHEDULE, SEASON_NAMES } from "../lib/i18n";
import { useLang } from "./LangProvider";

function nextMass() {
  const now = new Date();
  let best: { dt: Date; labelEn: string; labelPl: string } | null = null;
  for (let i = 0; i < 14; i++) {
    for (const m of MASS_SCHEDULE) {
      const dt = new Date(now);
      dt.setDate(now.getDate() + i);
      const diff = (m.d - dt.getDay() + 7) % 7;
      dt.setDate(dt.getDate() + diff);
      dt.setHours(m.h, m.m, 0, 0);
      if (dt > now && (!best || dt < best.dt)) {
        best = { dt, labelEn: m.labelEn, labelPl: m.labelPl };
      }
    }
    if (best) break;
  }
  return best;
}

function fmtDelta(ms: number, lang: "en" | "pl") {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (lang === "pl") {
    if (d > 0) return `za ${d}d ${h}g ${m}m`;
    if (h > 0) return `za ${h}g ${m}m`;
    return `za ${m}m`;
  }
  if (d > 0) return `in ${d}d ${h}h ${m}m`;
  if (h > 0) return `in ${h}h ${m}m`;
  return `in ${m}m`;
}

// Rough liturgical season based on month. Good-enough signal for the pill.
function currentSeason(date: Date): "ordinary" | "advent" | "lent" | "easter" | "christmas" {
  const m = date.getMonth();
  // Dec = Advent/Christmas; early Jan = Christmas; Feb–Mar = Lent; Apr–May = Easter
  if (m === 11) return date.getDate() >= 25 ? "christmas" : "advent";
  if (m === 0) return "christmas";
  if (m === 1 || m === 2) return "lent";
  if (m === 3 || m === 4) return "easter";
  return "ordinary";
}

export function NextMassBar() {
  const { lang, t } = useLang();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const data = useMemo(() => {
    if (!now) return null;
    const nm = nextMass();
    if (!nm) return null;
    return {
      label: lang === "pl" ? nm.labelPl : nm.labelEn,
      delta: fmtDelta(nm.dt.getTime() - now.getTime(), lang),
      season: SEASON_NAMES[lang][currentSeason(now)],
    };
  }, [now, lang]);

  return (
    <div className="nextmass ui">
      <div className="row">
        <span className="dot" />
        <span className="label">{t("bar.next")}</span>
        <span className="when">{data?.label ?? "—"}</span>
        <span className="count">
          <span>{data?.delta ?? ""}</span>
          <span className="season-pill">{data?.season ?? ""}</span>
        </span>
      </div>
    </div>
  );
}
