import { Region } from "@/lib/types/region";
import { FieldConfig } from "@/lib/types/field";

export const regionFields: FieldConfig<Region>[] = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "countryId",
    label: "Country",
    type: "country"
  }
];