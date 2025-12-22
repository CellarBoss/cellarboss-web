export default function WineCard({ wine }: { wine: any }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{wine.name}</h3>
      <p className="text-sm text-gray-600">{wine.region}</p>
      <p className="mt-2 text-gray-800">{wine.vintage}</p>
    </div>
  );
}