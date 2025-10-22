import Image from "next/image";
import { useCandidatos } from "../hook/useCandidatos";

interface MainProp {
  election: string;
}

export default function InfoEleccion({ election }: MainProp) {
  const data = useCandidatos(election);

  return (
    <div className="mt-10">
      <div className="flex gap-4 p-4 h-auto mx-10 bg-[#242d4e] text-white rounded-xs border">
        <Image
          className="mt-1 mr-5 invert w-[20px] h-[20px]"
          src="/icons/informacion.png"
          alt="info"
          width={90}
          height={90}
        />
        <p>{data.reglas}</p>
      </div>
    </div>
  );
}
