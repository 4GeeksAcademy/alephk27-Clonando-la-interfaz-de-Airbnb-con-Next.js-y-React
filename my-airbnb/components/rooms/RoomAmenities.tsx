interface RoomAmenitiesProps {
  amenities: string[];
}

const amenityIcons = ["⌁", "♨", "❄", "⌖"];

const RoomAmenities = ({ amenities }: RoomAmenitiesProps) => {
  return (
    <section className="py-6">
      <h2 className="text-xl font-semibold">Lo que ofrece este alojamiento</h2>
      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {amenities.map((amenity, index) => (
          <li className="flex items-center gap-3 text-neutral-700" key={amenity}>
            <span aria-hidden="true" className="text-xl">
              {amenityIcons[index % amenityIcons.length]}
            </span>
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RoomAmenities;
