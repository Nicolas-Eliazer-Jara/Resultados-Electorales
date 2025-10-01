import { partidoColor} from "@/app/data/Generales"
import {ProvinciaResult} from "../types/Form"

interface mainProp {
  data: ProvinciaResult | null;
}

export default function DatosElectorales({data}:mainProp) {
  console.log('la data de datosElectorales')
  console.log(data);

  return (
    <div className="max-h-[600px] h-[600px] overflow-y-auto list-none p-4">
       <h1 className="mb-10 font-semibold">Agrupaciones políticas</h1>
       {data?.resultados.map((res) => (
          <li key={res.nombre} className="space-y-1 mb-10 border-b-2 border-b-gray-100">
            <div className="flex justify-between mb-5">

            <div className="">{res.nombre}</div>
            <div>{res.porcentaje.toFixed(2)}%</div>
            </div>
            <div>{res.votos.toLocaleString("es-AR")} votos</div>

            {/* Barra de porcentaje */}
            <div className="w-full bg-gray-300 h-2 rounded-xs overflow-hidden mt-1 mb-5">
              <div
                className="h-full rounded"
                style={{
                  width: `${res.porcentaje}%`,
                  backgroundColor: partidoColor[res.nombre] || "#000",
                }}
              ></div>
            </div>
          </li>
        ))}
        
    </div>
  )
}
