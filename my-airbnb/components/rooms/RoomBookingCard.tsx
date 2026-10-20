"use client";

import { useState } from "react";

interface RoomBookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

export default function RoomBookingCard({
  pricePerNight,
  maxGuests,
}: RoomBookingCardProps) {
  const [guests, setGuests] = useState(1);

  return (
    <aside className="h-fit rounded-2xl border border-neutral-200 p-5 shadow-lg lg:sticky lg:top-8">
      <p className="text-xl">
        <span className="font-semibold">
          ${pricePerNight.toLocaleString("es-MX")} MXN
        </span>{" "}
        <span className="text-sm text-neutral-600">por noche</span>
      </p>
      <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-300 p-4">
        <div>
          <p className="text-sm font-semibold">Huéspedes</p>
          <p aria-live="polite" className="text-sm text-neutral-500">
            {guests} {guests === 1 ? "huésped" : "huéspedes"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Reducir huéspedes"
            className="grid size-8 place-items-center rounded-full border border-neutral-400 disabled:opacity-40"
            disabled={guests <= 1}
            onClick={() => setGuests((count) => Math.max(1, count - 1))}
            type="button"
          >
            −
          </button>
          <button
            aria-label="Aumentar huéspedes"
            className="grid size-8 place-items-center rounded-full border border-neutral-400 disabled:opacity-40"
            disabled={guests >= maxGuests}
            onClick={() => setGuests((count) => Math.min(maxGuests, count + 1))}
            type="button"
          >
            +
          </button>
        </div>
      </div>
      <button
        className="mt-4 w-full rounded-xl bg-rose-600 px-5 py-3 font-semibold text-white transition hover:bg-rose-700"
        type="button"
      >
        Reservar
      </button>
    </aside>
  );
}
