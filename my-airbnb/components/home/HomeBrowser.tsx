"use client";

import { useEffect, useState } from "react";
import CategoryRail from "@/components/home/CategoryRail";
import HomeSearchBar from "@/components/home/HomeSearchBar";
import ListingGrid from "@/components/home/ListingGrid";
import { accommodations as initialAccommodations } from "@/data/accommodations";
import type { Accommodation } from "@/types/accommodation";

const filterListings = (
  source: Accommodation[],
  searchTerm: string,
  category: string,
) => {
  const query = searchTerm.trim().toLocaleLowerCase("es");

  return source.filter((listing) => {
    const searchableText = `${listing.title} ${listing.location} ${listing.category}`
      .toLocaleLowerCase("es");

    return (
      searchableText.includes(query) &&
      (category === "Todos" || listing.category === category)
    );
  });
};

export default function HomeBrowser() {
  const [allListings, setAllListings] = useState<Accommodation[]>([]);
  const [listings, setListings] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setAllListings(initialAccommodations);
      setListings(initialAccommodations);
      setIsLoading(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  const query = searchTerm.trim().toLocaleLowerCase("es");
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setListings(filterListings(allListings, value, activeCategory));
  };
  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setListings(filterListings(allListings, searchTerm, category));
  };

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSearchBar
            disabled={isLoading}
            value={searchTerm}
            onValueChange={handleSearchChange}
          />
          <CategoryRail
            activeCategory={activeCategory}
            disabled={isLoading}
            onSelect={handleCategorySelect}
          />
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-6 lg:px-8">
        <ListingGrid
          hasFilters={query.length > 0 || activeCategory !== "Todos"}
          isLoading={isLoading}
          listings={listings}
        />
      </main>
    </>
  );
}