import * as z from "zod";
import { Region } from "@/lib/types/region";
import { FieldConfig } from "@/lib/types/field";

export const regionFields: FieldConfig<Region>[] = [
  {
    key: "name",
    label: "Name",
    validator:
      z.string()
      .min(2, "Region name must be at least 2 characters")
    ,
  },
  {
    key: "countryId",
    label: "Country",
    type: "country",
    validator:
      z.coerce
      .number("You must select a country")
    ,
  }
];