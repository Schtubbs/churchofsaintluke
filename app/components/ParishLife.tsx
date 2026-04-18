"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LangProvider";

type CardDef = {
  href: string;
  span: "feat" | "col-3" | "col-6";
  imgSrc?: string;
  phKey: string;
  ph: { en: string; pl: string };
  kicker: { en: string; pl: string };
  title: { en: string; pl: string };
  desc: { en: string; pl: string };
  cta: { en: string; pl: string };
};

const CARDS: CardDef[] = [
  {
    href: "/news",
    span: "feat",
    imgSrc: "/images/insideofchurch.jpg",
    phKey: "events",
    ph: { en: "Community gathering", pl: "Spotkanie wspólnoty" },
    kicker: { en: "What's Happening", pl: "Co się dzieje" },
    title: { en: "Events This Week", pl: "Wydarzenia w tym tygodniu" },
    desc: {
      en: "From faith formation programs to community gatherings, there's always something meaningful happening at Saint Luke.",
      pl: "Od programów formacji wiary po spotkania wspólnoty — zawsze dzieje się coś wartościowego.",
    },
    cta: { en: "View events →", pl: "Zobacz wydarzenia →" },
  },
  {
    href: "/sacraments",
    span: "col-3",
    imgSrc: "/images/IMG_3719.JPG",
    phKey: "sac",
    ph: { en: "The Sacraments", pl: "Sakramenty" },
    kicker: { en: "Foundation of Faith", pl: "Fundament Wiary" },
    title: { en: "The Sacraments", pl: "Sakramenty" },
    desc: {
      en: "Baptism, Confirmation, and the Eucharist — the sacred gifts at the heart of Catholic life.",
      pl: "Chrzest, Bierzmowanie i Eucharystia — święte dary w sercu życia katolickiego.",
    },
    cta: { en: "Learn more →", pl: "Dowiedz się więcej →" },
  },
  {
    href: "/faith-formation",
    span: "col-3",
    imgSrc: "/images/IMG_2977.JPG",
    phKey: "faith",
    ph: { en: "Faith Formation", pl: "Formacja Wiary" },
    kicker: { en: "Lifelong Learning", pl: "Nauka Przez Całe Życie" },
    title: { en: "Faith Formation", pl: "Formacja Wiary" },
    desc: {
      en: "Programs for children, teens, and adults — drawing closer to God through scripture and prayer.",
      pl: "Programy dla dzieci, młodzieży i dorosłych — przez Pismo Święte i modlitwę.",
    },
    cta: { en: "Learn more →", pl: "Dowiedz się więcej →" },
  },
  {
    href: "/ministries",
    span: "col-6",
    imgSrc: "/images/IMG_6637.JPG",
    phKey: "min",
    ph: { en: "Our Ministries", pl: "Nasze Posługi" },
    kicker: { en: "Serve & Belong", pl: "Służ i Przynależ" },
    title: { en: "Our Ministries", pl: "Nasze Posługi" },
    desc: {
      en: "From Eucharistic ministers to outreach teams, our ministries empower members to live out their faith in service to others.",
      pl: "Od posługi Eucharystycznej po zespoły pomocy — nasze posługi pomagają żyć wiarą w służbie innym.",
    },
    cta: { en: "Get involved →", pl: "Dołącz →" },
  },
  {
    href: "/our-team",
    span: "col-6",
    imgSrc: "/images/church.jpg",
    phKey: "story",
    ph: { en: "Our Story", pl: "Nasza Historia" },
    kicker: { en: "Since 1854", pl: "Od 1854" },
    title: { en: "Our Story", pl: "Nasza Historia" },
    desc: {
      en: "Rooted in the Diocese of Scranton and in more than a century of service to the Stroudsburg community.",
      pl: "Zakorzeniona w Diecezji Scranton i w ponad wieku służby społeczności Stroudsburga.",
    },
    cta: { en: "Meet our team →", pl: "Poznaj nasz zespół →" },
  },
];

export function ParishLife() {
  const { lang, t } = useLang();
  return (
    <section className="life">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow">{t("life.eyebrow")}</div>
            <h2 style={{ marginTop: 12 }}>{t("life.title")}</h2>
          </div>
          <p>{t("life.sub")}</p>
        </div>

        <div className="cards">
          {CARDS.map((c) => (
            <Link key={c.href + c.phKey} className={`card ${c.span}`} href={c.href}>
              <div className="media">
                {c.imgSrc ? (
                  <Image
                    src={c.imgSrc}
                    alt={c.title[lang]}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="ph">Photo · {c.ph[lang]}</div>
                )}
              </div>
              <div className="body">
                <div className="kicker">{c.kicker[lang]}</div>
                <h3>{c.title[lang]}</h3>
                <p>{c.desc[lang]}</p>
                <span className="more">{c.cta[lang]}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bulletin">
          <div className="seal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path d="M6 3h9l3 3v15H6z" />
              <path d="M15 3v3h3M9 11h6M9 15h6M9 7h2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--gold-2)" }}>
              {t("bulletin.eyebrow")}
            </div>
            <h3 style={{ marginTop: 4 }}>{t("bulletin.title")}</h3>
            <p>{t("bulletin.desc")}</p>
          </div>
          <Link className="btn primary" href="/news">
            {t("bulletin.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
