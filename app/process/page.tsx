import ProcessCard from "@/components/ProcessCard";
import { Button } from "@/components/ui/button";
import { Process } from "@/types/types";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/process");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const processes = await getData();

  console.log(processes);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl text-center border-l">Processos Cadastrados</h2>
      </div>

      <div className="flex justify-center items-center gap-4">
        {processes.map((process: Process) => (
          <ProcessCard
            key={process.id}
            name={process.name}
            department={process.department.title}
            description={process.description}
            id={process.id}
          ></ProcessCard>
        ))}
      </div>
      <Link href="/process/cadastro">
        <Button className="bg-green-600">Cadastrar Novo Processo</Button>
      </Link>
    </>
  );
}
