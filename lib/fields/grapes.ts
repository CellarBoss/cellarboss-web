import * as z from "zod";
import { Grape } from "@/lib/types/grape";
import { FieldConfig } from "@/lib/types/field";

export const grapeFields: FieldConfig<Grape>[] = [
  {
    key: "name",
    label: "Name",
    validator:
      z.string()
      .min(2, "Grape name must be at least 2 characters")
    ,
  },
];