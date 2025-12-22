type FieldProps = {
  label: string;
  value?: string;
  editable?: boolean;
  onChange?: (value: string) => void;
};

export const Field: React.FC<FieldProps> = ({
  label,
  value,
  editable = true,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {editable ? (
        <input
          type="text"
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      ) : (
        <p className="mt-1">{value}</p>
      )}
    </div>
  );
  };