"use client";

interface FormProps {
  setProvincia: (prov: string) => void;
}

export default function Form({setProvincia}:FormProps) {



  return (
    <div >

      <form >
       <div className="flex  justify-around">
       <div className="flex">
          <h1 className="p-2 pr-5">Año:</h1>
          <select  className="bg-gray-200 rounded-xs p-2 border-none w-[200px]"
          >
            <option value="2023">2023</option>
          </select>
        </div>

        <div className="flex">
          <h1 className="p-2 pr-5" >Resultados:</h1>
          <select onChange={(e)=> setProvincia(e.target.value)} className="bg-gray-200 rounded-xs p-2 border-none w-[200px]">
          <option value="Argentina">Argentina</option>
<option value="Buenos Aires">Buenos Aires</option>
<option value="Ciudad Autónoma de Buenos Aires">Ciudad Autónoma de Buenos Aires</option>
<option value="Catamarca">Catamarca</option>
<option value="Chaco">Chaco</option>
<option value="Chubut">Chubut</option>
<option value="Córdoba">Córdoba</option>
<option value="Corrientes">Corrientes</option>
<option value="Entre Ríos">Entre Ríos</option>
<option value="Formosa">Formosa</option>
<option value="Jujuy">Jujuy</option>
<option value="La Pampa">La Pampa</option>
<option value="La Rioja">La Rioja</option>
<option value="Mendoza">Mendoza</option>
<option value="Misiones">Misiones</option>
<option value="Neuquén">Neuquén</option>
<option value="Río Negro">Río Negro</option>
<option value="Salta">Salta</option>
<option value="San Juan">San Juan</option>
<option value="San Luis">San Luis</option>
<option value="Santa Cruz">Santa Cruz</option>
<option value="Santa Fe">Santa Fe</option>
<option value="Santiago del Estero">Santiago del Estero</option>
<option value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
<option value="Tucumán">Tucumán</option>
          </select>
        </div>

        <div className="flex">
          <h1 className="p-2 pr-5">Tipo Elección:</h1>
          <select  className="bg-gray-200 rounded-xs p-2 border-none w-[200px]">
            <option value='PASO'>PASO</option>
          </select>
        </div>
       </div>
      </form>
    </div>
  );
}
