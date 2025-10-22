import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
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
    <div className="max-h-[600px] h-[450px] overflow-y-auto p-4">
      <h1 className="text-lg font-bold">Resumen de votos</h1>

      {/* Gráfico circular responsivo y centrado */}
      <div className="relative w-full max-w-[300px] h-[250px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={votacionData}
              dataKey="valor"
              nameKey="nombre"
              cx="50%"
              cy="50%"
              outerRadius="90%"
              innerRadius="45%"
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
        </ResponsiveContainer>
      </div>

      {/* Leyenda manual */}
      <div className="mt-1 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#51b9b1] h-4 w-4 rounded-full mr-2"></div>
            <span>Votos Positivos</span>
          </div>
          <span>{data.votacion.positivos.toLocaleString("es-AR")}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#2196f3] h-4 w-4 rounded-full mr-2"></div>
            <span>Votos en Blanco</span>
          </div>
          <span>{data.votacion.blancos.toLocaleString("es-AR")}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#9282bf] h-4 w-4 rounded-full mr-2"></div>
            <span>Votos Nulos</span>
          </div>
          <span>{data.votacion.nulos.toLocaleString("es-AR")}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#f7941e] h-4 w-4 rounded-full mr-2"></div>
            <span>Recurridos / Impugnados / Comando</span>
          </div>
          <span>{data.votacion.impugnados.toLocaleString("es-AR")}</span>
        </div>
      </div>
    </div>
  );
}
