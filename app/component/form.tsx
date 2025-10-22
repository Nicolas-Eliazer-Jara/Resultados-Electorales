"use client";

interface FormProps {
  setProvincia: (prov: string) => void;
  setElection: (prov: string) => void;
}

export default function Form({ setProvincia, setElection }: FormProps) {
  return (
    <div className="px-4">
      <form>
        {/* En móviles se apilan, en pantallas grandes se alinean */}
        <div className="flex flex-col lg:flex-row lg:justify-around gap-6">
          
          {/* Año */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full lg:w-[30%]">
            <h1 className="p-2 md:pr-5 whitespace-nowrap">Año:</h1>
            <select className="bg-gray-200 outline-none rounded p-2 w-full  focus:border-blue-500 focus:ring-2 focus:ring-blue-300 ">
              <option  value="2023">2023</option>
            </select>
          </div>

          {/* Resultados */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full lg:w-[30%]">
            <h1 className="p-2 md:pr-5 whitespace-nowrap">Resultados:</h1>
            <select
              onChange={(e) => setProvincia(e.target.value)}
              className="bg-gray-200 rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            >
              <option  value="Argentina">Argentina</option>
              <option  value="Buenos Aires">Buenos Aires</option>
              <option  value="Ciudad Autónoma de Buenos Aires">
                Ciudad Autónoma de Buenos Aires
              </option>
              <option  value="Catamarca">Catamarca</option>
              <option  value="Chaco">Chaco</option>
              <option  value="Chubut">Chubut</option>
              <option  value="Córdoba">Córdoba</option>
              <option  value="Corrientes">Corrientes</option>
              <option  value="Entre Ríos">Entre Ríos</option>
              <option  value="Formosa">Formosa</option>
              <option  value="Jujuy">Jujuy</option>
              <option  value="La Pampa">La Pampa</option>
              <option  value="La Rioja">La Rioja</option>
              <option  value="Mendoza">Mendoza</option>
              <option  value="Misiones">Misiones</option>
              <option  value="Neuquén">Neuquén</option>
              <option  value="Río Negro">Río Negro</option>
              <option  value="Salta">Salta</option>
              <option  value="San Juan">San Juan</option>
              <option  value="San Luis">San Luis</option>
              <option  value="Santa Cruz">Santa Cruz</option>
              <option  value="Santa Fe">Santa Fe</option>
              <option  value="Santiago del Estero">Santiago del Estero</option>
              <option  value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">
                Tierra del Fuego, Antártida e Islas del Atlántico Sur
              </option>
              <option  value="Tucumán">Tucumán</option>
            </select>
          </div>

          {/* Tipo de elección */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full lg:w-[30%]">
            <h1 className="p-2 md:pr-5 whitespace-nowrap">Tipo Elección:</h1>
            <select
              onChange={(e) => setElection(e.target.value)}
              className="bg-gray-200 rounded p-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            >
              <option  value="Generales">Generales</option>
              <option  value="Balotage">Balotage</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
