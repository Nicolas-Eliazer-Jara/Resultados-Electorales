import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <>
    <div className="flex justify-around mt-[30px]">
      <div>
        <h1 className="font-black text-[30px]" >Elecciones 2023 | PASO</h1>
      </div>

      <div className=" flex ">

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px] bg-[#242d4e]">
          <Image className="filter invert object-contain bg-" alt="votar" src={"/icons/votar.png"} width={50} height={50} ></Image>
          <div className="ml-3">
            <h1>Mesas computadas</h1>
            <p>104.532</p>
          </div>
        </div>

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px] bg-[#ef3d8e]">
          <Image className="filter invert object-contain bg-" alt="electores" src={"/icons/electores.png"} width={50} height={50}/>
          <div className="ml-3">
            <h1>Electores</h1>
            <p>35.405.013</p>
          </div>
        </div>

        <div className=" text-white rounded-xs ml-5  flex p-2 w-[250px] bg-[#9282bf]">
        <Image className="filter invert object-contain " src="/icons/mano.png" alt="mano" width={50} height={50} />
        <div className="ml-3">
            <h1>Participación sobre escrutado</h1>
            <p>67,83%</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
