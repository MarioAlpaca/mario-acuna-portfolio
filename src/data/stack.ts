export interface TechCategory {
  category: string;
  items: string[];
}

export const stack: TechCategory[] = [
  { 
    category: "CORE & DATA", 
    items: ["Python", "SQL", "JavaScript", "Power BI", "TypeScript", "Excel Intermedio"] 
  },
  { 
    category: "FULL STACK WEB", 
    items: ["React", "Astro", "Tailwind CSS", "Django", "Node.js"] 
  },
  { 
    category: "BACKEND & DB", 
    items: ["PostgreSQL", "MySQL", "MongoDB", "NoSQL"] 
  },
  { 
    category: "CLOUD & DEVOPS", 
    items: ["AWS (S3/EC2)", "Docker", "Git / GitHub", "Scrum / Agile"] 
  },
  { 
    category: "ENTERPRISE & SAP",
    items: ["SAP ABAP", "Vistas CDS", "OData Services"] 
  },
];