import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Faith Formation · Church of Saint Luke" };

export default function FaithFormationPage() {
  return (
    <>
      <PageHead
        eyebrow="Lifelong Learning"
        title="Faith Formation"
        lede="Growing closer to God — together. Programs for children, teens, and adults."
      />
      <div className="page-body">
        <div className="wrap-narrow">
          <div className="prose-card">
            <h3>Religious Education</h3>
            <p>
              Our RE program prepares children for the sacraments and a lifetime of faith. Classes for grades K–12
              with dedicated, faithful catechists.
            </p>
          </div>
          <div className="prose-card">
            <h3>First Holy Communion</h3>
            <p>
              A two-year preparation program welcoming second-grade children (and older) to the Eucharistic table.
            </p>
          </div>
          <div className="prose-card">
            <h3>Confirmation Preparation</h3>
            <p>
              Teen-focused formation centered on the gifts of the Holy Spirit, service, and a mature commitment to
              the faith.
            </p>
          </div>
          <div className="prose-card">
            <h3>Adult Faith Formation &amp; OCIA</h3>
            <p>
              Deepen your faith through Bible study and ongoing adult formation. OCIA (formerly RCIA) welcomes
              adults seeking Baptism, Reception into full communion with the Catholic Church, Confirmation, or
              First Eucharist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
