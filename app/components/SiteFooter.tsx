"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="site">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="crest-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M12 2v20M4 9h16" strokeLinecap="round" />
                <circle cx={12} cy={12} r={10} strokeOpacity={0.4} />
              </svg>
            </div>
            <h4>{t("brand.name")}</h4>
            <p style={{ color: "#a79d88", marginBottom: 8 }}>{t("footer.since")}</p>
            <p style={{ color: "#d6ccb7", margin: 0 }}>
              818 Main Street
              <br />
              Stroudsburg, PA 18360
            </p>
          </div>
          <div>
            <h4>{t("footer.visit")}</h4>
            <ul>
              <li><Link href="/#mass">{t("footer.masstimes")}</Link></li>
              <li><Link href="/contact">{t("footer.directions")}</Link></li>
              <li><Link href="/contact">{t("footer.new")}</Link></li>
              <li>
                <a href="https://www.facebook.com/churchofsaintluke" target="_blank" rel="noopener noreferrer">
                  {t("footer.live")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.community")}</h4>
            <ul>
              <li><Link href="/our-team">{t("nav.story")}</Link></li>
              <li><Link href="/sacraments">{t("nav.sacraments")}</Link></li>
              <li><Link href="/faith-formation">{t("nav.faith")}</Link></li>
              <li><Link href="/ministries">{t("nav.ministries")}</Link></li>
              <li><Link href="/gallery">{t("footer.gallery")}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.contact")}</h4>
            <ul>
              <li><a href="tel:+15704219097">570-421-9097</a></li>
              <li><a href="mailto:office@churchofsaintluke.org">office@churchofsaintluke.org</a></li>
              <li><Link href="/giving">{t("nav.give")}</Link></li>
              <li><Link href="/news">{t("footer.archive")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>{t("footer.copyright")}</div>
          <div>{t("footer.diocese")}</div>
        </div>
      </div>
    </footer>
  );
}
