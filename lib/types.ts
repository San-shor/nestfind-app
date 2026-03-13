export interface Property {
  id: number;
  title: string;
  type: "House" | "Apartment" | "Villa" | "Penthouse" | "Studio";
  status: "For Sale" | "For Rent";
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  year: number;
  location: string;
  lat: number;
  lng: number;
  featured: boolean;
  agentId: number;
  tags: string[];
  images: string[];
  description: string;
}

export interface Agent {
  id: number;
  name: string;
  role: string;
  initials: string;
  color: string;
  listings: number;
  sold: number;
  rating: number;
  phone: string;
  email: string;
  bio: string;
}

export type PropertyType = "All" | "House" | "Apartment" | "Villa" | "Penthouse" | "Studio";
export type PropertyStatus = "" | "For Sale" | "For Rent";
export type SortOption = "featured" | "price-asc" | "price-desc" | "newest";
export type ViewMode = "grid" | "list";

export interface Filters {
  status: PropertyStatus;
  location: string;
  maxPrice: number;
  minBeds: string;
  type: PropertyType;
}

export interface HeroSearch {
  q: string;
  location: string;
  status: PropertyStatus;
}
