import { useCandidatos } from "../hook/useCandidatos";

interface mainProp {
  election: string;
}

export default function InfoCandidatos({ election }: mainProp) {
  const data = useCandidatos(election);

  return (
    <div className="px-4 mb-10">
      {/* Título principal */}
      <h1 className="text-center mb-8 text-2xl font-semibold border-b border-[#242c4f] pb-2">
        Candidatos Presidenciales
      </h1>

      {/* Lista de candidatos (funciona bien con 3 o 5) */}
      <div
        className="grid gap-7 justify-items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
      >
        {data.candidatos.map((candidato) => (
          <div
            key={candidato.name}
            className="w-full max-w-[320px] bg-white shadow-lg rounded-[7px] overflow-hidden"
          >
            <div className="bg-[#242c4f] text-white text-center pt-5">
              <img
                src={candidato.photo}
                alt={candidato.name}
                className="w-[300px] h-[200px] object-contain mx-auto"
              />
              <p className="text-lg font-bold p-4">{candidato.name}</p>
            </div>

            <div className="p-5 text-black min-h-[160px] text-center">
              <p className="text-[15px] mb-3">{candidato.description}</p>
              {candidato.logo && (
                <img
                  src={candidato.logo}
                  alt={`${candidato.name} logo`}
                  className="w-[45px] mx-auto mt-2"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar ganadores solo en balotaje */}
      {election.toLowerCase() === "balotage" && data.ganador && (
        <>
          <h2 className="text-center mt-14 mb-8 text-2xl font-semibold border-b border-[#242c4f] pb-2">
            Ganadores del Balotaje 2023
          </h2>

          <div
            className="grid gap-8 justify-items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {data.ganador.map((ganador) => (
              <div
                key={ganador.name}
                className="w-full max-w-[350px] max-h-[390px]  bg-white shadow-lg rounded-xl overflow-hidden"
              >
                <div className="bg-[#242c4f] text-white text-center pt-5">
                  <img
                    src={ganador.photo}
                    alt={ganador.name}
                    className="w-[300px] h-[200px] object-contain mx-auto"
                  />
                  <p className="text-lg font-bold p-5">{ganador.name}</p>
                </div>

                <div className="bg-white text-black p-5 text-center min-h-[150px]">
                  <p className="text-[15px]">{ganador.description}</p>
                  <img src={ganador.logo}  alt={`${ganador.name} logo`}
                  className="w-[45px] mx-auto mt-2"></img>
                </div>
              </div>

            ))}
          </div>
          {data.video && (
            <div>
              <h2 className="text-center mt-14 mb-8 text-2xl font-semibold border-b border-[#242c4f] pb-2">
            Ganadores del Balotaje 2023
          </h2>
          <p className=" text-white bg-[#242c4f] p-10">La asunción de Javier Milei como presidente de la Nación Argentina se realizó el 10 de diciembre de 2023 en el Congreso de la Nación, tras haber ganado el balotaje del 19 de noviembre frente a Sergio Massa. Durante la ceremonia, Milei juró junto a su vicepresidenta Victoria Villarruel, marcando el inicio de un gobierno con enfoque liberal y de reducción del gasto público. Luego dio un discurso desde las escalinatas del Congreso ante una multitud, destacando la necesidad de un cambio profundo en la economía y en la estructura del Estado argentino.</p>
            
  <div className="mt-10 flex justify-center">
    <iframe
      width="760"
      height="415"
      src={data.video.replace("watch?v=", "embed/")}
      title="Asunción presidencial"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-[7px] shadow-lg"
    ></iframe>
  </div>
  </div>
)}

        </>
      )}
    </div>
  );
}
