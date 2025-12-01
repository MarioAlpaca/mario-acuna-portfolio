export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  image?: string; // Opcional
  link?: string
}

export const projects: Project[] = [
  {
    number: "01",
    category: "Frontend",
    title: "Wiki EBDF",
    description: "Wiki no oficial de las 'Épicas Batallas de Rap del Frikismo'. Diseño moderno inspirado en pagina de La Velada del Año V, con animaciones fluidas, galería de personajes interactiva.",
    stack: ["Astro", "Tailwind CSS", "TypeScript", "View Transitions"],
    image: "../proy/wiki_ebdf.jpg",
    link: "https://github.com/MarioAlpaca/wiki-ebdf.git",
  },

];