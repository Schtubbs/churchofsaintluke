import type { ReactNode } from "react";

export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <header className="page-head">
      <div className="wrap-narrow">
        <div className="eyebrow">{eyebrow}</div>
        <h1 style={{ fontSize: "clamp(42px, 5vw, 72px)", marginTop: 12 }}>{title}</h1>
        {lede ? (
          <p style={{ fontSize: 20, color: "var(--ink-soft)", maxWidth: 620, margin: "18px auto 0" }}>
            {lede}
          </p>
        ) : null}
      </div>
    </header>
  );
}
