"use client";

import { useState } from "react";
import ListingCard from "@/components/home/ListingCard";
import { accommodations } from "@/data/accommodations";

type PriceOrder = "asc" | "desc";

export default function CatalogBrowser() {
  const [priceOrder, setPriceOrder] = useState<PriceOrder>("asc");
  const listings = [...accommodations].sort((first, second) =>
    priceOrder === "asc"
      ? first.pricePerNight - second.pricePerNight
      : second.pricePerNight - first.pricePerNight,
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 pb-12 pt-8 text-neutral-900 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-600">
            {listings.length} {listings.length === 1 ? "alojamiento" : "alojamientos"}
          </p>
          <h1 className="mt-1 text-2xl font-semibold">Estancias disponibles</h1>
        </div>
        <label className="flex items-center gap-2 text-sm font-medium">
          Ordenar por precio
          <select
            className="rounded-lg border border-neutral-300 bg-white px-3 py-2"
            onChange={(event) => setPriceOrder(event.target.value as PriceOrder)}
            value={priceOrder}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section aria-label="Alojamientos" className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:col-span-2">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </section>
        <aside aria-label="Mapa de alojamientos" className="min-h-72 lg:col-span-1">
          <div className="grid h-full min-h-72 place-items-center rounded-2xl bg-neutral-200 text-lg font-medium text-neutral-600">
            Mapa
          </div>
        </aside>
      </div>
    </main>
  );
}
