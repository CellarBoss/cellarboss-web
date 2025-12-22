"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getCountryById } from "@/lib/api/countries";
import { Country } from "@/lib/types/country";
import { GenericCard } from "@/components/cards/GenericCard";
import { countryFields } from "@/lib/fields/countries";
import { updateCountry } from "@/lib/api/countries";

async function handleUpdate(country: Country): Promise<boolean> {
  console.log("Update country:", country);

  try {
    updateCountry(country);
    return true;
  } catch (err: any) {
    console.error("Update failed:", err);
    throw err;
  }
}

export default function EditCountryPage() {
  const params = useParams();
  const countryId = Number(params.id);

  const { data: country, isLoading, error } = useQuery({
    queryKey: ["country", countryId],
    queryFn: () => getCountryById(countryId),
    enabled: !!countryId,
  });

  if (isLoading) return <p>Loading country...</p>;
  if (error) return <p>An error occurred: {(error as any).message}</p>;
  if (!country) return <p>Country not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Country</h1>
      <GenericCard<Country>
        mode="edit"
        data={country}
        fields={countryFields}
        processSave={handleUpdate}
        redirectTo="/countries"
      />
    </div>
  );
}