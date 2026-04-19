"use client";

import Link from "next/link";
import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

const COPY = {
  en: {
    eyebrow: "Supporting Our Parish",
    title: "Your generosity makes our mission possible.",
    lede: "Every gift keeps the lights on, our ministries running, and our doors open.",
    online: {
      h: "Give Online",
      p: "Make a one-time or recurring donation securely through MyEOffering — our trusted online giving platform.",
      cta: "Give Online →",
    },
    annual: {
      h: "Annual Commitment",
      p: "Make your annual pledge to support the parish's day-to-day operating needs and ongoing ministry.",
    },
    capital: {
      h: "Capital Campaign",
      p: "Support our ongoing capital improvement campaign to enhance our parish facilities for future generations.",
    },
    mail: {
      h: "By Mail",
      p1pre: "Checks payable to ",
      p1em: "Church of Saint Luke",
      p1post: " may be mailed to",
      addr: "818 Main Street, Stroudsburg, PA 18360.",
      qpre: "Questions? ",
      qlink: "Contact the parish office.",
    },
  },
  pl: {
    eyebrow: "Wsparcie Parafii",
    title: "Twoja hojność umożliwia naszą misję.",
    lede: "Każdy dar utrzymuje nasze posługi i otwiera drzwi dla wszystkich.",
    online: {
      h: "Ofiara Online",
      p: "Złóż jednorazową lub stałą ofiarę bezpiecznie przez MyEOffering — naszą zaufaną platformę ofiar online.",
      cta: "Złóż Ofiarę →",
    },
    annual: {
      h: "Roczne Zobowiązanie",
      p: "Złóż roczne zobowiązanie wspierające bieżące potrzeby parafii i posługi duszpasterskie.",
    },
    capital: {
      h: "Kampania Inwestycyjna",
      p: "Wspieraj naszą kampanię inwestycyjną — ulepszamy obiekty parafialne dla przyszłych pokoleń.",
    },
    mail: {
      h: "Pocztą",
      p1pre: "Czeki wystawione na ",
      p1em: "Church of Saint Luke",
      p1post: " można przesyłać na adres",
      addr: "818 Main Street, Stroudsburg, PA 18360.",
      qpre: "Pytania? ",
      qlink: "Skontaktuj się z kancelarią parafialną.",
    },
  },
} as const;

export function GivingView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap-narrow">
          <div className="prose-card">
            <h3>{c.online.h}</h3>
            <p>{c.online.p}</p>
            <p>
              <a
                className="btn gold"
                href="https://members.myeoffering.com/#/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.online.cta}
              </a>
            </p>
          </div>
          <div className="prose-card">
            <h3>{c.annual.h}</h3>
            <p>{c.annual.p}</p>
          </div>
          <div className="prose-card">
            <h3>{c.capital.h}</h3>
            <p>{c.capital.p}</p>
          </div>
          <div className="prose-card">
            <h3>{c.mail.h}</h3>
            <p>
              {c.mail.p1pre}
              <em>{c.mail.p1em}</em>
              {c.mail.p1post}
              <br />
              {c.mail.addr}
            </p>
            <p>
              {c.mail.qpre}
              <Link href="/contact">{c.mail.qlink}</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
