"use client";

import Image from "next/image";
import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

type I18n = { en: string; pl: string };
type Member = { name: string; role: I18n; email?: string; img?: string };

const CLERGY: Member[] = [
  {
    name: "Rev. Michael F. Quinnan",
    role: { en: "Pastor", pl: "Proboszcz" },
    email: "pastor@churchofsaintluke.org",
    img: "/images/Father+2025.jpg",
  },
  {
    name: "Philip F. Zimich",
    role: { en: "Deacon", pl: "Diakon" },
    email: "DeaconPhil@churchofsaintluke.org",
    img: "/images/Deacon+Phil.jpg",
  },
  {
    name: "Fernando B. Alves",
    role: { en: "Deacon", pl: "Diakon" },
    email: "DeaconFernando@churchofsaintluke.org",
    img: "/images/Deacon+Fernando.jpg",
  },
];

const STAFF: Member[] = [
  {
    name: "Debra S. Jean",
    role: { en: "Business Manager", pl: "Kierownik Administracyjny" },
    email: "businessmgr@churchofsaintluke.org",
    img: "/images/Crossley_20180921_6934.jpg",
  },
  {
    name: "Maria Stuppiello",
    role: {
      en: "Liturgical & Communications Coordinator",
      pl: "Koordynator ds. Liturgii i Komunikacji",
    },
    email: "communications@churchofsaintluke.org",
    img: "/images/Maria+Headshot+prior.png",
  },
  {
    name: "Fabio Sagheddu",
    role: { en: "Facilities Maintenance", pl: "Konserwacja Obiektów" },
    email: "facilities@churchofsaintluke.org",
    img: "/images/Fabio+Sagheddu.jpg",
  },
  {
    name: "Geraldine Patire",
    role: { en: "Music Director", pl: "Dyrektor Muzyczny" },
    email: "musicdirector@churchofsaintluke.org",
    img: "/images/Geraldine+Headshot.png",
  },
  {
    name: "Lisa Me Boesze",
    role: {
      en: "Religious Education Administrator",
      pl: "Administrator ds. Edukacji Religijnej",
    },
    email: "religiouseducation@churchofsaintluke.org",
    img: "/images/Lisa+Boesze.jpg",
  },
  {
    name: "Jessica Havansky",
    role: { en: "Director of Youth Ministry", pl: "Dyrektor Duszpasterstwa Młodzieży" },
    email: "youthminister@churchofsaintluke.org",
    img: "/images/Jessica+2.jpg",
  },
];

const COPY = {
  en: {
    eyebrow: "Meet the Parish",
    title: "Our Team",
    lede: "The clergy and staff who serve the Church of Saint Luke every day.",
    clergy: "Clergy & Deacons",
    staff: "Administrative & Support Staff",
  },
  pl: {
    eyebrow: "Poznaj Parafię",
    title: "Nasz Zespół",
    lede: "Duchowni i pracownicy służący codziennie w Kościele Świętego Łukasza.",
    clergy: "Duchowieństwo i Diakoni",
    staff: "Administracja i Personel Wspierający",
  },
} as const;

function TeamCard({ m, lang }: { m: Member; lang: "en" | "pl" }) {
  return (
    <div className="card col-4" style={{ gridColumn: "span 4" }}>
      <div className="media">
        {m.img ? (
          <Image
            src={m.img}
            alt={m.name}
            fill
            sizes="(max-width: 960px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="ph">Photo</div>
        )}
      </div>
      <div className="body">
        <div className="kicker">{m.role[lang]}</div>
        <h3>{m.name}</h3>
        {m.email ? (
          <p>
            <a href={`mailto:${m.email}`} style={{ color: "inherit" }}>
              {m.email}
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function OurTeamView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap">
          <h2>{c.clergy}</h2>
          <div className="cards">
            {CLERGY.map((m) => (
              <TeamCard key={m.name} m={m} lang={lang} />
            ))}
          </div>

          <h2>{c.staff}</h2>
          <div className="cards">
            {STAFF.map((m) => (
              <TeamCard key={m.name} m={m} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
