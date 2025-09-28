
import Image from "next/image"
import map from "@/public/map/primaria.png"
export default function DatosMap() {
  return (
    <div>
<Image alt="imagen" height={900} width={400} src={map}></Image>
    </div>
  )
}
