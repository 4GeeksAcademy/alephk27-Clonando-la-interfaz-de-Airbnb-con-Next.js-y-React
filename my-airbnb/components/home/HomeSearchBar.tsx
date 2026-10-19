interface HomeSearchBarProps {
  disabled: boolean;
  value: string;
  onValueChange: (value: string) => void;
}

export default function HomeSearchBar({
  disabled,
  value,
  onValueChange,
}: HomeSearchBarProps) {
  return (
    <div className="flex min-h-16 items-center justify-between gap-3 py-3">
      <a
        aria-label="Airbnb, inicio"
        className="hidden shrink-0 items-center gap-2 text-rose-600 md:flex"
        href="#home"
      >
        <span aria-hidden="true" className="text-3xl leading-none">⌂</span>
        <span className="text-xl font-bold">airbnb</span>
      </a>
      <form
        className="flex h-12 min-w-0 flex-1 items-center rounded-full border border-neutral-200 bg-white px-4 shadow-sm transition hover:shadow-md sm:h-14 sm:px-5 md:max-w-lg"
        onSubmit={(event) => event.preventDefault()}
        role="search"
      >
        <span aria-hidden="true" className="mr-3 text-lg">⌕</span>
        <input
          aria-label="Buscar por destino, nombre o categoría"
          className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-neutral-700 disabled:cursor-wait"
          disabled={disabled}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder="Comienza a explorar"
          type="search"
          value={value}
        />
        <span className="hidden border-l border-neutral-200 pl-4 text-xs text-neutral-500 sm:block">
          Destino, nombre o categoría
        </span>
        <button
          aria-label="Buscar"
          className="ml-2 grid size-8 shrink-0 place-items-center rounded-full bg-rose-500 text-lg text-white transition hover:bg-rose-600 disabled:opacity-50"
          disabled={disabled}
          type="submit"
        >
          ⌕
        </button>
      </form>
      <div className="hidden shrink-0 items-center gap-2 md:flex">
        <button className="rounded-full px-3 py-2 text-sm font-medium hover:bg-neutral-100" type="button">
          Conviértete en anfitrión
        </button>
        <button
          aria-label="Abrir menú de usuario"
          className="flex h-10 items-center gap-3 rounded-full border border-neutral-300 px-3 text-neutral-600 shadow-sm hover:shadow-md"
          type="button"
        >
          <span aria-hidden="true">☰</span>
          <span aria-hidden="true" className="grid size-7 place-items-center rounded-full bg-neutral-500 text-white">●</span>
        </button>
      </div>
      <button
        aria-label="Abrir menú de usuario"
        className="grid size-10 shrink-0 place-items-center rounded-full border border-neutral-300 text-neutral-600 md:hidden"
        type="button"
      >
        ☰
      </button>
    </div>
  );
}