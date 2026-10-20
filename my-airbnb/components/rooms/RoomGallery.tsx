"use client";

import Image from "next/image";
import { useState } from "react";

interface RoomGalleryProps {
  title: string;
  photos: string[];
}

export default function RoomGallery({ title, photos }: RoomGalleryProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const showPhoto = (offset: number) => {
    setActivePhoto((index) => (index + offset + photos.length) % photos.length);
  };

  return (
    <section aria-label="Galería de fotos" className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-neutral-100 to-orange-100 sm:aspect-[16/9]">
        {photos[activePhoto] ? (
          <Image
            alt={`${title}, foto ${activePhoto + 1}`}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 960px"
            src={photos[activePhoto]}
          />
        ) : (
          <div className="grid h-full place-items-center text-neutral-500">
            Foto del alojamiento {activePhoto + 1}
          </div>
        )}
        <button
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl shadow"
          onClick={() => showPhoto(-1)}
          type="button"
        >
          ‹
        </button>
        <button
          aria-label="Foto siguiente"
          className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl shadow"
          onClick={() => showPhoto(1)}
          type="button"
        >
          ›
        </button>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {activePhoto + 1} / {photos.length}
        </span>
      </div>
    </section>
  );
}
