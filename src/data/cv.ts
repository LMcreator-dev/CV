export interface Skill {
  name: string;
  description: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  start: string;
  end: string;
  description: string;
  highlights: string[];
  subItems?: TimelineSubItem[];
}

export interface Education {
  institution: string;
  title: string;
  period: string;
  start: string;
  end: string;
  location?: string;
  details: string[];
}

export interface TimelineSubItem {
  title: string;
  period: string;
  start: string;
  end: string;
  description: string;
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
  name: "Luis Galindo",
  role: "IT Automation Engineer | Devops | AI agents | Full Stack Developer | Consultor IT",
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
    start: "2022-06",
    end: "2025-11",
    description:
      "Consultoría IT en entornos enterprise para AENA, TMB, SEAT y SegurCaixa Adeslas.",
    highlights: [
      "AENA, enero 2025 - noviembre 2025: migración completa, administración, incidencias y mantenimiento de Zabbix 5.0 a 7.0.",
      "TMB, julio 2024 - noviembre 2025: instalación, administración y desarrollo en Operation Orchestration, incluyendo navegaciones sintéticas, reinicios, reportes y remediaciones Windows/Linux.",
      "SEAT, diciembre 2022 - noviembre 2025: desarrollo de flows OO, lectura de BBDD, envío de correos, reinicios, conectores API para Zabbix y mantenimiento de Grafana.",
      "SegurCaixa Adeslas, junio 2022 - diciembre 2022: despliegue SCCM e instalación en clínicas dentales.",
    ],
    subItems: [
      {
        title: "SegurCaixa Adeslas",
        period: "Junio 2022 - Diciembre 2022",
        start: "2022-06",
        end: "2022-12",
        description: "Despliegue SCCM e instalación en clínicas dentales.",
      },
      {
        title: "SEAT",
        period: "Diciembre 2022 - Noviembre 2025",
        start: "2022-12",
        end: "2025-11",
        description:
          "Flows OO, lectura de BBDD, envío de correos, reinicios, conectores API para Zabbix y mantenimiento de Grafana.",
      },
      {
        title: "TMB",
        period: "Julio 2024 - Noviembre 2025",
        start: "2024-07",
        end: "2025-11",
        description:
          "Administración y desarrollo OO: navegaciones sintéticas, reinicios, reportes y remediaciones Windows/Linux.",
      },
      {
        title: "AENA",
        period: "Enero 2025 - Noviembre 2025",
        start: "2025-01",
        end: "2025-11",
        description:
          "Migración completa, administración, incidencias y mantenimiento de Zabbix 5.0 a 7.0.",
      },
    ],
  },
  {
    company: "Espacio Information Technology",
    position: "Especialista en Microinformática",
    period: "Abril 2022 - Junio 2022",
    start: "2022-04",
    end: "2022-06",
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
    start: "2021-06",
    end: "2021-08",
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
    start: "2019-03",
    end: "2019-09",
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
    start: "2018-06",
    end: "2018-09",
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
    start: "2018-04",
    end: "2018-06",
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
    start: "2020-09",
    end: "2022-06",
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
    start: "2016-09",
    end: "2018-06",
    location: "Guadalajara",
    details: [
      "Instalación y mantenimiento de telecomunicaciones.",
      "Trabajo técnico de campo, cableado e infraestructura.",
    ],
  },
  {
    institution: "PUNTO OMEGA",
    title: "Montaje y mantenimiento de instalaciones eléctricas de baja tensión",
    period: "2020",
    start: "2020-01",
    end: "2020-06",
    location: "Móstoles, Madrid",
    details: [
      "Formación técnica en instalaciones eléctricas de baja tensión.",
    ],
  },
  {
    institution: "ENAE003PO",
    title: "Diseño y mantenimiento de instalaciones fotovoltaicas",
    period: "2019",
    start: "2019-01",
    end: "2019-12",
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
    title: "Carta Digital LM",
    description:
      "CartaDigitalLM convierte tu carta en una experiencia visual moderna. Tus clientes escanean, ven todo al instante y tú puedes actualizar precios, platos, fotos o promociones sin imprimir nada.",
    image: assetUrl("projects/zabbix.svg"),
    technologies: ["BBDD", "Astro"],
  },
];
