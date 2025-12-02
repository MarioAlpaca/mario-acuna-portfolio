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
  {
    number: "02",
    category: "Backend",
    title: "Core Service API",
    description: "Arquitectura de servidor de alto rendimiento. Diseño de API RESTful escalable con implementación de caché y autenticación segura para reducir la latencia y asegurar la integridad de datos.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
  },

];