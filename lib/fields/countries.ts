import * as z from "zod";
import { Country } from "@/lib/types/country";
import { FieldConfig } from "@/lib/types/field";

export const countryFields: FieldConfig<Country>[] = [
  {
    key: "name",
    label: "Name",
    validator:
      z.string()
      .min(2, "Country name must be at least 2 characters")
    ,
  },
];