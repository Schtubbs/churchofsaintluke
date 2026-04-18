"use client";

import { useEffect, useState } from "react";
import { DAY_NAMES, MASS_SCHEDULE, MONTHS, SEASON_NAMES, fmtTime } from "../lib/i18n";
import { useLang } from "./LangProvider";

type Item = { dt: Date; time: string; label: string; isNext: boolean };

function seasonFor(date: Date): "ordinary" | "advent" | "lent" | "easter" | "christmas" {
  const m = date.getMonth();
  if (m === 11) return date.getDate() >= 25 ? "christmas" : "advent";
  if (m === 0) return "christmas";
  if (m === 1 || m === 2) return "lent";
  if (m === 3 || m === 4) return "easter";
  return "ordinary";
}

export function TodayCard() {
  const { lang, t } = useLang();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <div className="today" aria-hidden="true">
        <div className="date-strip">
          <div className="date"><span className="num">—</span> </div>
          <div className="season">—</div>
        </div>
        <div className="feast">&nbsp;</div>
      </div>
    );
  }

  const dow = now.getDay();
  const items: Item[] = MASS_SCHEDULE.filter((m) => m.d === dow).map((m) => {
    const dt = new Date(now);
    dt.setHours(m.h, m.m, 0, 0);
    const label = (lang === "pl" ? m.labelPl : m.labelEn).split("·")[1]?.trim() ?? m.labelEn;
    return { dt, time: fmtTime(m.h, m.m, lang), label, isNext: false };
  });
  if (dow === 6) {
    const dt = new Date(now); dt.setHours(15, 0, 0, 0);
    items.unshift({
      dt, time: fmtTime(15, 0, lang),
      label: lang === "pl" ? "Spowiedź" : "Confession", isNext: false,
    });
  }
  if (dow === 1) {
    const dt = new Date(now); dt.setHours(10, 0, 0, 0);
    items.unshift({
      dt, time: fmtTime(10, 0, lang),
      label: lang === "pl" ? "Adoracja" : "Adoration begins", isNext: false,
    });
  }
  items.sort((a, b) => a.dt.getTime() - b.dt.getTime());
  const nextUpcoming = items.find((it) => it.dt > now);
  if (nextUpcoming) nextUpcoming.isNext = true;

  const season = seasonFor(now);
  const seasonName = SEASON_NAMES[lang][season];
  const feast =
    dow === 0
      ? (lang === "pl" ? `Piąta Niedziela ${seasonName}` : `Fifth Sunday of ${seasonName.split(" ")[0]}`)
      : `${DAY_NAMES[lang][dow]} · ${seasonName}`;

  return (
    <div className="today">
      <div className="date-strip">
        <div className="date">
          <span className="num">{now.getDate()}</span>{" "}
          <span style={{ fontStyle: "italic" }}>{MONTHS[lang][now.getMonth()]}</span>
        </div>
        <div className="season">{seasonName}</div>
      </div>
      <div className="feast">{feast}</div>
      <div className="tlist">
        {items.length === 0 ? (
          <div className="trow">
            <span className="tt">—</span>
            <span className="tl">
              {lang === "pl"
                ? "Brak Mszy dzisiaj. Kościół otwarty 8:00–18:00."
                : "No scheduled Mass today. Church open for prayer 8 AM–6 PM."}
            </span>
          </div>
        ) : (
          items.map((it, i) => (
            <div key={i} className={`trow ${it.isNext ? "now" : ""}`}>
              <span className="tt">{it.time}</span>
              <span className="tl">{it.label}</span>
            </div>
          ))
        )}
      </div>
      <div className="tfoot">
        <span>{t("today.foot")}</span>
        <a href="#mass">
          <span>{t("today.all")}</span>
          <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
