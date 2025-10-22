'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DatosElectorales from "./datosElectorales";
import DatosMap from "./datosMap";
import { Balotage } from "@/app/data/Balotage";
import { Generales } from "@/app/data/Generales";
import { ProvinciaResult } from "../types/Form";
import InfoEleccion from "./infoEleccion";
import InfoCandidatos from "./infoCandidatos";

interface mainProp {
  provincia: string;
  election: string;
}

export default function Main({ provincia, election }: mainProp) {
  const [data, setData] = useState<ProvinciaResult>();
  const [typeElection, setTypeElection] = useState<string>();

  useEffect(() => {
    const datosBallotage = Balotage?.find((d) => d.provincia === provincia);
    const datosGenerales = Generales?.find((d) => d.provincia === provincia);

    if (election === "Generales") {
      setData(datosGenerales);
      setTypeElection("22 de Octubre 2023 | Generales");
    } else {
      setData(datosBallotage);
      setTypeElection("19 de Noviembre 2023 | Balotaje");
    }
  }, [provincia, election]);

  const formateado = (data?.participacion / 100).toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      {/* Encabezado */}
      <div className="flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-around">
        <h1 className="font-black text-[18px] md:text-[20px] lg:text-[28px] text-center ">
          {typeElection}
        </h1>

        {/* Tarjetas resumen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[900px] px-4  ">
          <div className="text-white flex items-center p-3 rounded-lg bg-[#242d4e]">
            <Image
              className="filter invert object-contain"
              alt="votar"
              src="/icons/votar.png"
              width={35}
              height={35}
            />
            <div className="ml-3">
              <h1 >Mesas computadas</h1>
              <p>{data?.mesasComputadas.toLocaleString("es-AR")}</p>
            </div>
          </div>

          <div className="text-white flex items-center p-3 rounded-lg bg-[#ef3d8e]">
            <Image
              className="filter invert object-contain"
              alt="electores"
              src="/icons/electores.png"
              width={35}
              height={35}
            />
            <div className="ml-3">
              <h1>Electores</h1>
              <p>{data?.electores.toLocaleString("es-AR")}</p>
            </div>
          </div>

          <div className="text-white flex items-center p-3 rounded-lg bg-[#9282bf]">
            <Image
              className="filter invert object-contain"
              src="/icons/mano.png"
              alt="mano"
              width={35}
              height={35}
            />
            <div className="ml-3">
              <h1>Participación sobre escrutado</h1>
              <p>{formateado}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info elección */}
      <div className="mt-8">
        <InfoEleccion election={election} />
      </div>

      {/* Cuerpo principal */}
      <div className="mt-10 flex flex-col lg:flex-row px-4 gap-6">
        <div className="w-full lg:w-1/2 bg-white rounded-[15px]">
          <DatosElectorales data={data} />
        </div>
        <div className="w-full lg:w-1/2 bg-white rounded-[15px]">
          <DatosMap election={election} />
        </div>
      </div>

      {/* Info candidatos */}
      <div className="mt-10 px-4">
        <InfoCandidatos election={election} />
      </div>
    </>
  );
}
