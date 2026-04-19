import type { Metadata } from "next";
import { GalleryView } from "./view";

export const metadata: Metadata = { title: "Gallery · Church of Saint Luke" };

export default function GalleryPage() {
  return <GalleryView />;
}
