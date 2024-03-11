import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/process");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const processes = await getData();

  console.log(processes);

  return (
    <main className="flex  flex-col items-center justify-center p-24 gap-16">
      <h1 className="text-5xl">Teste Técnico da Stage</h1>
      <div className="p-4 flex gap-4">
        <Link href="/process">
          <Button>Ver Areas</Button>
        </Link>
        <Link href="/process">
          <Button>Ver Processos</Button>
        </Link>
      </div>
    </main>
  );
}
