import type { Metadata } from "next";
import { GivingView } from "./view";

export const metadata: Metadata = { title: "Giving · Church of Saint Luke" };

export default function GivingPage() {
  return <GivingView />;
}
