import { useCandidatos } from "../hook/useCandidatos"


interface mainProp {
  election: string;
}
export default function InfoEleccion({election}:mainProp){

  const data = useCandidatos(election);

  return (
    <div className="mt-10">
      
      <div className=" flex p-4 h-[100px] mx-10 bg-[#242d4e] text-white  rounded-xs border">
        <img className=" mt-1 mr-5 w-[20px] h-[20px] invert" alt="info" src={"/icons/informacion.png"}></img>
        <p>{data.reglas}</p>
      </div>

        
    </div>
  )
}
