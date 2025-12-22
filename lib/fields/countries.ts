import { Country } from "@/lib/types/country";
import { FieldConfig } from "@/lib/types/field";

export const countryFields: FieldConfig<Country>[] = [
  {
    key: "name",
    label: "Name",
  },
];