"use client";

import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

type I18n = { en: string; pl: string };
type Item = { t: I18n; d: I18n };
type Group = { heading: I18n; items: Item[] };

const COPY = {
  en: {
    eyebrow: "Serve & Belong",
    title: "Our Ministries",
    lede: "From the altar to outreach to the streets of Stroudsburg — there's a place for everyone to serve.",
  },
  pl: {
    eyebrow: "Służ i Przynależ",
    title: "Nasze Posługi",
    lede: "Od ołtarza po posługę w społeczności Stroudsburga — każdy znajdzie dla siebie miejsce, by służyć.",
  },
} as const;

const GROUPS: Group[] = [
  {
    heading: { en: "Liturgical Ministries", pl: "Posługi Liturgiczne" },
    items: [
      {
        t: { en: "Eucharistic Ministers", pl: "Szafarze Eucharystii" },
        d: {
          en: "Bringing the Body of Christ to the faithful at Mass and to the homebound.",
          pl: "Niosą Ciało Chrystusa wiernym podczas Mszy oraz chorym w domach.",
        },
      },
      {
        t: { en: "Altar Servers", pl: "Ministranci" },
        d: {
          en: "Young parishioners serving faithfully at the altar during liturgy.",
          pl: "Młodzi parafianie służący wiernie przy ołtarzu podczas liturgii.",
        },
      },
      {
        t: { en: "Lectors & Commentators", pl: "Lektorzy i Komentatorzy" },
        d: {
          en: "Proclaiming the Word of God at weekend and weekday Masses.",
          pl: "Głoszą Słowo Boże podczas Mszy niedzielnych i powszednich.",
        },
      },
      {
        t: { en: "Ushers & Greeters", pl: "Służba Porządkowa i Witający" },
        d: {
          en: "Welcoming parishioners and guests into the life of the parish.",
          pl: "Witają parafian i gości w życiu parafialnym.",
        },
      },
      {
        t: { en: "Music Ministry", pl: "Posługa Muzyczna" },
        d: {
          en: "Leading the assembly in sung prayer across all weekend Masses.",
          pl: "Prowadzą wspólnotę w śpiewanej modlitwie podczas Mszy weekendowych.",
        },
      },
    ],
  },
  {
    heading: { en: "Service & Outreach", pl: "Służba i Pomoc" },
    items: [
      {
        t: { en: "St. Vincent de Paul Society", pl: "Stowarzyszenie Św. Wincentego à Paulo" },
        d: {
          en: "Meeting the needs of the poor in our community, one neighbor at a time.",
          pl: "Odpowiadają na potrzeby ubogich w naszej społeczności, wspierając sąsiadów.",
        },
      },
      {
        t: { en: "Parish Outreach", pl: "Posługa Parafialna" },
        d: {
          en: "Visiting the sick, the homebound, and those in need of prayer.",
          pl: "Odwiedzają chorych, osoby w domach i potrzebujących modlitwy.",
        },
      },
      {
        t: { en: "Knights of Columbus", pl: "Rycerze Kolumba" },
        d: {
          en: "A fraternal order of Catholic men supporting the Church and community.",
          pl: "Zakon braterski katolickich mężczyzn wspierających Kościół i wspólnotę.",
        },
      },
      {
        t: { en: "Columbiettes", pl: "Columbiettes" },
        d: {
          en: "The women's auxiliary dedicated to charity, unity, and service.",
          pl: "Organizacja kobieca oddana miłosierdziu, jedności i służbie.",
        },
      },
    ],
  },
  {
    heading: { en: "Fellowship & Formation", pl: "Wspólnota i Formacja" },
    items: [
      {
        t: { en: "Coffee & Conversation", pl: "Kawa i Rozmowa" },
        d: {
          en: "Weekly fellowship after the 10:30 Mass in the parish hall.",
          pl: "Cotygodniowe spotkanie po Mszy o 10:30 w salce parafialnej.",
        },
      },
      {
        t: { en: "Bible Study", pl: "Studium Pisma Świętego" },
        d: {
          en: "Small-group scripture study meeting weekly during the school year.",
          pl: "Cotygodniowe spotkania w małych grupach w roku szkolnym.",
        },
      },
      {
        t: { en: "Young Adult Group", pl: "Grupa Młodych Dorosłych" },
        d: {
          en: "For parishioners in their 20s and 30s — faith, friendship, and service.",
          pl: "Dla parafian w wieku 20–30 lat — wiara, przyjaźń i służba.",
        },
      },
    ],
  },
];

export function MinistriesView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap">
          {GROUPS.map((g) => (
            <section key={g.heading.en}>
              <h2>{g.heading[lang]}</h2>
              <div className="cards" style={{ marginTop: 20 }}>
                {g.items.map((it) => (
                  <div key={it.t.en} className="card col-4" style={{ gridColumn: "span 4" }}>
                    <div className="body">
                      <h3>{it.t[lang]}</h3>
                      <p>{it.d[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
