import type { Metadata } from "next";
import { ContactView } from "./view";

export const metadata: Metadata = { title: "Contact · Church of Saint Luke" };

export default function ContactPage() {
  return <ContactView />;
}
