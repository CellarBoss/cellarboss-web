
import { Button } from "@/components/ui/button";
import { Save, Loader2 } from "lucide-react"

type SaveButtonProps = {
  onSave: () => Promise<void>;
  isProcessing: boolean;
}
export function SaveButton({ onSave, isProcessing }: SaveButtonProps) {
  return (
    <Button size="lg" variant="outline" onClick={onSave} disabled={isProcessing}>
      <Save />
          {isProcessing ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Saving...
            </span>
          ) : ("Save")}
    </Button>
  )
}