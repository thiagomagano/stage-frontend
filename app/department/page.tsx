import ProcessCard from "@/components/ProcessCard";
import { Button } from "@/components/ui/button";
import { DepartmentInfo, Process } from "@/types/types";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/department");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const department = await getData();

  return (
    <>
      <h2 className="text-4xl text-center border-l">Áreas Cadastradas</h2>

      <div className="flex flex-col justify-center items-center gap-4 w-[500px]">
        <div className="flex flex-col gap-8 justify-between items-center w-full">
          <div className="flex w-full justify-between gap-8 items-center">
            <div>ID</div>
            <div>Nome</div>
            <div>
              <Link href={`/process`}>
                <Button>Ver todos</Button>
              </Link>
            </div>
          </div>
          {department.map((department: DepartmentInfo) => (
            <div className="flex w-full justify-between gap-8 items-center">
              <div> {department.id}</div>
              <div> {department.title}</div>
              <div>
                <Link href={`/process/`}>
                  <Button className="bg-green-600">Ver processos</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
