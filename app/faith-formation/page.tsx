import type { Metadata } from "next";
import { FaithFormationView } from "./view";

export const metadata: Metadata = { title: "Faith Formation · Church of Saint Luke" };

export default function FaithFormationPage() {
  return <FaithFormationView />;
}
