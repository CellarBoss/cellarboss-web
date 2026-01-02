"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getRegionById } from "@/lib/api/regions";
import { Region } from "@/lib/types/region";
import { GenericCard } from "@/components/cards/GenericCard";
import { PageHeader } from "@/components/page/PageHeader";
import { regionFields } from "@/lib/fields/regions";

export default function ViewCountryPage() {
  const params = useParams();
  const regionId = params.id;

  const { data: queryResult, isLoading, error } = useQuery({
    queryKey: ['region', regionId],
    queryFn: () => getRegionById(Number(regionId)), 
    enabled: !!regionId,
  });

  if (isLoading) return <p>Loading region...</p>;
  if (error) return <p>An error occurred: {(error as any).message}</p>;
  if (!queryResult?.ok) return <p>Error receiving data: {queryResult?.error.message}</p>
  if (!queryResult) return <p>Region not found.</p>;

  var region = queryResult.data;

  return (
    <section>
      <PageHeader title={`View Region - ${region.name}`} />
      <GenericCard<Region>
        mode="view"
        data={region}
        fields={regionFields}
      />
    </section>
  );
}
