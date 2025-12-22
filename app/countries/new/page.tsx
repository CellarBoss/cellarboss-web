"use client";

import { Country } from "@/lib/types/country";
import { GenericCard } from "@/components/cards/GenericCard";
import { countryFields } from "@/lib/fields/countries";
import { createCountry } from "@/lib/api/countries";

async function handleCreate(country: Country): Promise<boolean> {
  console.log("Create country:", country);

  try {
    await createCountry(country);
    return true;
  } catch (err: any) {
    console.error("Create failed:", err);
    throw err;
  }
}

export default function NewCountryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Country</h1>
      <GenericCard<Country>
        mode="create"
        fields={countryFields}
        processSave={handleCreate}
        redirectTo="/countries"
      />
    </div>
  );
}