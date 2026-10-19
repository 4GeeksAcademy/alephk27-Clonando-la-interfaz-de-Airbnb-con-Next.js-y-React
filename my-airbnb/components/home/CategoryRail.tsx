const categories = [
  { label: "Todos", icon: "✦" },
  { label: "Playa", icon: "🏖️" },
  { label: "Cabañas", icon: "🏡" },
  { label: "Mansiones", icon: "🏰" },
  { label: "Vistas", icon: "⛰️" },
  { label: "Diseño", icon: "🪑" },
  { label: "Tendencias", icon: "🔥" },
];

interface CategoryRailProps {
  activeCategory: string;
  disabled: boolean;
  onSelect: (category: string) => void;
}

export default function CategoryRail({
  activeCategory,
  disabled,
  onSelect,
}: CategoryRailProps) {
  return (
    <nav aria-label="Filtrar alojamientos por categoría" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex min-w-max items-stretch gap-7">
        {categories.map((category) => {
          const isActive = activeCategory === category.label;

          return (
            <li key={category.label}>
              <button
                aria-pressed={isActive}
                disabled={disabled}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 border-b-2 px-1 text-xs font-medium transition ${
                  isActive
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"
                }`}
                onClick={() => onSelect(category.label)}
                type="button"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {category.icon}
                </span>
                <span>{category.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}