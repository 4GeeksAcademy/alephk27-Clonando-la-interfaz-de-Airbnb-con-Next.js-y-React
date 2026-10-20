const footerGroups = [
  {
    title: "Asistencia",
    links: ["Centro de ayuda", "Seguridad", "Opciones de cancelación"],
  },
  {
    title: "Cómo ser anfitrión",
    links: ["Hazlo Airbnb", "Ofrece tu experiencia", "Recursos para hospedar"],
  },
  {
    title: "Airbnb",
    links: ["Sala de prensa", "Empleo", "Alojamientos Airbnb.org"],
  },
];

const HomeFooter = () => {
  return (
    <footer className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {footerGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-sm font-semibold">{group.title}</h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li className="text-sm text-neutral-600 hover:text-neutral-900" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-20 pt-5 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-5 lg:px-8">
          <p>© 2026 Airbnb, Inc. · Privacidad · Términos</p>
          <p>◎ Español (MX) · $ MXN</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;