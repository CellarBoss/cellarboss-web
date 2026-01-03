"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import { getGrapeById } from "@/lib/api/grapes";
import { Grape } from "@/lib/types/grape";
import { GenericCard } from "@/components/cards/GenericCard";
import { grapeFields } from "@/lib/fields/grapes";
import { PageHeader } from "@/components/page/PageHeader";

export default function ViewGrapePage() {
  const params = useParams();
  const grapeId = params.id;

  const { data: queryResult, isLoading, error } = useQuery({
    queryKey: ['grape', grapeId],
    queryFn: () => getGrapeById(Number(grapeId)), 
    enabled: !!grapeId,
  });

  if (isLoading) return <p>Loading grape...</p>;
  if (error) return <p>An error occurred: {(error as any).message}</p>;
  if (!queryResult?.ok) return <p>Error receiving data: {queryResult?.error.message}</p>
  if (!queryResult) return <p>Grape not found.</p>;

  var grape = queryResult.data;

  return (
    <section>
      <PageHeader title={`View Grape - ${grape.name}`} />
      <GenericCard<Grape>
        mode="view"
        data={grape}
        fields={grapeFields}
      />
    </section>
  );
}
