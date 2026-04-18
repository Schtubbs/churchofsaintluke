"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";
import { LangToggle } from "./LangToggle";

function Crest() {
  return (
    <span className="crest" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2v20M4 9h16" strokeLinecap="round" />
        <circle cx={12} cy={12} r={10} strokeOpacity={0.4} />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site">
      <div className="wrap row">
        <Link href="/" className="brand" onClick={closeMobile}>
          <Crest />
          <span>
            <div className="name">{t("brand.name")}</div>
            <div className="sub">{t("brand.sub")}</div>
          </span>
        </Link>
        <nav className="top">
          <Link className="nav" href="/#mass">{t("nav.mass")}</Link>
          <Link className="nav" href="/sacraments">{t("nav.sacraments")}</Link>
          <Link className="nav" href="/ministries">{t("nav.ministries")}</Link>
          <Link className="nav" href="/news">{t("nav.news")}</Link>
          <div className={`more-wrap ${open ? "open" : ""}`} ref={wrapRef}>
            <button
              className="more-btn"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
            >
              <span>{t("nav.more")}</span>
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="more-menu" role="menu">
              <Link href="/our-team" onClick={() => setOpen(false)}>{t("nav.story")}</Link>
              <Link href="/faith-formation" onClick={() => setOpen(false)}>{t("nav.faith")}</Link>
              <Link href="/news" onClick={() => setOpen(false)}>{t("nav.bulletin")}</Link>
              <a
                href="https://www.facebook.com/churchofsaintluke"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {t("nav.live")}
              </a>
              <Link href="/gallery" onClick={() => setOpen(false)}>{t("nav.gallery")}</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>{t("nav.contact")}</Link>
            </div>
          </div>
          <LangToggle style={{ marginLeft: 10 }} />
          <Link className="btn gold" href="/giving" style={{ marginLeft: 8 }}>
            {t("nav.give")}
          </Link>
        </nav>

        <button
          className={`burger ${mobileOpen ? "open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-sheet"
          onClick={() => setMobileOpen((v) => !v)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-sheet"
        className={`mobile-sheet ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        <nav className="mobile-nav">
          <Link href="/#mass" onClick={closeMobile}>{t("nav.mass")}</Link>
          <Link href="/sacraments" onClick={closeMobile}>{t("nav.sacraments")}</Link>
          <Link href="/ministries" onClick={closeMobile}>{t("nav.ministries")}</Link>
          <Link href="/faith-formation" onClick={closeMobile}>{t("nav.faith")}</Link>
          <Link href="/our-team" onClick={closeMobile}>{t("nav.story")}</Link>
          <Link href="/news" onClick={closeMobile}>{t("nav.news")}</Link>
          <Link href="/gallery" onClick={closeMobile}>{t("nav.gallery")}</Link>
          <Link href="/contact" onClick={closeMobile}>{t("nav.contact")}</Link>
          <a
            href="https://www.facebook.com/churchofsaintluke"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
          >
            {t("nav.live")}
          </a>
        </nav>
        <div className="mobile-sheet-foot">
          <LangToggle />
          <Link className="btn gold" href="/giving" onClick={closeMobile}>
            {t("nav.give")}
          </Link>
        </div>
      </div>
    </header>
  );
}
