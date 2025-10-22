import { useState, useEffect } from "react";
import { Candidatos } from "../data/Candidatos";
import { ResulCandidato } from "../types/candidatos";

export function useCandidatos(election: string): ResulCandidato {
  const [data, setData] = useState<ResulCandidato>(Candidatos.generales);

  useEffect(() => {
    const tipo = election?.toLowerCase();
    setData(tipo === "balotage" ? Candidatos.balotage : Candidatos.generales);
  }, [election]);

  return data;
}
