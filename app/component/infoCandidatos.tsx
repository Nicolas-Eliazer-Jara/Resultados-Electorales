import { useCandidatos } from "../hook/useCandidatos";

interface mainProp {
  election: string;
}

export default function InfoCandidatos({ election }: mainProp) {
  const data = useCandidatos(election);

  return (
    <div className="bg-[#222c4f] p-6 m-4 rounded-2xl text-white shadow-lg">
      <h1 className="text-center mb-8 text-2xl font-semibold border-b border-[#e7bb60] pb-2">
        Candidatos Presidenciales
      </h1>

      {/* Lista de candidatos */}
      <div className="space-y-5">
        {data.candidatos.map((candidato) => (
          <div
            key={candidato.name}
            className="flex items-center bg-[#2e3b6b] rounded-xl p-4 hover:bg-[#334275] transition"
          >
            <img
              src={candidato.photo}
              alt={candidato.name}
              className="w-[140px] h-[190px] object-cover rounded-lg mr-5 border border-[#e7bb60]"
            />
            <div className="flex-1">
              <p className="text-lg font-bold mb-1">{candidato.name}</p>
              <p className="text-sm leading-snug text-gray-200">{candidato.description}</p>

              {candidato.logo && (
                <img
                  src={candidato.logo}
                  alt={`${candidato.name} logo`}
                  className="w-[45px] mt-3"
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

          <div className="flex flex-col md:flex-row justify-center bg-[#2e3b6b] p-4  text-center w-full md:w-[45%] ">
            
            {data.ganador.map((ganador) => (
              <div
                key={ganador.name}
                
              >
                <img
                  src={ganador.photo}
                  alt={ganador.name}
                  className="w-[160px] h-[200px] object-cover mx-auto rounded-lg mb-3 border border-[#e7bb60]/50"
                />
                <p className="text-lg font-bold">{ganador.name}</p>
                <p className="text-sm text-gray-200">{ganador.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
