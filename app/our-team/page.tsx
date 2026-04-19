import type { Metadata } from "next";
import { OurTeamView } from "./view";

export const metadata: Metadata = { title: "Our Team · Church of Saint Luke" };

export default function OurTeamPage() {
  return <OurTeamView />;
}
