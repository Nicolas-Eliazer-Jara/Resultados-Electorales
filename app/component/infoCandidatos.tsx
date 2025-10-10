import { useCandidatos } from "../hook/useCandidatos"

interface Prop {
    election:string;
}
export default function InfoCandidatos({election}:Prop) {

    const data = useCandidatos(election);

    return(
<>
<div>
    {data.candidatos.map((data)=> 
    <div className="flex p-5 border-b-2 border-b-gray-200 ml-5 mr-5" key={data.name}>
        <img className="w-[130px]  object-cover mr-5 " alt={data.name} src={data.photo}></img>
        <div className="mt-1">
        <p className="mb-2 font-bold">{data.name}</p>
        <p>{data.description}</p>
        <img className="w-[50px]  object-cover mt-2 " alt={data.name} src={data.logo}></img>
        </div>
    </div>)}
</div>

</>
    )
}