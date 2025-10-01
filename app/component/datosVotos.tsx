'use client'

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Votacion } from "../types/Form";

interface MainProp {
  data: Votacion | null;
}

const colores = ["#51b9b1", "#2196f3", "#9282bf", "#f7941e"];

export default function DatosVotos({ data }: MainProp) {
  console.log("la data de datosVotos", data);

  const [seleccionado, setSeleccionado] = useState<null | {
    nombre: string;
    valor: number;
  }>(null);

  // si no hay data, no intenta renderizar nada
  if (!data) return <p>No hay datos</p>;

  const total =
    (data.votacion.positivos ?? 0) +
    (data.votacion.blancos ?? 0) +
    (data.votacion.nulos ?? 0) +
    (data.votacion.impugnados ?? 0);

  const votacionData = [
    { nombre: "Positivos", valor: data.votacion.positivos ?? 0 },
    { nombre: "Blancos", valor: data.votacion.blancos ?? 0 },
    { nombre: "Nulos", valor: data.votacion.nulos ?? 0 },
    { nombre: "Impugnados", valor: data.votacion.impugnados ?? 0 },
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
  label={({ value }) => `${((value / total) * 100).toFixed(1)}%`}
  onClick={(_, index) => setSeleccionado(votacionData[index])}
>
  {votacionData.map((_, index) => (
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
              <p>{((seleccionado.valor / total) * 100).toFixed(1)}%</p>
            </>
          ) : (
            <p className="text-gray-500">Hacé click en un sector</p>
          )}
        </div>
      </div>

      {/* Leyenda manual */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center">
          <div className="bg-[#51b9b1] h-4 w-4 rounded-full mr-1"></div>
          <h1>Positivos</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-[#2196f3] h-4 w-4 rounded-full mr-1"></div>
          <h1>En blanco</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-[#9282bf] h-4 w-4 rounded-full mr-1"></div>
          <h1>Nulos</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-[#f7941e] h-4 w-4 rounded-full mr-1"></div>
          <h1>Recurridos / Impugnados / Comando</h1>
        </div>
      </div>
    </div>
  );
}
