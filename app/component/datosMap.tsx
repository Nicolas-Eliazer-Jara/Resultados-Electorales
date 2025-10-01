import Image from "next/image"
import { useState, useEffect } from "react";
import Primaria from "@/public/map/primaria.png";
import Generales from "@/public/map/generales.png";

interface Election {
  election: string;
}

export default function DatosMap({ election }: Election) {
  const [map, setMap] = useState(Primaria); 

useEffect( () => {

  if(election === 'Generales'){
    setMap(Generales)
    }else{
      setMap(Primaria)
    }
    
} , [election])
  

  return (
    <div className="w-full h-full mx-auto">
      <Image alt="imagen" height={900} width={400} src={map} />
    </div>
  );
}
