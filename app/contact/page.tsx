import type { Metadata } from "next";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Contact · Church of Saint Luke" };

export default function ContactPage() {
  return (
    <>
      <PageHead eyebrow="Get in Touch" title="Contact Us" lede="We'd love to hear from you." />
      <div className="page-body">
        <div className="wrap-narrow">
          <div className="cards">
            <div className="card col-6" style={{ gridColumn: "span 6" }}>
              <div className="body">
                <div className="kicker">Parish Office</div>
                <h3>Church of Saint Luke</h3>
                <p>
                  818 Main Street
                  <br />
                  Stroudsburg, PA 18360
                </p>
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
                <div className="kicker">Office Hours</div>
                <h3>Monday – Friday</h3>
                <p>9:00 AM – 4:00 PM</p>
                <p style={{ marginTop: 12 }}>Closed weekends and federal holidays.</p>
              </div>
            </div>
          </div>

          <div className="prose-card" style={{ marginTop: 24 }}>
            <h3>Send us a message</h3>
            <p>
              For sacramental arrangements, bulletin submissions, or general questions, please email{" "}
              <a href="mailto:office@churchofsaintluke.org">office@churchofsaintluke.org</a> and we&apos;ll respond
              within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
