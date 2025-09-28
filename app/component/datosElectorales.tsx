import {presidenciales2023, partidoColor} from "@/app/data/presidenciales2023"

interface mainProp {
  provincia:string;
}

export default function DatosElectorales({provincia}:mainProp) {

  const datosProvincia = presidenciales2023.find( datos => datos.provincia === provincia)

  return (
    <div className="max-h-[600px] h-[600px] overflow-y-auto  p-4">
       <h1>Agrupaciones políticas</h1>
       {datosProvincia?.resultados.map((res) => (
          <li key={res.nombre} className="space-y-1">
            <div className="font-semibold">{res.nombre}</div>
            <div>{res.porcentaje.toFixed(2)}%</div>
            <div>{res.votos.toLocaleString("es-AR")} votos</div>

            {/* Barra de porcentaje */}
            <div className="w-full bg-gray-300 h-2 rounded-xs overflow-hidden mt-1">
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
