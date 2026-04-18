import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Giving · Church of Saint Luke" };

export default function GivingPage() {
  return (
    <>
      <PageHead
        eyebrow="Supporting Our Parish"
        title="Your generosity makes our mission possible."
        lede="Every gift keeps the lights on, our ministries running, and our doors open."
      />
      <div className="page-body">
        <div className="wrap-narrow">
          <div className="prose-card">
            <h3>Give Online</h3>
            <p>
              Make a one-time or recurring donation securely through MyEOffering — our trusted online giving
              platform.
            </p>
            <p>
              <a
                className="btn gold"
                href="https://members.myeoffering.com/#/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Online →
              </a>
            </p>
          </div>
          <div className="prose-card">
            <h3>Annual Commitment</h3>
            <p>Make your annual pledge to support the parish&apos;s day-to-day operating needs and ongoing ministry.</p>
          </div>
          <div className="prose-card">
            <h3>Capital Campaign</h3>
            <p>Support our ongoing capital improvement campaign to enhance our parish facilities for future generations.</p>
          </div>
          <div className="prose-card">
            <h3>By Mail</h3>
            <p>
              Checks payable to <em>Church of Saint Luke</em> may be mailed to
              <br />
              818 Main Street, Stroudsburg, PA 18360.
            </p>
            <p>
              Questions? <Link href="/contact">Contact the parish office.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
