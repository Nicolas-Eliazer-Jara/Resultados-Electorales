import { useState, useEffect } from "react";
import { Candidatos } from "../data/Candidatos";

export function useCandidatos(election: string) {
  const [data, setData] = useState(Candidatos.generales); // 👈 inicializa con generales

  useEffect(() => {
    if (election === "Generales") {
      setData(Candidatos.generales);
    } else {
      setData(Candidatos.balotage);
    }
  }, [election]);

  return data;
}
