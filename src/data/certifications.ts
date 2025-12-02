export interface Certification {
  name: string;
  issuer: string;
  date: string;
  id?: string;
  url?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "jul. 2023",
    url: "https://www.credly.com/badges/291c8ba2-585b-4096-b9c7-ac6121c45c7e/linked_in_profile",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "ago. 2025",
    url: "https://www.credly.com/badges/3ac0c3e0-f43d-4971-bcd0-94b8b3340e37/linked_in_profile",
  },
  {
    name: "Aplicaciones Básicas de Excel",
    issuer: "CAIUsach (Univ. de Santiago)",
    date: "nov. 2021 - dic. 2021",
    image: "../cert/excel-usach.jpg",
  }
];