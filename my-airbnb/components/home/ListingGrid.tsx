import type { Accommodation } from "@/types/accommodation";
import ListingCard from "@/components/home/ListingCard";
import Link from "next/link";

interface ListingGridProps {
  listings: Accommodation[];
  isLoading: boolean;
  hasFilters: boolean;
}

const ListingGrid = ({
  listings,
  isLoading,
  hasFilters,
}: ListingGridProps) => {
  if (isLoading) {
    return (
      <div aria-label="Cargando alojamientos" aria-live="polite" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="animate-pulse" key={index}>
            <div className="aspect-[4/3] rounded-2xl bg-neutral-200" />
            <div className="mt-3 h-4 w-3/4 rounded bg-neutral-200" />
            <div className="mt-2 h-4 w-1/2 rounded bg-neutral-100" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section aria-live="polite">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
            Estancias seleccionadas
          </p>
          <h1 className="mt-1 text-xl font-semibold sm:text-2xl">
            Alojamientos para tu próxima escapada
          </h1>
          <Link
            className="mt-2 inline-block text-sm font-semibold text-rose-600 underline-offset-4 hover:underline"
            href="/catalog"
          >
            Ver todos los alojamientos
          </Link>
        </div>
        <p className="shrink-0 text-sm text-neutral-500">
          {listings.length} {listings.length === 1 ? "opción" : "opciones"}
        </p>
      </div>
      {listings.length ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-neutral-300 px-6 py-14 text-center">
          <p className="text-lg font-medium">No encontramos alojamientos</p>
          <p className="mt-2 text-sm text-neutral-500">
            {hasFilters
              ? "Prueba con otro destino o categoría."
              : "Vuelve a intentarlo más tarde."}
          </p>
        </div>
      )}
    </section>
  );
};

export default ListingGrid;