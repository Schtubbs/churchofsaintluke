import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Ministries · Church of Saint Luke" };

const GROUPS: { heading: string; items: { t: string; d: string }[] }[] = [
  {
    heading: "Liturgical Ministries",
    items: [
      { t: "Eucharistic Ministers", d: "Bringing the Body of Christ to the faithful at Mass and to the homebound." },
      { t: "Altar Servers", d: "Young parishioners serving faithfully at the altar during liturgy." },
      { t: "Lectors & Commentators", d: "Proclaiming the Word of God at weekend and weekday Masses." },
      { t: "Ushers & Greeters", d: "Welcoming parishioners and guests into the life of the parish." },
      { t: "Music Ministry", d: "Leading the assembly in sung prayer across all weekend Masses." },
    ],
  },
  {
    heading: "Service & Outreach",
    items: [
      { t: "St. Vincent de Paul Society", d: "Meeting the needs of the poor in our community, one neighbor at a time." },
      { t: "Parish Outreach", d: "Visiting the sick, the homebound, and those in need of prayer." },
      { t: "Knights of Columbus", d: "A fraternal order of Catholic men supporting the Church and community." },
      { t: "Columbiettes", d: "The women's auxiliary dedicated to charity, unity, and service." },
    ],
  },
  {
    heading: "Fellowship & Formation",
    items: [
      { t: "Coffee & Conversation", d: "Weekly fellowship after the 10:30 Mass in the parish hall." },
      { t: "Bible Study", d: "Small-group scripture study meeting weekly during the school year." },
      { t: "Young Adult Group", d: "For parishioners in their 20s and 30s — faith, friendship, and service." },
    ],
  },
];

export default function MinistriesPage() {
  return (
    <>
      <PageHead
        eyebrow="Serve & Belong"
        title="Our Ministries"
        lede="From the altar to outreach to the streets of Stroudsburg — there's a place for everyone to serve."
      />
      <div className="page-body">
        <div className="wrap">
          {GROUPS.map((g) => (
            <section key={g.heading}>
              <h2>{g.heading}</h2>
              <div className="cards" style={{ marginTop: 20 }}>
                {g.items.map((it) => (
                  <div key={it.t} className="card col-4" style={{ gridColumn: "span 4" }}>
                    <div className="body">
                      <h3>{it.t}</h3>
                      <p>{it.d}</p>
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
