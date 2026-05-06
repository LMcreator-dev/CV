export interface Skill {
  name: string;
  description: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  title: string;
  period: string;
  location?: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const assetUrl = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${baseUrl}${path.replace(/^\/+/, "")}`;
};

export const profile = {
  name: "Luis María Galindo García",
  role: "Consultor IT | Desarrollador | Especialista en Sistemas",
  headline:
    "Especialista en migraciones Zabbix, automatización en Operation Orchestration y administración de plataformas críticas.",
  summary:
    "Me considero una persona ambiciosa pero realista. Destaco por mi rapidez a la hora de actuar, el enfoque, el brainstorming y la pasión por continuar aprendiendo.",
  email: "luisgg099@gmail.com",
  phone: "+34 624010211",
  linkedin: "https://www.linkedin.com/in/luis-galindo-487b7a217/",
  location: "Madridejos, Toledo",
};

export const skills: Skill[] = [
  {
    name: "Zabbix",
    description: "Migraciones completas 5.x a 7.x, plantillas y estandarización de monitoreo.",
    icon: "ZT",
  },
  {
    name: "Operation Orchestration",
    description: "Diseño de flows para remediaciones, navegaciones sintéticas y tareas repetitivas.",
    icon: "OO",
  },
  {
    name: "Grafana",
    description: "Dashboards operativos con KPIs para equipos de sistemas y soporte.",
    icon: "GF",
  },
  {
    name: "SCCM",
    description: "Despliegue y operación de herramientas de gestión de endpoints.",
    icon: "SC",
  },
  {
    name: "Redes e IP",
    description: "Cableado estructurado, switches, cámaras IP y troubleshooting de campo.",
    icon: "NW",
  },
  {
    name: "Seguridad técnica",
    description: "Integración de sistemas de detección, alarmas y buenas prácticas base.",
    icon: "SG",
  },
];

export const experiences: Experience[] = [
  {
    company: "WAKKEIT",
    position: "Consultor IT",
    period: "Junio 2022 - Noviembre 2025",
    description:
      "Consultoría IT en entornos enterprise para AENA, TMB, SEAT y SegurCaixa Adeslas.",
    highlights: [
      "AENA, enero 2025 - noviembre 2025: migración completa, administración, incidencias y mantenimiento de Zabbix 5.0 a 7.0.",
      "TMB, julio 2024 - noviembre 2025: instalación, administración y desarrollo en Operation Orchestration, incluyendo navegaciones sintéticas, reinicios, reportes y remediaciones Windows/Linux.",
      "SEAT, diciembre 2022 - noviembre 2025: desarrollo de flows OO, lectura de BBDD, envío de correos, reinicios, conectores API para Zabbix y mantenimiento de Grafana.",
      "SegurCaixa Adeslas, junio 2022 - diciembre 2022: despliegue SCCM e instalación en clínicas dentales.",
    ],
  },
  {
    company: "Espacio Information Technology",
    position: "Especialista en Microinformática",
    period: "Abril 2022 - Junio 2022",
    description:
      "Soporte in situ en Torre Emperador para incidencias de usuario, hardware y oficina.",
    highlights: [
      "Actualización de BIOS y firmware en equipos corporativos.",
      "Mantenimiento preventivo y mejora de vida útil.",
      "Soporte técnico a usuarios y resolución de incidencias.",
    ],
  },
  {
    company: "Landatel Comunicaciones",
    position: "Técnico Informático",
    period: "Junio 2021 - Agosto 2021",
    description:
      "Reparación y valoración de equipos informáticos, cámaras, hubs, switches y firmware.",
    highlights: [
      "Actualización de BIOS, software y firmware.",
      "Valoración y reparación de equipos informáticos.",
      "Trabajo con cámaras, hubs y switches.",
    ],
  },
  {
    company: "SERTEC INGENIERÍA",
    position: "Oficial Electricista",
    period: "Marzo 2019 - Septiembre 2019",
    description:
      "Trabajo técnico en instalaciones eléctricas y comunicaciones en La Garena, Madrid.",
    highlights: [
      "Derivaciones de alta tensión.",
      "Cableado de datos y eléctrico.",
      "Instalación de cámaras IP.",
    ],
  },
  {
    company: "VODAFONE / Icono",
    position: "Instalador",
    period: "Junio 2018 - Septiembre 2018",
    description:
      "Instalaciones y mantenimiento para servicios de telecomunicaciones en Humanes, Madrid.",
    highlights: [
      "Instalación y mantenimiento de servicios.",
      "Resolución de incidencias de campo.",
      "Trabajo técnico orientado a cliente.",
    ],
  },
  {
    company: "Acecho Seguridad",
    position: "Técnico",
    period: "Abril 2018 - Junio 2018",
    description:
      "Instalaciones y mantenimiento de sistemas de seguridad en Madrid centro.",
    highlights: [
      "Instalación de detectores magnéticos, volumétricos y de humo.",
      "Montaje de cámaras y centralitas antirrobo.",
      "Mantenimiento de sistemas antiincendios.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "ANDEL",
    title: "Grado Superior en Informática - ASIR",
    period: "2020 - 2022",
    location: "Alcorcón, Madrid",
    details: [
      "Administración de sistemas informáticos en red.",
      "Base formativa para sistemas, redes y soporte.",
    ],
  },
  {
    institution: "IES Luis de Lucena",
    title: "Grado Medio en Instalación y Mantenimiento de Telecomunicaciones",
    period: "2016 - 2018",
    location: "Guadalajara",
    details: [
      "Instalación y mantenimiento de telecomunicaciones.",
      "Trabajo técnico de campo, cableado e infraestructura.",
    ],
  },
  {
    institution: "PUNTO OMEGA",
    title: "Montaje y mantenimiento de instalaciones eléctricas de baja tensión",
    period: "2019",
    location: "Móstoles, Madrid",
    details: [
      "Formación técnica en instalaciones eléctricas de baja tensión.",
    ],
  },
  {
    institution: "ENAE003PO",
    title: "Diseño y mantenimiento de instalaciones fotovoltaicas",
    period: "2019",
    details: [
      "Formación en diseño, mantenimiento e instalación fotovoltaica.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Abril 2026",
    image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    credentialUrl: "https://www.credly.com/users/lmcreator-dev/badges",
  },
];

export const projects: Project[] = [
  {
    title: "Migración Zabbix",
    description:
      "Ejecución de migración de plataforma de monitoreo con mínimo impacto operativo y mejora de visibilidad.",
    image: assetUrl("projects/zabbix.svg"),
    technologies: ["Zabbix", "Linux", "Windows", "Monitoreo"],
  },
  {
    title: "Automatizaciones OO",
    description:
      "Implementación de flows de operación para tareas de remediación, chequeos y reinicios controlados.",
    image: assetUrl("projects/oo.svg"),
    technologies: ["Operation Orchestration", "Automatización", "Scripting"],
  },
  {
    title: "Dashboards Grafana",
    description:
      "Creación de cuadros de mando para seguimiento técnico de disponibilidad y rendimiento.",
    image: assetUrl("projects/grafana.svg"),
    technologies: ["Grafana", "Observabilidad", "KPI"],
  },
];
