import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "News & Bulletins · Church of Saint Luke" };

const ITEMS = [
  {
    date: "April 14, 2025",
    title: "Living Stations of the Cross 2025",
    excerpt: "Students brought the Passion of Christ to life on the streets of Stroudsburg.",
  },
  {
    date: "April 2025",
    title: "Interfaith Iftar Dinner 2025",
    excerpt: "An evening of fellowship between our parish and neighbors of other faiths.",
  },
  {
    date: "Ongoing",
    title: "Weekly Bulletin",
    excerpt: "Announcements, Mass intentions, and the pastor's letter — updated every Sunday.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHead
        eyebrow="Parish News"
        title="News & Bulletins"
        lede="Stay up to date with parish life."
      />
      <div className="page-body">
        <div className="wrap">
          <div className="cards">
            {ITEMS.map((n) => (
              <Link key={n.title} href="#" className="card col-4" style={{ gridColumn: "span 4" }}>
                <div className="body">
                  <div className="kicker">{n.date}</div>
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                  <span className="more">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
