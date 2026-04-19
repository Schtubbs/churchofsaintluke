"use client";

import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

type I18n = { en: string; pl: string };
type Sac = { title: I18n; body: I18n };

const COPY = {
  en: {
    eyebrow: "Sacred Rites",
    title: "The Sacraments",
    lede: "Christian initiation and life, accomplished through the seven sacraments of the Catholic Church.",
  },
  pl: {
    eyebrow: "Święte Obrzędy",
    title: "Sakramenty",
    lede: "Wtajemniczenie i życie chrześcijańskie dokonywane przez siedem sakramentów Kościoła katolickiego.",
  },
} as const;

const SACS: Sac[] = [
  {
    title: { en: "Baptism", pl: "Chrzest" },
    body: {
      en: "The beginning of new life in Christ and entrance into the Church. Contact the parish office to schedule.",
      pl: "Początek nowego życia w Chrystusie i wejście do Kościoła. Aby umówić termin, skontaktuj się z kancelarią parafialną.",
    },
  },
  {
    title: { en: "Confirmation", pl: "Bierzmowanie" },
    body: {
      en: "The strengthening of the gifts of the Holy Spirit and full commitment to faith.",
      pl: "Umocnienie darów Ducha Świętego i pełne zaangażowanie w wierze.",
    },
  },
  {
    title: { en: "Eucharist", pl: "Eucharystia" },
    body: {
      en: "The source and summit of the Christian life and our spiritual nourishment.",
      pl: "Źródło i szczyt życia chrześcijańskiego oraz nasz duchowy pokarm.",
    },
  },
  {
    title: { en: "Reconciliation", pl: "Pojednanie" },
    body: {
      en: "God's merciful forgiveness. Saturdays at 3:00 PM, or by appointment.",
      pl: "Miłosierne przebaczenie Boga. Soboty o 15:00 lub po umówieniu terminu.",
    },
  },
  {
    title: { en: "Anointing of the Sick", pl: "Namaszczenie Chorych" },
    body: {
      en: "Spiritual strength in illness and old age. Call the office to arrange a visit.",
      pl: "Duchowe umocnienie w chorobie i starości. Zadzwoń do kancelarii, aby umówić wizytę.",
    },
  },
  {
    title: { en: "Holy Orders", pl: "Święcenia Kapłańskie" },
    body: {
      en: "Men ordained to serve as bishops, priests, and deacons.",
      pl: "Mężczyźni wyświęceni do posługi biskupów, kapłanów i diakonów.",
    },
  },
  {
    title: { en: "Matrimony", pl: "Małżeństwo" },
    body: {
      en: "The covenant of love between husband and wife sanctified by God. Begin arrangements at least 6 months in advance.",
      pl: "Przymierze miłości męża i żony uświęcone przez Boga. Przygotowania rozpocznij co najmniej 6 miesięcy wcześniej.",
    },
  },
];

export function SacramentsView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap-narrow">
          {SACS.map((s) => (
            <div key={s.title.en} className="prose-card">
              <h3>{s.title[lang]}</h3>
              <p>{s.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
