import type { Host } from "@/types/accommodation";

interface RoomHostInfoProps {
  host: Host;
}

const RoomHostInfo = ({ host }: RoomHostInfoProps) => {
  return (
    <section className="flex items-center gap-4 border-b border-neutral-200 pb-6">
      {host.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt=""
          className="size-14 rounded-full object-cover"
          src={host.avatarUrl}
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid size-14 place-items-center rounded-full bg-neutral-200 text-xl text-neutral-600"
        >
          {host.name.charAt(0)}
        </div>
      )}
      <div>
        <h2 className="font-semibold">Alojamiento de {host.name}</h2>
        <p className="mt-1 text-sm text-neutral-500">
          {host.yearsHosting} años como anfitrión
        </p>
      </div>
    </section>
  );
};

export default RoomHostInfo;
