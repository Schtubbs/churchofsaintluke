export type Lang = "en" | "pl";

type Dict = Record<string, string>;

export const STRINGS: Record<Lang, Dict> = {
  en: {
    "brand.name": "Church of Saint Luke",
    "brand.sub": "Stroudsburg · Pennsylvania",
    "nav.mass": "Mass Times",
    "nav.sacraments": "Sacraments",
    "nav.ministries": "Ministries",
    "nav.news": "News",
    "nav.more": "More",
    "nav.story": "Our Story",
    "nav.faith": "Faith Formation",
    "nav.bulletin": "Weekly Bulletin",
    "nav.live": "Watch Live",
    "nav.contact": "Contact",
    "nav.gallery": "Gallery",
    "nav.give": "Give",
    "bar.next": "Next Mass",
    "hero.welcome": "Welcome home to —",
    "hero.tag":
      "Bringing Christ, in Word and Sacrament, to a diverse and loving community in the heart of Stroudsburg, Pennsylvania.",
    "hero.cta1": "View Mass Times",
    "hero.cta2": "Watch Mass Live",
    "today.foot": "Today at Saint Luke",
    "today.all": "Full schedule",
    "mass.eyebrow": "Mass & Prayer Schedule",
    "mass.weekday": "Weekday Mass",
    "mass.weekend": "Weekend Mass",
    "mass.confession": "Confession & Adoration",
    "mass.rosary": "Rosary & Live Stream",
    "action.bulletin": "Weekly Bulletin",
    "action.bulletinDesc": "Parish news, announcements & upcoming events.",
    "action.giving": "Online Giving",
    "action.givingDesc": "Support our parish with a secure offering.",
    "action.live": "Watch Live",
    "action.liveDesc": "Sunday 10:30 AM streamed on Facebook.",
    "life.eyebrow": "Parish Life",
    "life.title": "Grow with us.",
    "life.sub":
      "From faith formation and sacramental preparation to quiet fellowship over coffee, there's always a way to belong more deeply.",
    "bulletin.eyebrow": "This Week's Parish Bulletin",
    "bulletin.title": "Fifth Sunday of Easter · April 19, 2026",
    "bulletin.desc":
      "Read announcements, the pastor's letter, Mass intentions, and upcoming events.",
    "bulletin.cta": "View Bulletin →",
    "give.eyebrow": "Supporting Our Parish",
    "give.title": "Your generosity makes our mission possible.",
    "give.desc":
      "Every gift — from the weekly collection to an annual commitment — keeps the lights on, our ministries running, and our doors open to all who come seeking Christ.",
    "give.cta1": "Give Online",
    "give.cta2": "Annual Commitment",
    "stat.families": "Registered Families",
    "stat.ministries": "Active Ministries",
    "stat.years": "Years in Stroudsburg",
    "stat.weekend": "Weekend Masses",
    "sp.eyebrow": "Community Partners",
    "sp.title": "Our Sponsors",
    "sp.desc":
      "Local businesses that proudly support our weekly bulletin. Please patronize them — they make our community possible.",
    "sp.ad.k": "Advertise With Us",
    "sp.ad.t": "Your Business Here",
    "sp.ad.d":
      "Support our parish by advertising in our weekly bulletin. Reach hundreds of local families.",
    "news.eyebrow": "Stay Connected",
    "news.title": "A weekly note from Saint Luke.",
    "news.desc":
      "Sign up for our weekly bulletin, parish news, and updates about upcoming events & ministries. We'll never share your email.",
    "news.ph": "you@example.com",
    "news.cta": "Subscribe",
    "news.done": "Subscribed ✓",
    "footer.since": "Serving the Greater Stroudsburg Area since 1854.",
    "footer.visit": "Visit",
    "footer.masstimes": "Mass Times",
    "footer.directions": "Directions",
    "footer.new": "I'm New Here",
    "footer.live": "Watch Live",
    "footer.community": "Community",
    "footer.contact": "Contact",
    "footer.gallery": "Gallery",
    "footer.archive": "Bulletin Archive",
    "footer.copyright": "© 2026 Church of Saint Luke · 818 Main Street, Stroudsburg PA 18360",
    "footer.diocese": "A parish of the Diocese of Scranton",
  },
  pl: {
    "brand.name": "Kościół Świętego Łukasza",
    "brand.sub": "Stroudsburg · Pensylwania",
    "nav.mass": "Msze Święte",
    "nav.sacraments": "Sakramenty",
    "nav.ministries": "Posługi",
    "nav.news": "Aktualności",
    "nav.more": "Więcej",
    "nav.story": "Nasza Historia",
    "nav.faith": "Formacja Wiary",
    "nav.bulletin": "Biuletyn",
    "nav.live": "Transmisja Live",
    "nav.contact": "Kontakt",
    "nav.gallery": "Galeria",
    "nav.give": "Ofiara",
    "bar.next": "Następna Msza",
    "hero.welcome": "Witaj w domu —",
    "hero.tag":
      "Niesiemy Chrystusa, w Słowie i Sakramencie, do różnorodnej i kochającej wspólnoty w sercu Stroudsburga w Pensylwanii.",
    "hero.cta1": "Zobacz Msze Święte",
    "hero.cta2": "Oglądaj Mszę na Żywo",
    "today.foot": "Dzisiaj u Świętego Łukasza",
    "today.all": "Pełny plan",
    "mass.eyebrow": "Plan Mszy i Modlitwy",
    "mass.weekday": "Msza w Dni Powszednie",
    "mass.weekend": "Msza Niedzielna",
    "mass.confession": "Spowiedź i Adoracja",
    "mass.rosary": "Różaniec i Transmisja",
    "action.bulletin": "Biuletyn Tygodniowy",
    "action.bulletinDesc": "Wiadomości parafialne, ogłoszenia i wydarzenia.",
    "action.giving": "Ofiary Online",
    "action.givingDesc": "Wesprzyj naszą parafię bezpieczną ofiarą.",
    "action.live": "Oglądaj na Żywo",
    "action.liveDesc": "Niedziela 10:30 na Facebooku.",
    "life.eyebrow": "Życie Parafialne",
    "life.title": "Rozwijaj się z nami.",
    "life.sub":
      "Od formacji wiary i przygotowania do sakramentów po wspólne spotkania przy kawie — zawsze jest sposób, by przynależeć głębiej.",
    "bulletin.eyebrow": "Biuletyn w tym tygodniu",
    "bulletin.title": "Piąta Niedziela Wielkanocy · 19 kwietnia 2026",
    "bulletin.desc": "Ogłoszenia, list proboszcza, intencje mszalne i nadchodzące wydarzenia.",
    "bulletin.cta": "Zobacz Biuletyn →",
    "give.eyebrow": "Wsparcie Parafii",
    "give.title": "Twoja hojność umożliwia naszą misję.",
    "give.desc":
      "Każdy dar — od cotygodniowej składki po roczne zobowiązanie — utrzymuje nasze posługi i otwiera drzwi dla wszystkich szukających Chrystusa.",
    "give.cta1": "Złóż Ofiarę",
    "give.cta2": "Roczne Zobowiązanie",
    "stat.families": "Zarejestrowanych Rodzin",
    "stat.ministries": "Aktywnych Posług",
    "stat.years": "Lat w Stroudsburgu",
    "stat.weekend": "Mszy Weekendowych",
    "sp.eyebrow": "Partnerzy Społeczności",
    "sp.title": "Nasi Sponsorzy",
    "sp.desc":
      "Lokalne firmy, które wspierają nasz biuletyn. Prosimy o ich wsparcie — umożliwiają nam dalszą pracę.",
    "sp.ad.k": "Reklamuj się u nas",
    "sp.ad.t": "Twoja Firma Tutaj",
    "sp.ad.d": "Wesprzyj parafię reklamując się w biuletynie. Dotrzyj do setek rodzin.",
    "news.eyebrow": "Bądźmy w kontakcie",
    "news.title": "Cotygodniowa wiadomość od Świętego Łukasza.",
    "news.desc":
      "Zapisz się na biuletyn, wiadomości parafialne i informacje o wydarzeniach. Nie udostępnimy Twojego adresu.",
    "news.ph": "ty@example.com",
    "news.cta": "Zapisz się",
    "news.done": "Zapisano ✓",
    "footer.since": "Służymy Stroudsburgowi od 1854 roku.",
    "footer.visit": "Odwiedź",
    "footer.masstimes": "Msze Święte",
    "footer.directions": "Dojazd",
    "footer.new": "Jestem tu pierwszy raz",
    "footer.live": "Oglądaj Live",
    "footer.community": "Wspólnota",
    "footer.contact": "Kontakt",
    "footer.gallery": "Galeria",
    "footer.archive": "Archiwum Biuletynu",
    "footer.copyright": "© 2026 Kościół Świętego Łukasza · 818 Main Street, Stroudsburg PA 18360",
    "footer.diocese": "Parafia Diecezji Scranton",
  },
};

