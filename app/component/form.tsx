"use client";



export default function Form() {

  return (
    <div>

      <form >
       <div className="flex  justify-around">
       <div className="flex">
          <h1 className="p-2 pr-5">Año Elección:</h1>
          <select className="bg-gray-200 rounded-xs p-2 border-none w-[200px]"
          >
            <option value="2011">2011</option>
            <option value="2013">2013</option>
            <option value="2015">2015</option>
            <option value="2017">2017</option>
            <option value="2019">2019</option>
            <option value="2021">2021</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className="flex">
          <h1 className="p-2 pr-5" >Tipo Recuento:</h1>
          <select className="bg-gray-200 rounded-xs p-2 border-none w-[200px]">
            <option value=''>Recuento Provincial</option>
          </select>
        </div>

        <div className="flex">
          <h1 className="p-2 pr-5">Tipo Elección:</h1>
          <select className="bg-gray-200 rounded-xs p-2 border-none w-[200px]">
            <option value='PASO'>PASO</option>
            <option value='Elecciones Generales'>Elecciones Generales</option>
            <option value='Segunda Vuelta'>Segunda Vuelta</option>
          </select>
        </div>
       </div>
      </form>
    </div>
  );
}
