import { useState, useEffect } from "react";
import { Candidatos } from "../data/Candidatos";

export function useCandidatos(election: string) {
  const [data, setData] = useState(Candidatos.generales);

  useEffect(() => {
    const tipo = election?.toLowerCase();

    if (tipo === "generales") {
      setData(Candidatos.generales);
    } else if (tipo === "balotage") {  // ✅ una sola “l”, igual que en tu data
      setData(Candidatos.balotage);
    }
  }, [election]);

  return data;
}
