import type { Metadata } from "next";
import Image from "next/image";
import { PageHead } from "../components/PageHead";

export const metadata: Metadata = { title: "Gallery · Church of Saint Luke" };

const PHOTOS = [
  "/images/church.jpg",
  "/images/insideofchurch.jpg",
  "/images/IMG_4001.JPG",
  "/images/IMG_3719.JPG",
  "/images/IMG_2977.JPG",
  "/images/IMG_6637.JPG",
  "/images/IMG_2089.JPG",
  "/images/IMG_3989.jpeg",
  "/images/IMG_5853.jpeg",
];

export default function GalleryPage() {
  return (
    <>
      <PageHead
        eyebrow="Parish Gallery"
        title="Moments from our community life"
        lede="Scenes from liturgy, service, and fellowship at Saint Luke."
      />
      <div className="page-body">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {PHOTOS.map((src) => (
              <div
                key={src}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  background: "#fffaf0",
                }}
              >
                <Image
                  src={src}
                  alt="Parish photo"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
