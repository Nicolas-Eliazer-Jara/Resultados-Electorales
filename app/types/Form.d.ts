import { string } from "zod";

export const FormData = {
    opcion: string
  };
  export interface PartidoResult {
    nombre: string;
    porcentaje: number;
    votos: number;
    logo?: string;

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
    participacion: number; // en porcentaje
    mesasComputadas: number;
    resultados: PartidoResult[]; // todos los partidos con sus votos
    votacion: Votacion;

  }

  export interface Distritos {
    distrito:string;
    color:string;
  }
  export interface ResulDistritos {
    resulDistritos:Distritos[];
  }

  export interface Candidato {
    name: string;
    photo: string;
    description: string;
    logo:string;
    datos:string;
    video:string;
  }
  export interface Ganador {
    name: string;
    photo: string;
    description: string;

  }
  
  export interface resulCandidato {
    reglas: string;
    candidatos: Candidato[];
    ganador:Ganador[];
  }
  