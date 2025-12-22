import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to CellarBoss 🍷</h1>
      <p className="text-gray-600">Track and manage your cellar in one place.</p>
      <UserDisplay />
    </section>
  );
}

export async function UserDisplay() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  return (
      <p>Hello, { session.user.username }</p>
  )
}