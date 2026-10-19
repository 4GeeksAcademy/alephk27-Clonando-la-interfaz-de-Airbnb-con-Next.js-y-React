const services = [
  { icon: "📷", label: "Fotografía" },
  { icon: "🥗", label: "Chefs" },
  { icon: "💆", label: "Masajes" },
  { icon: "🏋️", label: "Entrenamiento" },
];

export default function HomeServices() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold sm:text-2xl">
        Encuentra servicios cerca de ti
      </h2>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {services.map((service) => (
          <div className="rounded-2xl bg-neutral-50 p-4" key={service.label}>
            <span aria-hidden="true" className="text-3xl">{service.icon}</span>
            <p className="mt-3 text-sm font-medium">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}