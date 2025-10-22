import Image from "next/image";
import { useState, useEffect } from "react";
import balotag from "@/public/map/primaria.png";
import General from "@/public/map/generales.png";
import { DistritosGenerales } from "../data/Generales";
import { DistritosBalotage } from "../data/Balotage";
import { ResulDistritos } from "../types/Form";

interface Election {
  election: string;
}

export default function DatosMap({ election }: Election) {
  const [map, setMap] = useState(General);
  const [data, setData] = useState<ResulDistritos>(DistritosGenerales);

  useEffect(() => {
    if (election === "Generales") {
      setMap(General);
      setData(DistritosGenerales);
    } else {
      setMap(balotag);
      setData(DistritosBalotage);
    }
  }, [election]);

  return (
    <div className="h-[800px]  p-4 " >
      <h1 className="mb-10 font-semibold">Resultados por distritos</h1>
      <div className="flex flex-col md:flex-row">

      <div className="md:w-2/3 w-auto">
        <Image alt="imagen" height={900} width={400} src={map} />
      </div>
      <div className="md:w-1/3 w-auto">
        <div>
          {data.resulDistritos.map((distrito, i) => (
            <div key={i} className="flex items-center mb-2">
              <div
                className="w-8 h-4 mr-2 rounded-xs"
                style={{ backgroundColor: distrito.color }}
              ></div>
              <span>{distrito.distrito}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
