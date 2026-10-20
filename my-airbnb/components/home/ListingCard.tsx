"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Accommodation } from "@/types/accommodation";

interface ListingCardProps {
  listing: Accommodation;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
        <Link
          aria-label={`Ver ${listing.title}, en ${listing.location}`}
          className="absolute inset-0 block"
          href={`/rooms/${listing.id}`}
        >
          <Image
            alt={`Alojamiento: ${listing.title}, en ${listing.location}`}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
            src={listing.imageUrl}
          />
        </Link>
        <button
          aria-label={isSaved ? "Quitar de favoritos" : "Guardar en favoritos"}
          aria-pressed={isSaved}
          className={`absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-white/90 text-2xl leading-none shadow-sm transition hover:scale-105 ${
            isSaved ? "text-rose-500" : "text-neutral-700"
          }`}
          onClick={() => setIsSaved((saved) => !saved)}
          type="button"
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>
      <Link
        className="mt-3 flex items-start justify-between gap-3"
        href={`/rooms/${listing.id}`}
      >
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-neutral-900">
            {listing.title}
          </h2>
          <p className="mt-1 truncate text-sm text-neutral-500">
            {listing.location} · {listing.category}
          </p>
          <p className="mt-1 text-sm text-neutral-500">Disponible todo el año</p>
          <p className="mt-2 text-sm text-neutral-900">
            <span className="font-semibold">
              ${listing.pricePerNight.toLocaleString("es-MX")} MXN
            </span>{" "}
            por noche
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-sm text-neutral-800">
          <span aria-hidden="true">★</span>
          {listing.rating.toFixed(2)}
        </span>
      </Link>
    </article>
  );
};

export default ListingCard;