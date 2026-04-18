import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Sacraments · Church of Saint Luke" };

const SACS = [
  {
    title: "Baptism",
    body: "The beginning of new life in Christ and entrance into the Church. Contact the parish office to schedule.",
  },
  {
    title: "Confirmation",
    body: "The strengthening of the gifts of the Holy Spirit and full commitment to faith.",
  },
  {
    title: "Eucharist",
    body: "The source and summit of the Christian life and our spiritual nourishment.",
  },
  {
    title: "Reconciliation",
    body: "God's merciful forgiveness. Saturdays at 3:00 PM, or by appointment.",
  },
  {
    title: "Anointing of the Sick",
    body: "Spiritual strength in illness and old age. Call the office to arrange a visit.",
  },
  {
    title: "Holy Orders",
    body: "Men ordained to serve as bishops, priests, and deacons.",
  },
  {
    title: "Matrimony",
    body: "The covenant of love between husband and wife sanctified by God. Begin arrangements at least 6 months in advance.",
  },
];

export default function SacramentsPage() {
  return (
    <>
      <PageHead
        eyebrow="Sacred Rites"
        title="The Sacraments"
        lede="Christian initiation and life, accomplished through the seven sacraments of the Catholic Church."
      />
      <div className="page-body">
        <div className="wrap-narrow">
          {SACS.map((s) => (
            <div key={s.title} className="prose-card">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
