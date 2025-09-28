import React from "react";
import Image from "next/image";
import DatosElectorales from "./datosElectorales";
import DatosMap from "./datosMap"
import DatosVotos from "./datosVotos"
import {presidenciales2023} from "@/app/data/presidenciales2023"

interface mainProp  {
 provincia :string;
}

export default function Main({provincia}:mainProp ) {
  const datosProvincia = presidenciales2023.find(datos => datos.provincia === provincia)
  
  return (
    <>
    <div className="flex justify-around mt-[30px] items-center">
      <div>
        <h1 className="font-black text-[30px]" >Elecciones 2023 | PASO</h1>
      </div>

      <div className=" flex items-center ">

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px]  text-[14px] bg-[#242d4e]">
          <Image className="filter invert object-contain bg-" alt="votar" src={"/icons/votar.png"} width={35} height={35} ></Image>
          <div className="ml-3 ">
            <h1>Mesas computadas</h1>
            <p>{datosProvincia?.mesasComputadas}</p>
          </div>
        </div>

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px]  text-[14px] bg-[#ef3d8e]">
          <Image className="filter invert object-contain bg-" alt="electores" src={"/icons/electores.png"} width={35} height={35}/>
          <div className="ml-3">
            <h1>Electores</h1>
            <p>{datosProvincia?.electores}</p>
          </div>
        </div>

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px] h-[50px] text-[14px] bg-[#9282bf]">
        <Image className="filter invert object-contain " src="/icons/mano.png" alt="mano" width={35} height={35} />
        <div className="ml-3">
            <h1>Participación sobre escrutado</h1>
            <p>{datosProvincia?.participacion}%</p>
          </div>
        </div>
      </div>
      </div>
      {/**cuerpo de la pagina */}
      <div className="mt-20 flex">
        <div className="w-1/3 p-2 "><DatosElectorales provincia={provincia}></DatosElectorales></div>
        <div className="w-1/3 p-2 "><DatosMap ></DatosMap></div>
        <div className="w-1/3 p-2 "><DatosVotos provincia={provincia}></DatosVotos></div>
      
      
      
      </div>
    </>
  );
}
