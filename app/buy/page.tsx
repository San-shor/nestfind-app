import ListingsSection from "@/components/property/ListingsSection";

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
