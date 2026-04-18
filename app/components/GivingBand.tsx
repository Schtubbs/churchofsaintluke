"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";

export function GivingBand() {
  const { t } = useLang();
  return (
    <section className="give">
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            {t("give.eyebrow")}
          </div>
          <h2 style={{ marginTop: 10 }}>{t("give.title")}</h2>
          <p>{t("give.desc")}</p>
          <div className="cta-row">
            <a
              className="btn gold"
              href="https://members.myeoffering.com/#/landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("give.cta1")}
            </a>
            <Link
              className="btn ghost"
              href="/giving"
              style={{ color: "#fff8e7", borderColor: "rgba(255,248,231,.3)" }}
            >
              {t("give.cta2")}
            </Link>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><div className="n">1,200+</div><div className="l">{t("stat.families")}</div></div>
          <div className="stat"><div className="n">14</div><div className="l">{t("stat.ministries")}</div></div>
          <div className="stat"><div className="n">170+</div><div className="l">{t("stat.years")}</div></div>
          <div className="stat"><div className="n">3</div><div className="l">{t("stat.weekend")}</div></div>
        </div>
      </div>
    </section>
  );
}
