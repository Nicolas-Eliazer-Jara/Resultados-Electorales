import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { presidenciales2023 } from "@/app/data/presidenciales2023";

interface MainProp {
  provincia: string;
}

const colores = ["#51b9b1", "#2196f3", "#9282bf", "#f7941e"];

export default function DatosVotos({ provincia }: MainProp) {
  const [seleccionado, setSeleccionado] = useState<null | {
    nombre: string;
    valor: number;
  }>(null);

  const datosProvincia = presidenciales2023.find(
    (datos) => datos.provincia === provincia
  );

  if (!datosProvincia) return <p>No hay datos para {provincia}</p>;

  const total =
    datosProvincia.votacion.positivos +
    datosProvincia.votacion.blancos +
    datosProvincia.votacion.nulos +
    datosProvincia.votacion.impugnados;

  const votacionData = [
    { nombre: "Positivos", valor: datosProvincia.votacion.positivos },
    { nombre: "Blancos", valor: datosProvincia.votacion.blancos },
    { nombre: "Nulos", valor: datosProvincia.votacion.nulos },
    { nombre: "Impugnados", valor: datosProvincia.votacion.impugnados },
  ];

  return (
    <div className="max-h-[600px] h-[600px] overflow-y-auto p-4">
      <h1 className="text-lg font-bold mb-4">Resumen de votos</h1>

      <div className="relative w-[400px] h-[400px] mx-auto">
        <PieChart width={400} height={400}>
          <Pie
            data={votacionData}
            dataKey="valor"
            nameKey="nombre"
            cx="50%"
            cy="50%"
            outerRadius={150}
            innerRadius={80} // DONUT
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`} // porcentaje en los bordes
            onClick={(data) => setSeleccionado(data)} // guardar click
          >
            {votacionData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colores[index % colores.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Centro del círculo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {seleccionado ? (
            <>
              <p className="font-bold">{seleccionado.nombre}</p>
              <p>{seleccionado.valor.toLocaleString("es-AR")} votos</p>
              <p>
                {((seleccionado.valor / total) * 100).toFixed(1)}%
              </p>
            </>
          ) : (
            <p className="text-gray-500">Hacé click en un sector</p>
          )}
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <div className="bg-[#51b9b1] h-4 w-4 rounded-[100px] mr-1"></div>
          <h1>Positivo</h1>
        </div>

        <div className="flex items-center">
          <div className="bg-[#2196f3] h-4 w-4 rounded-[100px] mr-1"></div>
          <h1>En blanco</h1>
        </div>

        <div className="flex items-center">
          <div className="bg-[#9282bf] h-4 w-4 rounded-[100px] mr-1"></div>
          <h1>Votos nulos</h1>
        </div>

        <div className="flex items-center">
          <div className="bg-[#f7941e] h-4 w-4 rounded-[100px] mr-1"></div>
          <h1>Votos recurridos, inpugnados y comando</h1>
        </div>
      </div>
    </div>
  );
}
