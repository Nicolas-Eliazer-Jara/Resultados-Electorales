// data/Ballotage.ts
import { ProvinciaResult , ResulDistritos} from "../types/candidatos";
export const Balotage: ProvinciaResult[] = [
  
  {
    provincia: "Argentina",
    electores: 35410080,
    participacion: 7653,
    mesasComputadas: 104520,
     votacion: {
      positivos: 1806597,
      blancos: 54256,
      nulos: 37884,
      impugnados: 1081,
    },
    resultados: [
      { logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 55.69, votos: 14476462 },
      { logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 44.31, votos: 11516142 },
    ],
  },
  {
    provincia: "Ciudad Autónoma de Buenos Aires",
    electores: 2517707,
    participacion: 75.46,
    mesasComputadas: 7300,
     votacion: {
      positivos: 18597,
      blancos: 54256,
      nulos: 37884,
      impugnados: 1081,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 57.24, votos: 1034157 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 42.76, votos: 772440 },
    ],
  },
  {
    provincia: "Buenos Aires",
    electores: 13052907,
    participacion: 76.74,
    mesasComputadas: 37833,
     votacion: {
      positivos: 9695922,
      blancos: 178640,
      nulos: 136904,
      impugnados: 5921,
    },
    resultados: [
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 50.73, votos: 4919211 },
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 49.27, votos: 4776711 },
    ],
  },
  {
    provincia: "Catamarca",
    electores: 335973,
    participacion: 71.58,
    mesasComputadas: 1041,
     votacion: {
      positivos: 234309,
      blancos: 2816,
      nulos: 3182,
      impugnados: 170,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 52.75, votos: 123588 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 47.25, votos: 110721 },
    ],
  },
  {
    provincia: "Córdoba",
    electores: 3058283,
    participacion: 75.07,
    mesasComputadas: 9087,
     votacion: {
      positivos: 2210842,
      blancos: 35939,
      nulos: 48183,
      impugnados: 839,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 74.05, votos: 1637147 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 25.95, votos: 573136 },
    ],
  },
  {
    provincia: "Corrientes",
    electores: 928694,
    participacion: 75.89,
    mesasComputadas: 2754,
     votacion: {
      positivos: 688348,
      blancos: 5387,
      nulos: 10814,
      impugnados: 265,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 53.20, votos: 366191 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 46.80, votos: 322157 },
    ],
  },
  {
    provincia: "Chaco",
    electores: 981134,
    participacion: 73.24,
    mesasComputadas: 2890,
     votacion: {
      positivos: 705060,
      blancos: 6055,
      nulos: 7082,
      impugnados: 342,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 50.07, votos: 353024 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 49.93, votos: 352036 },
    ],
  },
  {
    provincia: "Chubut",
    electores: 468120,
    participacion: 73.98,
    mesasComputadas: 1393,
     votacion: {
      positivos: 330810,
      blancos: 4947,
      nulos: 10347,
      impugnados: 228,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 59.11, votos: 195543 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 40.89, votos: 135267 },
    ],
  },
  {
    provincia: "Entre Ríos",
    electores: 1136433,
    participacion: 77.7,
    mesasComputadas: 3404,
     votacion: {
      positivos: 853966,
      blancos: 11602,
      nulos: 17117,
      impugnados: 293,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 61.48, votos: 525046 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 38.52, votos: 328920 },
    ],
  },
  {
    provincia: "Formosa",
    electores: 473700,
    participacion: 75.17,
    mesasComputadas: 1448,
     votacion: {
      positivos: 349729,
      blancos: 3132,
      nulos: 3161,
      impugnados: 73,
    },
    resultados: [
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 56.50, votos: 197598 },
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 43.50, votos: 152131 },
    ],
  },
  {
    provincia: "Jujuy",
    electores: 575034,
    participacion: 77.59,
    mesasComputadas: 1760,
     votacion: {
      positivos: 434011,
      blancos: 4014,
      nulos: 7906,
      impugnados: 240,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 58.33, votos: 253180 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 41.67, votos: 180831 },
    ],
  },{
    provincia: "La Pampa",
    electores: 298465,
    participacion: 76.36,
    mesasComputadas: 897,
     votacion: {
      positivos: 220225,
      blancos: 3330,
      nulos: 4282,
      impugnados: 73,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 57.35, votos: 126302 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 42.65, votos: 93923 },
    ],
  },
  {
    provincia: "La Rioja",
    electores: 301855,
    participacion: 78.88,
    mesasComputadas: 947,
     votacion: {
      positivos: 233127,
      blancos: 2096,
      nulos: 2781,
      impugnados: 85,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 53.72, votos: 125247 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 46.28, votos: 107880 },
    ],
  },
  {
    provincia: "Mendoza",
    electores: 1488716,
    participacion: 76.48,
    mesasComputadas: 4339,
     votacion: {
      positivos: 1096814,
      blancos: 17067,
      nulos: 24171,
      impugnados: 552,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 71.15, votos: 780364 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 28.85, votos: 316450 },
    ],
  },
  {
    provincia: "Misiones",
    electores: 981461,
    participacion: 73.88,
    mesasComputadas: 2855,
     votacion: {
      positivos: 709773,
      blancos: 9202,
      nulos: 5879,
      impugnados: 209,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 56.80, votos: 403126 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 43.20, votos: 306647 },
    ],
  },
  {
    provincia: "Neuquén",
    electores: 551834,
    participacion: 79.46,
    mesasComputadas: 1662,
     votacion: {
      positivos: 419494,
      blancos: 5702,
      nulos: 13063,
      impugnados: 224,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 60.42, votos: 253472 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 39.58, votos: 166022 },
    ],
  },
  {
    provincia: "Río Negro",
    electores: 593595,
    participacion: 76.19,
    mesasComputadas: 1783,
     votacion: {
      positivos: 434476,
      blancos: 5881,
      nulos: 11704,
      impugnados: 177,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 54.24, votos: 235662 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 45.76, votos: 198814 },
    ],
  },
  {
    provincia: "Salta",
    electores: 1073480,
    participacion: 75.24,
    mesasComputadas: 3209,
     votacion: {
      positivos: 789019,
      blancos: 7933,
      nulos: 9806,
      impugnados: 975,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 57.86, votos: 456509 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 42.14, votos: 332510 },
    ],
  },
  {
    provincia: "San Juan",
    electores: 601618,
    participacion: 77.42,
    mesasComputadas: 1793,
     votacion: {
      positivos: 452247,
      blancos: 5288,
      nulos: 7545,
      impugnados: 666,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 60.68, votos: 274429 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 39.32, votos: 177818 },
    ],
  },
  {
    provincia: "San Luis",
    electores: 418978,
    participacion: 77.55,
    mesasComputadas: 1303,
     votacion: {
      positivos: 314416,
      blancos: 4077,
      nulos: 6202,
      impugnados: 243,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 67.99, votos: 213778 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 32.01, votos: 100638 },
    ],
  },
  {
    provincia: "Santa Cruz",
    electores: 264735,
    participacion: 70.18,
    mesasComputadas: 906,
     votacion: {
      positivos: 179423,
      blancos: 1908,
      nulos: 4410,
      impugnados: 52,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 58.06, votos: 104179 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 41.94, votos: 75244 },
    ],
  },
  {
    provincia: "Santa Fe",
    electores: 2820055,
    participacion: 74.99,
    mesasComputadas: 8309,
     votacion: {
      positivos: 2034631,
      blancos: 34080,
      nulos: 45527,
      impugnados: 551,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 62.82, votos: 1278243 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 37.18, votos: 756388 },
    ],
  },
  {
    provincia: "Santiago del Estero",
    electores: 812181,
    participacion: 78.57,
    mesasComputadas: 2457,
     votacion: {
      positivos: 628840,
      blancos: 4418,
      nulos: 4735,
      impugnados: 175,
    },
    resultados: [
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 68.42, votos: 430248 },
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 31.58, votos: 198592 },
    ],
  },
  {
    provincia: "Tucumán",
    electores: 1313958,
    participacion: 82.94,
    mesasComputadas: 3901,
     votacion: {
      positivos: 1067647,
      blancos: 8646,
      nulos: 12585,
      impugnados: 914,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 51.98, votos: 555009 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 48.02, votos: 512638 },
    ],
  },
  {
    provincia: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    electores: 145069,
    participacion: 74.09,
    mesasComputadas: 501,
     votacion: {
      positivos: 102878,
      blancos: 1099,
      nulos: 3411,
      impugnados: 98,
    },
    resultados: [
      {  logo: "/icons/partidos/libertad_avanza-removebg-preview.png", nombre: "La Libertad Avanza", porcentaje: 53.30, votos: 54832 },
      {  logo: "/icons/partidos/Unión_por_la_Patria-removebg-preview.png", nombre: "Unión por la Patria", porcentaje: 46.70, votos: 48046 },
    ],
  },
];

export const partidoColor: Record<string, string> = {
  "La Libertad Avanza": "#753abd",
  "Unión por la Patria": "#009bde",
};

export const partidoColorClaro :Record<string, string> = {
  "La Libertad Avanza": "#ba9ddf",
  "Unión por la Patria": "#80cdf0",
};

export const DistritosBalotage : ResulDistritos = {
  resulDistritos:[
    {color:"#80cdf0" , distrito: "Provincias ganadas por Unión por la Patria (4)"},
    {color:"#ba9ddf" , distrito:"Provincias ganadas por La Libertad Avanza (20)"},
  ]
}