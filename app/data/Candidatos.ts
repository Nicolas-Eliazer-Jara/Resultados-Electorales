import { resulCandidato } from "../types/Form";

export const Candidatos = {
  generales: {
    reglas:
      "Las elecciones generales de Argentina 2023 se realizaron el 22 de octubre, luego de las PASO, donde se definieron los candidatos que superaron el 1,5% de los votos. En esta instancia, los argentinos eligieron presidente, vicepresidente, legisladores nacionales y autoridades del Mercosur. Ningún candidato alcanzó el 45% de los votos ni el 40% con 10 puntos de ventaja, por lo que se convocó al balotaje entre Sergio Massa (Unión por la Patria) y Javier Milei (La Libertad Avanza).",
    candidatos: [
      {
        name: "Javier Milei",
        photo: "/candidatos/Milei.jpg",
        description:
          "Economista y diputado nacional por la Ciudad de Buenos Aires, conocido por su postura liberal radical en economía y su discurso antiestatista. Líder del partido La Libertad Avanza.",
      },
      {
        name: "Sergio Massa",
        photo: "/candidatos/Massa.jpg",
        description:
          "Exministro y exdiputado nacional, líder del Frente de Todos, con experiencia en la administración pública y enfoque en políticas económicas y sociales del gobierno.",
      },
      {
        name: "Juan Schiaretti",
        photo: "/candidatos/Schiaretti.jpg",
        description:
          "Gobernador de Córdoba, líder del partido Hacemos por Nuestro País, con perfil federal y experiencia en gestión provincial.",
      },
      {
        name: "Patricia Bullrich",
        photo: "/candidatos/Bullrich.jpg",
        description:
          "Exministra de Seguridad y presidenta del PRO, candidata de Juntos por el Cambio, enfocada en seguridad, orden público y políticas de centro-derecha.",
      },
      {
        name: "Myriam Bregman",
        photo: "/candidatos/Bregman.png",
        description:
          "Diputada nacional del Frente de Izquierda y de los Trabajadores – Unidad, abogada y activista, con enfoque en políticas de izquierda y derechos sociales.",
      },
    ],
  },

  balotage: {
    reglas:
      "El balotaje presidencial de Argentina 2023 se llevó a cabo el 19 de noviembre, al no haber un ganador en primera vuelta. Fue la segunda vez en la historia argentina que se recurrió a esta instancia para definir la presidencia. En esta elección se enfrentaron Javier Milei (La Libertad Avanza) y Sergio Massa (Unión por la Patria). Milei resultó vencedor con una diferencia de 11 puntos, convirtiéndose en el nuevo Presidente de la Nación.",
    candidatos: [
      {
        name: "Javier Milei | La Libertad Avanza",
        photo: "/candidatos/Milei.jpg",
        description:
          "Economista y diputado nacional por la Ciudad de Buenos Aires, conocido por su postura liberal radical en economía y su discurso antiestatista. Líder del partido La Libertad Avanza.",
      },
      {
        name: "Sergio Massa",
        photo: "/candidatos/Massa.jpg",
        description:
          "Exministro y exdiputado nacional, líder del Frente de Todos, con experiencia en la administración pública y enfoque en políticas económicas y sociales del gobierno.",
      },
    ],
  },
};
