interface CatalogResultsHeaderProps {
  count: number;
  order: "asc" | "desc";
  onOrderChange: (order: "asc" | "desc") => void;
}

const CatalogResultsHeader = ({
  count,
  order,
  onOrderChange,
}: CatalogResultsHeaderProps) => (
  <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
    <div>
      <p className="text-sm text-neutral-600">
        {count} {count === 1 ? "alojamiento" : "alojamientos"}
      </p>
      <h1 className="mt-1 text-2xl font-semibold">Estancias disponibles</h1>
    </div>
    <label className="flex items-center gap-2 text-sm font-medium">
      Ordenar por precio
      <select
        className="rounded-lg border border-neutral-300 bg-white px-3 py-2"
        onChange={(event) => onOrderChange(event.target.value as "asc" | "desc")}
        value={order}
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </label>
  </header>
);

export default CatalogResultsHeader;
