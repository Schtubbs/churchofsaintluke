"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";

export function MassSection() {
  const { t, lang } = useLang();
  return (
    <section className="mass" id="mass">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">{t("mass.eyebrow")}</div>
          <h2 style={{ marginTop: 12 }}>
            {lang === "pl" ? "Przyjdź taki, jaki jesteś." : "Come as you are."}
            <br />
            <em style={{ color: "var(--blue-3)", fontWeight: 400 }}>
              {lang === "pl" ? "Wszyscy są mile widziani." : "All are welcome."}
            </em>
          </h2>
        </div>

        <div className="grid">
          <div className="cell">
            <div className="icon">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx={12} cy={12} r={9} />
                <path d="M12 7v5l3 2" strokeLinecap="round" />
              </svg>
            </div>
            <h4>{t("mass.weekday")}</h4>
            <div className="times">
              <b>{lang === "pl" ? "Poniedziałek" : "Monday"}</b> · {lang === "pl" ? "18:30" : "6:30 PM"}
              <br />
              <b>{lang === "pl" ? "Wt – Pt" : "Tue – Fri"}</b> · {lang === "pl" ? "7:30" : "7:30 AM"}
            </div>
          </div>
          <div className="cell next">
            <div
              className="icon"
              style={{ background: "color-mix(in oklab, var(--gold) 22%, transparent)", color: "var(--gold-2)" }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 7h18M5 7l1 12h12l1-12M9 11v5M15 11v5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4>{t("mass.weekend")}</h4>
            <div className="times">
              <b>{lang === "pl" ? "Sobota" : "Saturday"}</b> · {lang === "pl" ? "16:00" : "4:00 PM"}
              <br />
              <b>{lang === "pl" ? "Niedziela" : "Sunday"}</b> · {lang === "pl" ? "8:00 · 10:30 · 14:00" : "8 AM · 10:30 AM · 2 PM"}
            </div>
          </div>
          <div className="cell">
            <div className="icon">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2v20M5 12h14" strokeLinecap="round" />
              </svg>
            </div>
            <h4>{t("mass.confession")}</h4>
            <div className="times">
              <b>{lang === "pl" ? "Spowiedź" : "Confession"}</b> · {lang === "pl" ? "So 15:00" : "Sat 3:00 PM"}
              <br />
              <b>{lang === "pl" ? "Adoracja" : "Adoration"}</b> ·{" "}
              {lang === "pl" ? "Pn 10:00 – 18:30" : "Mon 10 AM – 6:30 PM"}
            </div>
          </div>
          <div className="cell">
            <div className="icon">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx={12} cy={12} r={3} />
                <circle cx={12} cy={5} r={1.6} />
                <circle cx={12} cy={19} r={1.6} />
                <circle cx={5} cy={12} r={1.6} />
                <circle cx={19} cy={12} r={1.6} />
              </svg>
            </div>
            <h4>{t("mass.rosary")}</h4>
            <div className="times">
              <b>{lang === "pl" ? "Różaniec" : "Rosary"}</b> ·{" "}
              {lang === "pl" ? "Wt–Pt po Mszy" : "Tue – Fri after Mass"}
              <br />
              <b>{lang === "pl" ? "Live" : "Live"}</b> ·{" "}
              {lang === "pl" ? "Nd 10:30 na Facebooku" : "Sun 10:30 AM on Facebook"}
            </div>
          </div>
        </div>

        <div className="actions">
          <Link href="/news" className="action">
            <span className="ico">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x={4} y={3} width={16} height={18} rx={2} />
                <path d="M8 7h8M8 11h8M8 15h5" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <h4>{t("action.bulletin")}</h4>
              <p>{t("action.bulletinDesc")}</p>
            </div>
            <span className="arrow">→</span>
          </Link>
          <Link href="/giving" className="action">
            <span className="ico" style={{ background: "linear-gradient(180deg, #ffd679, var(--gold))" }}>
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h4>{t("action.giving")}</h4>
              <p>{t("action.givingDesc")}</p>
            </div>
            <span className="arrow">→</span>
          </Link>
          <a
            href="https://www.facebook.com/churchofsaintluke"
            target="_blank"
            rel="noopener noreferrer"
            className="action"
          >
            <span className="ico">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <path d="M8 12l3 2 5-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h4>{t("action.live")}</h4>
              <p>{t("action.liveDesc")}</p>
            </div>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
