import Image from "next/image"
import { useState, useEffect } from "react";
import balotag from "@/public/map/primaria.png";
import General from "@/public/map/generales.png";
import {DistritosGenerales} from "../data/Generales"
import {DistritosBalotage} from "../data/Balotage"
import {ResulDistritos} from "../types/Form"

interface Election {
  election: string;
}

export default function DatosMap({ election }: Election) {
  const [map, setMap] = useState(General); 
  const [data, setData] = useState<ResulDistritos>(DistritosGenerales); 



useEffect( () => {

  if(election === 'Generales'){
    setMap(General)
    setData(DistritosGenerales)
    }else{
      setMap(balotag)
      setData(DistritosBalotage)
    }
    
} , [election])
  

  return (
    <div className="flex">
      <div className="w-1/3">
        <h1>Resultados por distritos</h1>
        <div>
        {data.resulDistritos.map((distrito, i) => (
  <div key={i} className="flex items-center mb-2">
    <div
      className="w-4 h-4 mr-2 rounded"
      style={{ backgroundColor: distrito.color }}
    ></div>
    <span>{distrito.distrito}</span>
  </div>
))}

        </div>
      </div>
      <div className="w-2/3">
      <Image alt="imagen" height={900} width={400} src={map} />
      </div>
      
    </div>
  );
}
