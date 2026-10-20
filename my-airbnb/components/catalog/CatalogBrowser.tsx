"use client";

import { useState } from "react";
import CategoryRail from "@/components/home/CategoryRail";
import HomeSearchBar from "@/components/home/HomeSearchBar";
import ListingCard from "@/components/home/ListingCard";
import CatalogResultsHeader from "@/components/catalog/CatalogResultsHeader";
import { accommodations } from "@/data/accommodations";

type PriceOrder = "asc" | "desc";

const CatalogBrowser = () => {
  const [priceOrder, setPriceOrder] = useState<PriceOrder>("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const query = searchTerm.trim().toLocaleLowerCase("es");
  const filteredListings = accommodations.filter((listing) => {
    const searchableText =
      `${listing.title} ${listing.location} ${listing.category}`.toLocaleLowerCase("es");

    return (
      searchableText.includes(query) &&
      (activeCategory === "Todos" || listing.category === activeCategory)
    );
  });
  const listings = [...filteredListings].sort((first, second) =>
    priceOrder === "asc"
      ? first.pricePerNight - second.pricePerNight
      : second.pricePerNight - first.pricePerNight,
  );

  return (
    <div className="min-h-screen text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSearchBar
            disabled={false}
            onValueChange={setSearchTerm}
            value={searchTerm}
          />
          <CategoryRail
            activeCategory={activeCategory}
            disabled={false}
            onSelect={setActiveCategory}
          />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <CatalogResultsHeader
          count={listings.length}
          onOrderChange={setPriceOrder}
          order={priceOrder}
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section
            aria-label="Alojamientos"
            className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:col-span-2"
          >
            {listings.length ? (
              listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <p className="col-span-full py-10 text-center text-neutral-600">
                No encontramos alojamientos con esos filtros.
              </p>
            )}
          </section>
          <aside aria-label="Mapa de alojamientos" className="min-h-72 lg:col-span-1">
            <div className="grid h-full min-h-72 place-items-center rounded-2xl bg-neutral-200 text-lg font-medium text-neutral-600">
              Mapa
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
export default CatalogBrowser;
