'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import DatosElectorales from "./datosElectorales";
import DatosMap from "./datosMap"
import {Balotage } from "@/app/data/Balotage"
import{ Generales} from "@/app/data/Generales"
import { useState } from "react";
import {ProvinciaResult} from '../types/Form'
import InfoEleccion from "./infoEleccion"
import InfoCandidatos from "./infoCandidatos"

interface mainProp  {
 provincia :string;
 election:string;
}

export default function Main({provincia , election}:mainProp ) {

  const [data , setData] = useState<ProvinciaResult>();
  const [typeElection , setTypeElection] = useState<string>();

 


  useEffect(()=> {
    const datosBallotage = Balotage?.find(datos => datos.provincia === provincia);
    const datosGenerales = Generales?.find(datos => datos.provincia === provincia);
  
     if(election === 'Generales'){
      setData(datosGenerales);
      setTypeElection('22 de Octubre 2023 | Generales')
     }else{
      setData(datosBallotage);
      setTypeElection('19 de Noviembre 2023 | Balotaje')
     }}, [provincia , election])

     const formateado = (data?.participacion / 100).toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    

  return (
    <>
    <div className="flex justify-around mt-[30px] items-center  ">
      <div>
        <h1 className="font-black ml-5 text-[28px]" >{`${typeElection}`}</h1>
      </div>

      <div className=" flex items-center ">

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px]  text-[14px] bg-[#242d4e]">
          <Image className="filter invert object-contain bg-" alt="votar" src={"/icons/votar.png"} width={35} height={35} ></Image>
          <div className="ml-3 ">
            <h1>Mesas computadas</h1>
            <p>{data?.mesasComputadas.toLocaleString("es-AR")}</p>
          </div>
        </div>

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px]  text-[14px] bg-[#ef3d8e]">
          <Image className="filter invert object-contain bg-" alt="electores" src={"/icons/electores.png"} width={35} height={35}/>
          <div className="ml-3">
            <h1>Electores</h1>
            <p>{data?.electores.toLocaleString("es-AR")}</p>
          </div>
        </div>

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px] h-[50px] text-[14px] bg-[#9282bf]">
        <Image className="filter invert object-contain " src="/icons/mano.png" alt="mano" width={35} height={35} />
        <div className="ml-3">
            <h1>Participación sobre escrutado</h1>
            <p>{formateado}%</p>
          </div>
        </div>
      </div>
      </div>

      <div>
        
      </div>
      {/**cuerpo de la pagina */}

      <div>
<InfoEleccion election={election} ></InfoEleccion>
      </div>

      <div className="mt-20 flex   ">                                                   
        <div className="w-1/2 ml-4 mr-2 mb-10 bg-white rounded-l-[15px] "><DatosElectorales data={data}></DatosElectorales></div>
        <div className="w-1/2 ml-2 mr-4 mb-10 bg-white rounded-[15px] "><DatosMap election={election} ></DatosMap></div>      
      </div>
      <div>
        <div>
          <InfoCandidatos election={election}></InfoCandidatos>
        </div>
          
      </div>
    </>
  );
}
