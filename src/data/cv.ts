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
    "Especialista en migraciones Zabbix, automatizacion en Operation Orchestration y administracion de plataformas criticas.",
  summary:
    "Consultor IT orientado a resultados, con experiencia en observabilidad, automatizacion y soporte de infraestructura. Trabajo con foco en ejecucion rapida, criterio tecnico y mejora continua.",
  email: "luisgg099@gmail.com",
  phone: "+34 624010211",
  linkedin: "https://www.linkedin.com/in/luis-galindo-487b7a217/",
  location: "Barcelona, Espana",
};

export const skills: Skill[] = [
  {
    name: "Zabbix",
    description: "Migraciones completas 5.x a 7.x, plantillas y estandarizacion de monitoreo.",
    icon: "ZT",
  },
  {
    name: "Operation Orchestration",
    description: "Diseno de flows para remediaciones, navegaciones sinteticas y tareas repetitivas.",
    icon: "OO",
  },
  {
    name: "Grafana",
    description: "Dashboards operativos con KPIs para equipos de sistemas y soporte.",
    icon: "GF",
  },
  {
    name: "SCCM",
    description: "Despliegue y operacion de herramientas de gestion de endpoints.",
    icon: "SC",
  },
  {
    name: "Redes e IP",
    description: "Cableado estructurado, switches, camaras IP y troubleshooting de campo.",
    icon: "NW",
  },
  {
    name: "Seguridad tecnica",
    description: "Integracion de sistemas de deteccion, alarmas y buenas practicas base.",
    icon: "SG",
  },
];

export const experiences: Experience[] = [
  {
    company: "WAKKEIT",
    position: "Consultor IT",
    period: "2022 - 2025",
    description:
      "Participacion en proyectos para entornos enterprise con foco en observabilidad y automatizacion.",
    highlights: [
      "Migracion completa de Zabbix 5.0 a 7.0 en AENA.",
      "Desarrollo y mantenimiento en Operation Orchestration para TMB y SEAT.",
      "Diseno de paneles en Grafana para operacion y soporte.",
      "Despliegue SCCM en SegurCaixa Adeslas.",
    ],
  },
  {
    company: "Espacio Information Technology",
    position: "Especialista en Microinformatica",
    period: "2022",
    description:
      "Mantenimiento de parque informatico y soporte tecnico para incidencias de hardware y software.",
    highlights: [
      "Actualizacion de BIOS y firmware en equipos corporativos.",
      "Mantenimiento preventivo y mejora de vida util.",
      "Soporte tecnico a usuarios y resolucion de incidencias.",
    ],
  },
  {
    company: "Landatel Comunicaciones",
    position: "Tecnico Informatico",
    period: "2021",
    description:
      "Trabajo tecnico en infraestructura, electricidad y despliegues de red en campo.",
    highlights: [
      "Instalacion de cableado de datos y lineas electricas.",
      "Montaje y configuracion de camaras IP.",
      "Mantenimiento de derivaciones de alta tension.",
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
    title: "Migracion Zabbix",
    description:
      "Ejecucion de migracion de plataforma de monitoreo con minimo impacto operativo y mejora de visibilidad.",
    image: assetUrl("projects/zabbix.svg"),
    technologies: ["Zabbix", "Linux", "Windows", "Monitoreo"],
  },
  {
    title: "Automatizaciones OO",
    description:
      "Implementacion de flows de operacion para tareas de remediacion, chequeos y reinicios controlados.",
    image: assetUrl("projects/oo.svg"),
    technologies: ["Operation Orchestration", "Automatizacion", "Scripting"],
  },
  {
    title: "Dashboards Grafana",
    description:
      "Creacion de cuadros de mando para seguimiento tecnico de disponibilidad y rendimiento.",
    image: assetUrl("projects/grafana.svg"),
    technologies: ["Grafana", "Observabilidad", "KPI"],
  },
];
