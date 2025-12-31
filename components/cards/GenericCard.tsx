import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { Field } from "./Field";
import { SaveButton } from "@/components/buttons/SaveButton";
import { FieldConfig } from "@/lib/types/field";
import { BackButton } from "../buttons/BackButton";
import { ApiResult } from "@/lib/api/request";

type GenericCardProps<T extends object> = {
  mode: "view" | "edit" | "create" | "clone";
  data?: T;
  fields: FieldConfig<T>[];
  processSave?: (data: T) => Promise<ApiResult<T>>;
  onChangeData?: (data: T) => void;
  redirectTo?: string;
};

export function GenericCard<T extends object>({
  mode,
  data,
  fields,
  processSave,
  onChangeData,
  redirectTo = "/",
}: GenericCardProps<T>) {
  const router = useRouter();
  const editable = mode !== "view";

  const [localData, setLocalData] = useState<T>(data ?? ({} as T));
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (data) setLocalData(data);
  }, [data]);

  const handleFieldChange = <K extends keyof T>(field: K, value: T[K]) => {
    const updated = { ...localData, [field]: value };
    setLocalData(updated);
    onChangeData?.(updated);
  };

  const handleSave = async () => {
    if (!processSave) {
      console.error("Tried to save but no processSave function provided.");
      return;
    }
    setIsProcessing(true);
    setErrorMessage(null);
    try {
      var result = await processSave(localData);

      if(!result.ok) {
        var errors = [];
        for(let err in result.error.errors) {
          errors.push(result.error.errors[err]);
        }
        setErrorMessage(result.error.message + ": " + errors.join(", "));
        return;
      }

      router.push(redirectTo);
    } catch (err: any) {
      console.error(err);
      var message = JSON.parse(err.message).error;
      setErrorMessage(message || "Something went wrong.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Card>
        {fields.map((field) => (
          <Field
            key={String(field.key)}
            label={field.label}
            value={(localData[field.key] as any) ?? ""}
            editable={editable && field.editable !== false}
            onChange={(val) => handleFieldChange(field.key, val as any)}
          />
        ))}
      </Card>
      <span className="flex items-center gap-4 mt-4">
        <BackButton />
        {editable && (
          <SaveButton onSave={handleSave} isProcessing={isProcessing} />
        )}

        {errorMessage && (
          <span className="mx-2 text-red-600">{errorMessage}</span>
        )}
      </span>
    </>
  );
}