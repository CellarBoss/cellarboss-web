export type FieldConfig<T> = {
  key: keyof T;
  label: string;
  type?: "text" | "number" | "textarea" | "country";
  editable?: boolean;
};