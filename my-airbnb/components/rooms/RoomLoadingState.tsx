const RoomLoadingState = () => (
  <main
    aria-live="polite"
    className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6"
  >
    <div className="animate-pulse">
      <div className="h-8 w-2/3 rounded bg-neutral-200" />
      <div className="mt-6 aspect-[4/3] rounded-2xl bg-neutral-200 sm:aspect-[16/9]" />
      <p className="mt-4 text-sm text-neutral-500">Cargando alojamiento...</p>
    </div>
  </main>
);

export default RoomLoadingState;
