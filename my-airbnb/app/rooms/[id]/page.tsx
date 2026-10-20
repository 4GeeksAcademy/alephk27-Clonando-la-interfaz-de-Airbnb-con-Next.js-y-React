import { notFound } from "next/navigation";
import { Suspense } from "react";
import RoomDetails from "@/components/rooms/RoomDetails";
import { accommodations } from "@/data/accommodations";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

export default function RoomPage({ params }: RoomPageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6">
          Cargando alojamiento...
        </main>
      }
    >
      <RoomRoute params={params} />
    </Suspense>
  );
}

const RoomRoute = async ({ params }: RoomPageProps) => {
  const { id } = await params;

  if (!accommodations.some((accommodation) => accommodation.id === id)) {
    notFound();
  }

  return <RoomDetails id={id} />;
};
