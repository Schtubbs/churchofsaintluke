"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";
import { TodayCard } from "./TodayCard";

export function Hero() {
  const { t, lang } = useLang();
  const titleBlue = lang === "pl" ? "Świętego Łukasza" : "Saint Luke";
  const titlePre = lang === "pl" ? "Kościół " : "The Church of ";

  return (
    <section className="hero">
      <div className="bg" aria-hidden="true" />
      <div className="photo" aria-hidden="true" />
      <div className="wrap inner">
        <div className="text">
          <div className="welcome">{t("hero.welcome")}</div>
          <h1>
            {titlePre}
            <span className="blue">{titleBlue}</span>
          </h1>
          <p className="tag">{t("hero.tag")}</p>
          <div className="ctas">
            <Link className="btn primary" href="#mass">
              <span>{t("hero.cta1")}</span>
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              className="btn ghost"
              href="https://www.facebook.com/churchofsaintluke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx={12} cy={12} r={10} />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
              </svg>
              <span>{t("hero.cta2")}</span>
            </a>
          </div>
          <div className="fleur" style={{ marginTop: 48 }}>
            <span className="line" />
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-1 2-1 4 0 6 1-2 1-4 0-6zM6 10c2 0 4 1 6 2-2 1-4 2-6 2-2 0-3-1-3-2s1-2 3-2zm12 0c-2 0-4 1-6 2 2 1 4 2 6 2 2 0 3-1 3-2s-1-2-3-2zM12 14c-1 2-1 4 0 6 1-2 1-4 0-6z" />
            </svg>
            <span className="line" />
          </div>
        </div>

        <div className="arch-wrap" aria-label="Today at Saint Luke">
          <div className="arch-outer" />
          <div className="lightwash" />
          <div className="arch-inner" />
          <div className="transom" />
          <div className="mullion" />
          <div className="keystone" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 3v18M6 9h12" strokeLinecap="round" />
            </svg>
          </div>
          <TodayCard />
        </div>
      </div>
    </section>
  );
}
