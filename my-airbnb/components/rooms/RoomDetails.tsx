"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import RoomAmenities from "@/components/rooms/RoomAmenities";
import RoomBookingCard from "@/components/rooms/RoomBookingCard";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomHostInfo from "@/components/rooms/RoomHostInfo";
import { accommodations } from "@/data/accommodations";
import type { Accommodation, Room } from "@/types/accommodation";

interface RoomDetailsProps {
  id: string;
}

const createRoom = (listing: Accommodation): Room => ({
  ...listing,
  description: `Disfruta de una estancia cómoda en ${listing.location}. Este alojamiento es ideal para descubrir la zona y descansar durante tu viaje.`,
  photos: [listing.imageUrl, "", "", ""],
  host: { name: "Anfitrión de Airbnb", yearsHosting: 3 },
  amenities: ["Wi-Fi", "Cocina equipada", "Aire acondicionado", "Estacionamiento"],
  maxGuests: 8,
});

export default function RoomDetails({ id }: RoomDetailsProps) {
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const listing = accommodations.find((item) => item.id === id);
      if (listing) setRoom(createRoom(listing));
    }, 700);

    return () => window.clearTimeout(timer);
  }, [id]);

  if (!room) {
    return (
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
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 text-neutral-900 sm:px-6">
      <Link
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-950"
        href="/catalog"
      >
        <span aria-hidden="true">←</span>
        Volver al catálogo
      </Link>
      <h1 className="text-2xl font-semibold sm:text-3xl">{room.title}</h1>
      <p className="mb-6 mt-2 text-sm text-neutral-600">
        <span aria-hidden="true">★</span> {room.rating.toFixed(2)} ·{" "}
        {room.reviewCount} reseñas · {room.location}
      </p>
      <RoomGallery title={room.title} photos={room.photos} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <RoomHostInfo host={room.host} />
          <p className="mt-6 border-b border-neutral-200 pb-6 leading-7 text-neutral-700">
            {room.description}
          </p>
          <RoomAmenities amenities={room.amenities} />
        </div>
        <RoomBookingCard
          maxGuests={room.maxGuests}
          pricePerNight={room.pricePerNight}
        />
      </div>
    </main>
  );
}