export type SeasonKey = "ordinary" | "advent" | "lent" | "easter" | "christmas";

export const SEASON_NAMES: Record<Lang, Record<SeasonKey, string>> = {
  en: {
    ordinary: "Ordinary Time",
    advent: "Advent",
    lent: "Lent",
    easter: "Easter",
    christmas: "Christmas",
  },
  pl: {
    ordinary: "Czas Zwykły",
    advent: "Adwent",
    lent: "Wielki Post",
    easter: "Wielkanoc",
    christmas: "Boże Narodzenie",
  },
};

export const DAY_NAMES: Record<Lang, string[]> = {
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  pl: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
};

export const MONTHS: Record<Lang, string[]> = {
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  pl: [
    "Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca",
    "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia",
  ],
};

export type MassEntry = { d: number; h: number; m: number; labelEn: string; labelPl: string };
export const MASS_SCHEDULE: MassEntry[] = [
  { d: 0, h: 8, m: 0, labelEn: "Sunday · 8:00 AM", labelPl: "Niedziela · 8:00" },
  { d: 0, h: 10, m: 30, labelEn: "Sunday · 10:30 AM", labelPl: "Niedziela · 10:30" },
  { d: 0, h: 14, m: 0, labelEn: "Sunday · 2:00 PM", labelPl: "Niedziela · 14:00" },
  { d: 1, h: 18, m: 30, labelEn: "Monday · 6:30 PM", labelPl: "Poniedziałek · 18:30" },
  { d: 2, h: 7, m: 30, labelEn: "Tuesday · 7:30 AM", labelPl: "Wtorek · 7:30" },
  { d: 3, h: 7, m: 30, labelEn: "Wednesday · 7:30 AM", labelPl: "Środa · 7:30" },
  { d: 4, h: 7, m: 30, labelEn: "Thursday · 7:30 AM", labelPl: "Czwartek · 7:30" },
  { d: 5, h: 7, m: 30, labelEn: "Friday · 7:30 AM", labelPl: "Piątek · 7:30" },
  { d: 6, h: 16, m: 0, labelEn: "Saturday · 4:00 PM", labelPl: "Sobota · 16:00" },
];

export function fmtTime(h: number, m: number, lang: Lang): string {
  if (lang === "pl") {
    return `${h}:${String(m).padStart(2, "0")}`;
  }
  const ampm = h >= 12 ? "PM" : "AM";
  const hh = ((h + 11) % 12) + 1;
  return `${hh}:${String(m).padStart(2, "0")} ${ampm}`;
}
