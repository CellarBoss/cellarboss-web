"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getCountryById } from "@/lib/api/countries";
import { Country } from "@/lib/types/country";
import { GenericCard } from "@/components/cards/GenericCard";
import { countryFields } from "@/lib/fields/countries";
import { PageHeader } from "@/components/page/PageHeader";

export default function ViewCountryPage() {
  const params = useParams();
  const countryId = params.id;

  const { data: country, isLoading, error } = useQuery({
    queryKey: ['country', countryId],
    queryFn: () => getCountryById(Number(countryId)), 
    enabled: !!countryId,
  });

  if (isLoading) return <p>Loading country...</p>;
  if (error) return <p>An error occurred: {(error as any).message}</p>;
  if (!country) return <p>Country not found.</p>;

  return (
    <>
      <PageHeader title={`Viewing Country ${country.name}`} />
      <GenericCard<Country>
        mode="view"
        data={country}
        fields={countryFields}
      />
    </>
  );
}
