export interface Candidato {
  name: string;
  photo: string;
  logo: string;
  description: string;
}

export interface ResulCandidato {
  reglas: string;
  candidatos: Candidato[];
  datos?: string;
  ganador?: Candidato[];
  video?: string;
}

export interface ResultadoPartido {
  logo: string;
  nombre: string;
  porcentaje: number;
  votos: number;
}

export interface Votacion {
  positivos: number;
  blancos: number;
  nulos: number;
  impugnados: number;
}


export interface ProvinciaResult {
  provincia: string;
  electores: number;
  participacion: number;
  mesasComputadas: number;
  votacion: Votacion;
  resultados: ResultadoPartido[];
}

export interface ResulDistritos {
  resulDistritos: { color: string; distrito: string }[];
}
