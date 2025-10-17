import { useCandidatos } from "../hook/useCandidatos";

interface mainProp {
  election: string;
}

export default function InfoCandidatos({ election }: mainProp) {
  const data = useCandidatos(election);

  return (
    <div >
      <h1 className="text-center mb-8 text-2xl font-semibold border-b border-[#242c4f] pb-2">
        Candidatos Presidenciales
      </h1>

      {/* Lista de candidatos */}
      <div className="space-y-5 grid grid-cols-3 ">
        {data.candidatos.map((candidato) => (
          <div
            key={candidato.name}
            className="p-5"
          >
          
            <div className="bg-[#242c4f] text-white mx-auto justify-items-center pt-5">
            <img
              src={candidato.photo}
              alt={candidato.name}
              className="w-[300px] h-[200px] object-contain  "
            />
            <p className="text-lg font-bold p-5">{candidato.name}</p>
            </div>

            <div className="bg-white p-5 text-black  h-[170px]  ">
              <p className="text-[15px] ">{candidato.description}</p>

              {candidato.logo && (
                <img
                  src={candidato.logo}
                  alt={`${candidato.name} logo`}
                  className="w-[45px] mx-auto mt-3"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar ganadores solo en balotaje */}
      {election === "Balotage" && data.ganador && (
        <>
          <h2 className="text-center mt-10 mb-6 text-xl font-semibold text-[#e7bb60]">
            Ganadores del Balotaje 2023
          </h2>

          <div className="flex flex-col md:flex-row justify-center bg-[#2e3b6b] p-4  text-center w-full md:w-[70%] mx-auto">
            
            {data.ganador.map((ganador) => (
              <div
                key={ganador.name}
                className="m-5"
              >
                <img
                  src={ganador.photo}
                  alt={ganador.name}
                  className="w-[160px] h-[200px] object-cover mx-auto rounded-lg mb-3 border border-[#e7bb60]/50"
                />
                <p className="text-[18px] font-bold">{ganador.name}</p>
                <p className="text-[17px] text-gray-200">{ganador.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
