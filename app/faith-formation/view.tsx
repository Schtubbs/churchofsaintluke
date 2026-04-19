"use client";

import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

type I18n = { en: string; pl: string };
type Section = { h: I18n; p: I18n };

const COPY = {
  en: {
    eyebrow: "Lifelong Learning",
    title: "Faith Formation",
    lede: "Growing closer to God — together. Programs for children, teens, and adults.",
  },
  pl: {
    eyebrow: "Formacja na całe życie",
    title: "Formacja Wiary",
    lede: "Zbliżamy się do Boga — razem. Programy dla dzieci, młodzieży i dorosłych.",
  },
} as const;

const SECTIONS: Section[] = [
  {
    h: { en: "Religious Education", pl: "Edukacja Religijna" },
    p: {
      en: "Our RE program prepares children for the sacraments and a lifetime of faith. Classes for grades K–12 with dedicated, faithful catechists.",
      pl: "Nasz program edukacji religijnej przygotowuje dzieci do sakramentów i do życia wiarą. Zajęcia dla klas K–12 prowadzone przez oddanych katechetów.",
    },
  },
  {
    h: { en: "First Holy Communion", pl: "Pierwsza Komunia Święta" },
    p: {
      en: "A two-year preparation program welcoming second-grade children (and older) to the Eucharistic table.",
      pl: "Dwuletni program przygotowujący dzieci z drugiej klasy (i starsze) do przystąpienia do stołu Eucharystycznego.",
    },
  },
  {
    h: { en: "Confirmation Preparation", pl: "Przygotowanie do Bierzmowania" },
    p: {
      en: "Teen-focused formation centered on the gifts of the Holy Spirit, service, and a mature commitment to the faith.",
      pl: "Formacja dla młodzieży skoncentrowana na darach Ducha Świętego, służbie i dojrzałym zaangażowaniu w wiarę.",
    },
  },
  {
    h: { en: "Adult Faith Formation & OCIA", pl: "Formacja Dorosłych i OCIA" },
    p: {
      en: "Deepen your faith through Bible study and ongoing adult formation. OCIA (formerly RCIA) welcomes adults seeking Baptism, Reception into full communion with the Catholic Church, Confirmation, or First Eucharist.",
      pl: "Pogłębiaj wiarę poprzez studium Pisma Świętego i ciągłą formację dorosłych. OCIA (dawniej RCIA) zaprasza dorosłych pragnących Chrztu, przyjęcia do pełnej jedności z Kościołem katolickim, Bierzmowania lub Pierwszej Komunii.",
    },
  },
];

export function FaithFormationView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap-narrow">
          {SECTIONS.map((s) => (
            <div key={s.h.en} className="prose-card">
              <h3>{s.h[lang]}</h3>
              <p>{s.p[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
