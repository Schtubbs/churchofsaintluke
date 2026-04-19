import type { Metadata } from "next";
import { MinistriesView } from "./view";

export const metadata: Metadata = { title: "Ministries · Church of Saint Luke" };

export default function MinistriesPage() {
  return <MinistriesView />;
}
