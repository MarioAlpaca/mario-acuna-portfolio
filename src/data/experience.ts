export interface Job {
  role: string;
  company: string;
  date: string;
  description: string;
  current?: boolean;
}

export const experience: Job[] = [
  {
    role: "Desarrollador SAP ABAP (Práctica Profesional)",
    company: "Watt's S.A.",
    date: "Feb 2025 — Abr 2025",
    description: "Desarrollo en ecosistema SAP utilizando ABAP (Estructuras, Field Symbols). Creación de reportes personalizados, validaciones y optimización de procesos. Implementación de Vistas CDS y servicios OData.",
    current: false, 
  },
  {
    role: "Ingeniería en Informática",
    company: "INACAP",
    date: "2021 — 2024",
    description: "Titulado en 2025. Formación en desarrollo Full Stack, gestión de bases de datos (SQL/NoSQL) y arquitectura de software. Proyectos académicos con metodologías ágiles (Scrum).",
    current: false,
  }
];