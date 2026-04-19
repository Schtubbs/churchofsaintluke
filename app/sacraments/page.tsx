import type { Metadata } from "next";
import { SacramentsView } from "./view";

export const metadata: Metadata = { title: "Sacraments · Church of Saint Luke" };

export default function SacramentsPage() {
  return <SacramentsView />;
}
