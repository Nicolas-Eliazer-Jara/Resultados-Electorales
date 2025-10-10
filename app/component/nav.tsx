import Image from "next/image";
import Logo from '@/public/icons/escudo.png'

export default function Nav(){
  return (
    <div className="bg-[#222c4f] w-full h-[100px] border-b-4 border-b-[#e7bb60]  ">
        <div className="flex items-center pt-5 justify-between">
        <Image className=" invert  w-[80px]  pl-5"  src={Logo} alt="logo" height={900} width={900}></Image>
        <h1 className="text-white ">Elecciones Argentina 2023</h1>
        <h1 className="w-[80px] pr-5"> </h1>
        </div>

    </div>
  )
}
