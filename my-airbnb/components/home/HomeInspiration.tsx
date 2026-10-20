const destinations = [
  ["Nashville", "Cabañas"],
  ["Galveston", "Villas"],
  ["Tampa", "Condominios"],
  ["Washington", "Departamentos"],
  ["Barcelona", "Alquileres vacacionales"],
  ["Filadelfia", "Departamentos"],
];

const HomeInspiration = () => {
  return (
    <section id="inspiration" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Inspiración para futuras escapadas</h2>
        <div className="mt-5 flex gap-6 overflow-x-auto border-b border-neutral-200 text-sm font-medium text-neutral-600">
          <span className="border-b-2 border-neutral-900 pb-3 text-neutral-900">Populares</span>
          <span className="whitespace-nowrap pb-3">Arte y cultura</span>
          <span className="pb-3">Playa</span>
          <span className="pb-3">Montaña</span>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 sm:grid-cols-3 lg:grid-cols-6">
          {destinations.map(([place, stayType]) => (
            <li key={place}>
              <p className="text-sm font-medium">{place}</p>
              <p className="mt-1 text-sm text-neutral-500">{stayType}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeInspiration;