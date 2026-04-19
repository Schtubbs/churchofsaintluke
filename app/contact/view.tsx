"use client";

import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

const COPY = {
  en: {
    eyebrow: "Get in Touch",
    title: "Contact Us",
    lede: "We'd love to hear from you.",
    officeKicker: "Parish Office",
    churchName: "Church of Saint Luke",
    hoursKicker: "Office Hours",
    hoursTitle: "Monday – Friday",
    hoursTime: "9:00 AM – 4:00 PM",
    hoursNote: "Closed weekends and federal holidays.",
    sendHeading: "Send us a message",
    sendBodyPre: "For sacramental arrangements, bulletin submissions, or general questions, please email ",
    sendBodyPost: " and we'll respond within 1–2 business days.",
  },
  pl: {
    eyebrow: "Skontaktuj się",
    title: "Kontakt",
    lede: "Chętnie się z Tobą skontaktujemy.",
    officeKicker: "Kancelaria Parafialna",
    churchName: "Kościół Świętego Łukasza",
    hoursKicker: "Godziny Otwarcia",
    hoursTitle: "Poniedziałek – Piątek",
    hoursTime: "9:00 – 16:00",
    hoursNote: "Zamknięte w weekendy i święta państwowe.",
    sendHeading: "Napisz do nas",
    sendBodyPre:
      "W sprawach sakramentów, ogłoszeń do biuletynu lub pytań ogólnych prosimy o wiadomość na ",
    sendBodyPost: " — odpowiemy w ciągu 1–2 dni roboczych.",
  },
} as const;

export function ContactView() {
  const { lang } = useLang();
  const c = COPY[lang];
  const addr =
    lang === "pl" ? (
      <>
        818 Main Street
        <br />
        Stroudsburg, PA 18360
      </>
    ) : (
      <>
        818 Main Street
        <br />
        Stroudsburg, PA 18360
      </>
    );

  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
      <div className="page-body">
        <div className="wrap-narrow">
          <div className="cards">
            <div className="card col-6" style={{ gridColumn: "span 6" }}>
              <div className="body">
                <div className="kicker">{c.officeKicker}</div>
                <h3>{c.churchName}</h3>
                <p>{addr}</p>
                <p>
                  <a href="tel:+15704219097">570-421-9097</a>
                </p>
                <p>
                  <a href="mailto:office@churchofsaintluke.org">office@churchofsaintluke.org</a>
                </p>
              </div>
            </div>
            <div className="card col-6" style={{ gridColumn: "span 6" }}>
              <div className="body">
                <div className="kicker">{c.hoursKicker}</div>
                <h3>{c.hoursTitle}</h3>
                <p>{c.hoursTime}</p>
                <p style={{ marginTop: 12 }}>{c.hoursNote}</p>
              </div>
            </div>
          </div>

          <div className="prose-card" style={{ marginTop: 24 }}>
            <h3>{c.sendHeading}</h3>
            <p>
              {c.sendBodyPre}
              <a href="mailto:office@churchofsaintluke.org">office@churchofsaintluke.org</a>
              {c.sendBodyPost}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
