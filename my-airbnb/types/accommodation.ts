export interface Accommodation {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  category: string;
  imageUrl: string;
}

export interface Host {
  name: string;
  yearsHosting: number;
  avatarUrl?: string;
}

export interface Room extends Accommodation {
  description: string;
  photos: string[];
  host: Host;
  amenities: string[];
  maxGuests: number;
}