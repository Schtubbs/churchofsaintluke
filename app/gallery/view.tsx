"use client";

import Image from "next/image";
import { useLang } from "../components/LangProvider";
import { PageHead } from "../components/PageHead";

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

const COPY = {
  en: {
    eyebrow: "Parish Gallery",
    title: "Moments from our community life",
    lede: "Scenes from liturgy, service, and fellowship at Saint Luke.",
    alt: "Parish photo",
  },
  pl: {
    eyebrow: "Galeria Parafialna",
    title: "Chwile z życia naszej wspólnoty",
    lede: "Sceny z liturgii, służby i wspólnoty w parafii Świętego Łukasza.",
    alt: "Zdjęcie parafialne",
  },
} as const;

export function GalleryView() {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <>
      <PageHead eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
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
                  alt={c.alt}
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
