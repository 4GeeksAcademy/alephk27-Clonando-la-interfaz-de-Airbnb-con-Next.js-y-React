import Link from "next/link";

const tabs = [
  { label: "Explorar", icon: "⌕", active: true, href: "#home" },
  { label: "Favoritos", icon: "♡", active: false, href: "#home" },
  { label: "Iniciar sesión", icon: "◎", active: false, href: "#home" },
];

const MobileTabBar = () => {
  return (
    <nav
      aria-label="Navegación móvil"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-8 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-sm items-center justify-around">
        {tabs.map((tab) => (
          <li key={tab.label}>
            <Link
              aria-current={tab.active ? "page" : undefined}
              className={`flex min-w-16 flex-col items-center gap-1 text-[10px] ${
                tab.active ? "text-rose-600" : "text-neutral-500"
              }`}
              href={tab.href}
            >
              <span aria-hidden="true" className="text-2xl leading-none">
                {tab.icon}
              </span>
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileTabBar;