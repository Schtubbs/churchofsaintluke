"use client";

import { useLang } from "./LangProvider";

export function LangToggle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`lang-toggle ${className ?? ""}`}
      role="group"
      aria-label="Language"
      style={style}
    >
      <button
        className={`lang-btn ${lang === "en" ? "on" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        className={`lang-btn ${lang === "pl" ? "on" : ""}`}
        aria-pressed={lang === "pl"}
        onClick={() => setLang("pl")}
      >
        PL
      </button>
    </div>
  );
}
