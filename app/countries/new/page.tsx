"use client";

import { Country } from "@/lib/types/country";
import { GenericCard } from "@/components/cards/GenericCard";
import { countryFields } from "@/lib/fields/countries";
import { createCountry } from "@/lib/api/countries";
import { ApiResult } from "@/lib/api/request";
import { PageHeader } from "@/components/page/PageHeader";

async function handleCreate(country: Country): Promise<ApiResult<Country>> {
  console.log("Create country:", country);

  try {
    return createCountry(country);
  } catch (err: any) {
    console.error("Create failed:", err);
    throw err;
  }
}

export default function NewCountryPage() {
  return (
    <section>
      <PageHeader title="New Country"/>
      <GenericCard<Country>
        mode="create"
        fields={countryFields}
        processSave={handleCreate}
        redirectTo="/countries"
      />
    </section>
      
  );
}