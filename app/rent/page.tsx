import ListingsSection from "@/components/property/ListingsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homes for Rent in Dhaka",
  description: "Apartments, studios and villas to rent in Dhaka, with monthly prices.",
};

export default function RentPage() {
  return (
    <ListingsSection
      heading="Homes for"
      headingAccent="Rent"
      subtitle="Apartments, studios, and villas available to rent, with monthly prices."
      initialSearch={{ q: "", location: "", status: "For Rent" }}
    />
  );
}
