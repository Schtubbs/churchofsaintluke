"use client";

import Link from "next/link";
import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

type I18n = { en: string; pl: string };
type Item = { date: I18n; title: I18n; excerpt: I18n };

const COPY = {
  en: {
    eyebrow: "Parish News",
    title: "News & Bulletins",
    lede: "Stay up to date with parish life.",
    readMore: "Read more →",
  },
  pl: {
    eyebrow: "Wiadomości Parafialne",
    title: "Aktualności i Biuletyny",
    lede: "Bądź na bieżąco z życiem parafii.",
    readMore: "Czytaj dalej →",
  },
} as const;

const ITEMS: Item[] = [
  {
    date: { en: "April 14, 2025", pl: "14 kwietnia 2025" },
    title: {
      en: "Living Stations of the Cross 2025",
      pl: "Żywa Droga Krzyżowa 2025",
    },
    excerpt: {
      en: "Students brought the Passion of Christ to life on the streets of Stroudsburg.",
      pl: "Uczniowie odtworzyli Mękę Pańską na ulicach Stroudsburga.",
    },
  },
  {
    date: { en: "April 2025", pl: "Kwiecień 2025" },
    title: {
      en: "Interfaith Iftar Dinner 2025",
      pl: "Międzyreligijna kolacja Iftar 2025",
    },
    excerpt: {
      en: "An evening of fellowship between our parish and neighbors of other faiths.",
      pl: "Wieczór wspólnoty naszej parafii z sąsiadami innych wyznań.",
    },
  },
  {
    date: { en: "Ongoing", pl: "Na bieżąco" },
    title: { en: "Weekly Bulletin", pl: "Biuletyn Tygodniowy" },
    excerpt: {
      en: "Announcements, Mass intentions, and the pastor's letter — updated every Sunday.",
      pl: "Ogłoszenia, intencje mszalne i list proboszcza — aktualizowane co niedzielę.",
    },
  },
];

export function NewsView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap">
          <div className="cards">
            {ITEMS.map((n) => (
              <Link
                key={n.title.en}
                href="#"
                className="card col-4"
                style={{ gridColumn: "span 4" }}
              >
                <div className="body">
                  <div className="kicker">{n.date[lang]}</div>
                  <h3>{n.title[lang]}</h3>
                  <p>{n.excerpt[lang]}</p>
                  <span className="more">{c.readMore}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
