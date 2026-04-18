import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Our Team · Church of Saint Luke" };

const TEAM = [
  {
    name: "Rev. Pastor",
    role: "Pastor",
    bio: "Serving as spiritual leader of our parish community, bringing Christ's message through faithful ministry and pastoral care.",
  },
  {
    name: "Deacon Fernando",
    role: "Permanent Deacon",
    bio: "Assisting with liturgy and pastoral duties, serving the faithful with dedicated commitment to our community outreach.",
  },
  {
    name: "Deacon Phil",
    role: "Permanent Deacon",
    bio: "Supporting the sacramental life of the parish and accompanying parishioners through the milestones of faith.",
  },
  {
    name: "Parish Office Staff",
    role: "Administration",
    bio: "Our staff keep the parish office running Monday through Friday and are your first point of contact for every sacrament and event.",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHead
        eyebrow="Since 1854"
        title="Our Story & Our Team"
        lede="Rooted in the Diocese of Scranton, serving the Greater Stroudsburg Area for more than a century and a half."
      />
      <div className="page-body">
        <div className="wrap">
          <div className="cards">
            {TEAM.map((m) => (
              <div key={m.name} className="card col-6" style={{ gridColumn: "span 6" }}>
                <div className="body">
                  <div className="kicker">{m.role}</div>
                  <h3>{m.name}</h3>
                  <p>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
