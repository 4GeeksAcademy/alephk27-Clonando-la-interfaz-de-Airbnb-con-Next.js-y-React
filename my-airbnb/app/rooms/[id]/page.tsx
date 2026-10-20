import { Suspense } from "react";
import RoomRoute from "@/components/rooms/RoomRoute";
import RoomLoadingState from "@/components/rooms/RoomLoadingState";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const RoomPage = ({ params }: RoomPageProps) => {
  return (
    <Suspense fallback={<RoomLoadingState />}>
      <RoomRoute params={params} />
    </Suspense>
  );
};

export default RoomPage;
