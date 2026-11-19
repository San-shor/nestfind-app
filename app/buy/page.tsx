import ListingsSection from "@/components/property/ListingsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homes for Sale in Dhaka",
  description: "Houses, apartments and villas for sale across Dhaka.",
};

export default function BuyPage() {
  return (
    <ListingsSection
      heading="Homes for"
      headingAccent="Sale"
      subtitle="Browse houses, apartments, and villas currently listed for sale across Dhaka."
      initialSearch={{ q: "", location: "", status: "For Sale" }}
    />
  );
}
