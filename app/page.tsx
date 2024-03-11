import ProcessCard from "@/components/ProcessCard";
import { Process } from "@/types/types";


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
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-5xl">Teste Técnico da Stage</h1>
      <h2 className="text-4xl text-center border-l">Processos Cadastrados</h2>


      <div className="flex justify-center items-center gap-4">
        {processes.map((process: Process) => <ProcessCard key={process.id} name={process.name} department={process.department.title} description={process.description} id={process.id}></ProcessCard>)}
      </div>
    </main>
  );
}
