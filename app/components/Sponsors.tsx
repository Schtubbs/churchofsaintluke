"use client";

import { useLang } from "./LangProvider";

export function Sponsors() {
  const { t } = useLang();
  return (
    <section className="sponsors">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">{t("sp.eyebrow")}</div>
          <h2 style={{ marginTop: 10 }}>{t("sp.title")}</h2>
          <p style={{ maxWidth: 620, margin: "16px auto 0", color: "var(--ink-soft)" }}>
            {t("sp.desc")}
          </p>
        </div>

        <div className="sponsor-grid">
          <div className="sp">
            <div className="logo">VD</div>
            <div>
              <div className="kicker">Dining &amp; Catering</div>
              <h4>Vinny D&apos;s New York Deli &amp; Catering</h4>
              <p>Dine-in, take-out &amp; catering. Tastes of New York with the serenity of the Poconos.</p>
              <div className="meta">
                <span>730 Milford Road, East Stroudsburg</span>
                <a href="tel:+15704216868">570-421-6868</a>
              </div>
            </div>
          </div>

          <div className="sp">
            <div className="logo">MA</div>
            <div>
              <div className="kicker">Health &amp; Wellness</div>
              <h4>Massage Academy of the Poconos</h4>
              <p>Professional massage at affordable prices. Online bookings &amp; gift certificates.</p>
              <div className="meta">
                <span>753 Phillips Street, Stroudsburg</span>
                <a href="tel:+15704215014">570-421-5014</a>
              </div>
            </div>
          </div>

          <div className="sp">
            <div className="logo">GC</div>
            <div>
              <div className="kicker">Personal Care</div>
              <h4>The Getz Personal Care Home</h4>
              <p>Providing a loving home for over 50 years. Basic care, housekeeping &amp; medication management.</p>
              <div className="meta">
                <span>1026 Scenic Drive, Kunkletown</span>
                <a href="tel:+15706291334">570-629-1334</a>
              </div>
            </div>
          </div>

          <div className="sp">
            <div className="logo">KM</div>
            <div>
              <div className="kicker">Plumbing · Electrical · HVAC</div>
              <h4>KMB Plumbing, Electrical &amp; HVAC</h4>
              <p>24-hour emergency service. Fully licensed &amp; insured. Work 100% guaranteed.</p>
              <div className="meta">
                <span>223 Truss Road, Stroudsburg</span>
                <a href="tel:+15704600111">570-460-0111</a>
              </div>
            </div>
          </div>

          <div className="sp">
            <div className="logo">MA</div>
            <div>
              <div className="kicker">Nonprofit</div>
              <h4>Mallory&apos;s Army Foundation</h4>
              <p>United together in the fight against bullying. Don&apos;t just teach kindness — BE kindness.</p>
              <div className="meta">
                <a href="tel:+19734408657">973-440-8657</a>
                <a href="mailto:info@mallorysarmy.org">info@mallorysarmy.org</a>
              </div>
            </div>
          </div>

          <div
            className="sp"
            style={{ background: "linear-gradient(180deg, #fffaf0, #fff4de)", borderStyle: "dashed" }}
          >
            <div className="logo" style={{ background: "#fff", color: "var(--gold-2)" }}>
              +
            </div>
            <div>
              <div className="kicker" style={{ color: "var(--gold-2)" }}>{t("sp.ad.k")}</div>
              <h4>{t("sp.ad.t")}</h4>
              <p>{t("sp.ad.d")}</p>
              <div className="meta">
                <a href="tel:+18008834343">Bon Venture · 800-883-4343</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
