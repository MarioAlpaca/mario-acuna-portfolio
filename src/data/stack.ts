export interface TechCategory {
  category: string;
  items: string[];
}

export const stack: TechCategory[] = [
  { 
    category: "CORE & LENGUAJES", 
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"] 
  },
  { 
    category: "FRONTEND & UI", 
    items: ["React", "Astro", "Tailwind CSS", "Framer Motion", "Next.js"] 
  },
  { 
    category: "BACKEND & CLOUD", 
    items: ["Node.js", "PostgreSQL", "AWS (S3/EC2)", "Docker"] 
  },
  { 
    category: "TOOLS & ARQUITECTURA", 
    items: ["Git / GitHub", "CI/CD Pipelines", "Figma", "REST APIs"] 
  }
];