import ListingsSection from "@/components/property/ListingsSection";

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
