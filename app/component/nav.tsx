import Image from "next/image";
import Logo from '@/public/ciudad-ba-logo.svg'

export default function Nav(){
  return (
    <div className="bg-[#222c4f] w-full h-[100px] border-b-4 border-b-[#e7bb60]  ">
        <Image className="w-[200px] h-[200px] pb-25 pl-5"  src={Logo} alt="logo" height={900} width={900}></Image>

    </div>
  )
}
