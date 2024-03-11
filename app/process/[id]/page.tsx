async function getData(id: number) {
  const res = await fetch("http://localhost:3000/process/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export default async function Page({ params }: { params: { id: number } }) {

  const data = await getData(params.id);
  const steps = data.steps;

  return (
    <>
      <div className="p-8 flex items-center flex-col">
        <h1 className="text-2xl font-bold mb-4">{data.name}</h1>

        <div className="p-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Node bgColor="bg-green-300" name="Inicio" shape="rounded-full" />
              <div className="h-16 w-2 bg-gray-300"></div>
              {steps.map(s => {

                return (<>
                  <Node name={s.name} shape="rounded-3xl" />
                  {/* //ultimo não deve renderizar a ligação */}
                  <div className="h-16 w-2 bg-gray-300"></div>
                </>)
              }
              )}
              <Node bgColor="bg-red-300" name='Fim' shape="rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


const Node = ({ name, bgColor, shape }: NodeProps) => {
  return <>

    <div className={`h-36 w-52 ${bgColor}   ${shape} shadow-lg flex items-center justify-center`}>
      <span className="text-gray-700 text-xl font-semibold p-6">{name}</span>
    </div>
  </>
}

interface NodeProps {
  name: string;
  bgColor?: "bg-green-300";
  shape?: string;
}