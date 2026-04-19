import type { Metadata } from "next";
import { NewsView } from "./view";

export const metadata: Metadata = { title: "News & Bulletins · Church of Saint Luke" };

export default function NewsPage() {
  return <NewsView />;
}
