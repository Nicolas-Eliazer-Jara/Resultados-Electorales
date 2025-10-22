'use client'

import { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  PieLabelRenderProps,
} from "recharts";
import { ProvinciaResult } from "../types/candidatos";

interface MainProp {
  data?: ProvinciaResult | null;
}

interface VotoItem {
  nombre: string;
  valor: number;
}

const colores = ["#51b9b1", "#2196f3", "#9282bf", "#f7941e"];

export default function DatosVotos({ data }: MainProp) {
  const [seleccionado, setSeleccionado] = useState<VotoItem | null>(null);

  if (!data) return <p>No hay datos</p>;

  const positivos = Number(data.votacion?.positivos ?? 0);
  const blancos = Number(data.votacion?.blancos ?? 0);
  const nulos = Number(data.votacion?.nulos ?? 0);
  const impugnados = Number(data.votacion?.impugnados ?? 0);

  const total = positivos + blancos + nulos + impugnados;

  const votacionData: { nombre: string; valor: number }[] = [
    { nombre: "Positivos", valor: positivos },
    { nombre: "Blancos", valor: blancos },
    { nombre: "Nulos", valor: nulos },
    { nombre: "Impugnados", valor: impugnados },
  ];

  // Función tipada correctamente para label
  const renderLabel = (entry: PieLabelRenderProps) => {
    const value = typeof entry.value === "number" ? entry.value : 0;
    return total > 0 ? `${((value / total) * 100).toFixed(1)}%` : "0.0%";
  };

  return (
    <div className="max-h-[600px] h-[450px] overflow-y-auto p-4">
      <h1 className="text-lg font-bold">Resumen de votos</h1>

      <div className="relative w-full max-w-[300px] h-[260px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={votacionData}
              dataKey="valor"
              nameKey="nombre"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              innerRadius="45%"
              label={renderLabel}
              onClick={(_, index: number) => setSeleccionado(votacionData[index])}
            >
              {votacionData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colores[index % colores.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => value.toLocaleString("es-AR")} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-2">
        {seleccionado ? (
          <>
            <p className="font-bold">{seleccionado.nombre}</p>
            <p>{seleccionado.valor.toLocaleString("es-AR")} votos</p>
            <p>
              {total > 0
                ? ((seleccionado.valor / total) * 100).toFixed(1)
                : "0.0"}
              %
            </p>
          </>
        ) : (
          <p className="text-gray-500">Hacé click en un sector</p>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {votacionData.map((v, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center">
              <div
                className="h-4 w-4 rounded-full mr-2"
                style={{ backgroundColor: colores[i] }}
              />
              <span>Votos {v.nombre}</span>
            </div>
            <span>{v.valor.toLocaleString("es-AR")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
