import { notFound } from "next/navigation";
import RoomDetails from "@/components/rooms/RoomDetails";
import { accommodations } from "@/data/accommodations";

interface RoomRouteProps {
  params: Promise<{ id: string }>;
}

const RoomRoute = async ({ params }: RoomRouteProps) => {
  const { id } = await params;

  if (!accommodations.some((accommodation) => accommodation.id === id)) {
    notFound();
  }

  return <RoomDetails id={id} key={id} />;
};

export default RoomRoute;
