'use client'

import Image from "next/image";
import { partidoColor, partidoColorClaro } from "@/app/data/Generales";
import { ProvinciaResult } from "../types/candidatos";
import DatosVotos from "./datosVotos";

interface mainProp {
  data?: ProvinciaResult | null;
}

export default function DatosElectorales({ data }: mainProp) {
  console.log('la data de datosElectorales', data);

  return (
    <div className="max-h-[800px] h-[800px] overflow-y-auto list-none p-4 custom-scroll">
      <h1 className="mb-10 font-semibold">Agrupaciones políticas</h1>

      {data?.resultados.map((res) => (
        <li
          key={res.nombre}
          className="mb-10 border-b-2 border-b-gray-100 pb-4"
        >
          {/* Encabezado con logo, nombre y porcentaje */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Image
                className="mr-3 object-contain"
                src={res.logo}
                alt={res.nombre}
                width={40}
                height={40}
              />
              <h1 className="font-medium text-[20px]">{res.nombre}</h1>
            </div>

            <div className="text-[15px] font-semibold">
              {res.porcentaje.toFixed(2)}%
            </div>
          </div>

          {/* Votos */}
          <div className="text-sm text-gray-600 mb-3">
            {res.votos.toLocaleString("es-AR")} votos
          </div>

          {/* Barra de porcentaje */}
          <div
            className="w-full h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: partidoColorClaro[res.nombre] }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${res.porcentaje}%`,
                backgroundColor: partidoColor[res.nombre],
              }}
            ></div>
          </div>
        </li>
      ))}

      <DatosVotos data={data} />
    </div>
  );
}
