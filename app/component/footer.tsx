export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full text-[13px]  bg-gray-950 text-white p-10 text-center">
      <div className=" w-[90%] mx-auto border-b-[1px] border-[#ffffff54]">
        <p className=" mb-5">
          Este sitio fue desarrollado por Nicolás Jara con fines educativos e
          informativos. Las estadísticas y resultados provienen de la fuente
          oficial del Gobierno Argentino:{" "}
          <a
            href="https://resultados.mininterior.gob.ar/resultados/2023/1/1/0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Ministerio del Interior de la República Argentina
          </a>
          .
        </p>
      </div>
      <div className="flex justify-center mt-1 "></div>

      <div className="flex  p-2 justify-center">
        <p className=" p-2">
          © 2025 Nicolas Eliazer Jara. Todos los derechos reservados
        </p>
        <p className=" p-2">{year}</p>
      </div>
    </div>
  );
}
