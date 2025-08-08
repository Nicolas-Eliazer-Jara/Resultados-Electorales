import React from "react";

export default function Main() {
  return (
    <>
      <div>
        <h1>Estado del Recuento</h1>
        <div className="flex justify-around">
          <div className="rounded-xs w-[300px] h-[80px] bg-gray-200 p-2">
            <h1 className="text-gray-600">Mesas</h1>
            <h1 className="font-black">52.602</h1>
          </div>
          <div className="rounded-xs w-[300px] h-[80px] bg-gray-200 p-2">
            <h1 className="text-gray-600">Electores</h1>
            <h1 className="font-black">54.702</h1>
          </div>
          <div className="rounded-xs w-[300px] h-[80px] bg-gray-200 p-2">
            <h1 className="text-gray-600">Participación</h1>
            <h1 className="font-black">32.602</h1>
            <div className="flex justify-between px-2">
              <h1 className="text-[12px]">votantes</h1>
              <h1 className="font-black">60%</h1>
            </div>
          </div>
        </div>
        <h4>Última actualización: 9/11/2023, 02:05:01</h4>
      </div>
    </>
  );
}
