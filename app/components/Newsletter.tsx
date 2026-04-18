"use client";

import { useState } from "react";
import { useLang } from "./LangProvider";

function Candle() {
  return (
    <svg viewBox="0 0 200 280" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="flame" cx=".5" cy=".55" r=".5">
          <stop offset="0" stopColor="#fff6c9" />
          <stop offset=".5" stopColor="#ffc24a" />
          <stop offset="1" stopColor="#b84e1a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="halo" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#ffe6a0" stopOpacity=".8" />
          <stop offset="1" stopColor="#ffe6a0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={100} cy={70} r={70} fill="url(#halo)">
        <animate attributeName="r" values="70;76;68;74;70" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;1;0.75;0.95;0.9" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <g>
        <ellipse cx={100} cy={72} rx={14} ry={28} fill="url(#flame)">
          <animate attributeName="ry" values="28;30;26;29;28" dur="1.6s" repeatCount="indefinite" />
          <animate attributeName="cx" values="100;101;99;100.5;100" dur="1.6s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx={100} cy={78} rx={6} ry={14} fill="#fff6c9" opacity={0.9}>
          <animate attributeName="ry" values="14;16;12;15;14" dur="1.6s" repeatCount="indefinite" />
        </ellipse>
      </g>
      <rect x={98} y={92} width={4} height={10} fill="#3a2a17" />
      <rect x={72} y={100} width={56} height={160} rx={4} fill="#fffaf0" stroke="#e6d9bb" />
      <rect x={72} y={100} width={56} height={10} rx={4} fill="#f7e9c6" />
      <path d="M82 130 Q78 150 84 158 Q88 152 86 138 Z" fill="#fff" opacity={0.6} />
      <rect x={58} y={258} width={84} height={10} rx={2} fill="#c9b07a" />
      <rect x={48} y={266} width={104} height={8} rx={2} fill="#a88957" />
    </svg>
  );
}

export function Newsletter() {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  return (
    <section className="news">
      <div className="wrap-narrow">
        <div className="newscard">
          <div>
            <div className="eyebrow">{t("news.eyebrow")}</div>
            <h2 style={{ marginTop: 12 }}>{t("news.title")}</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: 14, maxWidth: 460 }}>
              {t("news.desc")}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input type="email" placeholder={t("news.ph")} required aria-label="Email" />
              <button className="btn gold" type="submit">
                {done ? t("news.done") : t("news.cta")}
              </button>
            </form>
          </div>
          <div className="side">
            <div className="candle" aria-hidden="true">
              <Candle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
