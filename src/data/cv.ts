export interface Knowledge {
  name: string;
  level: 1 | 2 | 3 | 4;
  group:
    | "Automatización y Desarrollo"
    | "Observabilidad y Operación"
    | "Infraestructura y Seguridad"
    | "Gestión y Comunicación"
    | "Capacidades Profesionales";
  description: string;
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

export const knowledge: Knowledge[] = [
  {
    name: "Zabbix",
    level: 2,
    group: "Observabilidad y Operación",
    description: "Migraciones completas 5.x a 7.x, plantillas y estandarización de monitoreo.",
  },
  {
    name: "Operation Orchestration",
    level: 4,
    group: "Observabilidad y Operación",
    description: "Diseño de flows para remediaciones, navegaciones sintéticas y tareas repetitivas.",
  },
  {
    name: "Grafana",
    level: 2,
    group: "Observabilidad y Operación",
    description: "Dashboards operativos con KPIs para equipos de sistemas y soporte.",
  },
  {
    name: "SCCM",
    level: 2,
    group: "Observabilidad y Operación",
    description: "Despliegue y operación de herramientas de gestión de endpoints.",
  },
  {
    name: "Redes e IP",
    level: 2,
    group: "Infraestructura y Seguridad",
    description: "Cableado estructurado, switches, cámaras IP y troubleshooting de campo.",
  },
  {
    name: "Seguridad técnica",
    level: 3,
    group: "Infraestructura y Seguridad",
    description: "Integración de sistemas de detección, alarmas y buenas prácticas base.",
  },
  {
    name: "Powershell",
    level: 4,
    group: "Automatización y Desarrollo",
    description: "Dominancia del lenguaje de programación.",
  },
  {
    name: "APIs",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Conectores de APIs.",
  },
  {
    name: "PHP",
    level: 3,
    group: "Automatización y Desarrollo",
    description: "Dominancia del lenguaje de programación.",
  },
  {
    name: "JIRA",
    level: 1,
    group: "Gestión y Comunicación",
    description: "Dominancia de producto.",
  },
  {
    name: "Inglés",
    level: 2,
    group: "Gestión y Comunicación",
    description: "Hablado y escrito.",
  },
  {
    name: "Python",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Dominancia del lenguaje de programación.",
  },
  {
    name: "JavaScript",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Dominancia del lenguaje de programación.",
  },
  {
    name: "Groovy",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Dominancia del lenguaje de programación.",
  },
  {
    name: "Aprendizaje",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Capacidad de aprender nuevos conocimientos rápidamente.",
  },
  {
    name: "Innovación",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Capacidad de desarrollar, mejorar o arreglar algo.",
  },
  {
    name: "Trato con el cliente",
    level: 3,
    group: "Gestión y Comunicación",
    description:
      "Capacidad de comunicarse directamente con este, cumpliendo objetivos y fechas, así como observación de mejora del trabajo.",
  },
  {
    name: "Proactividad",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Capacidad de detectar, dirigir o solventar algo.",
  },
  {
    name: "Análisis",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Capacidad de detectar o entender algo.",
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
    period: "Septiembre 2020 - Junio 2022",
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
    period: "Septiembre 2016 - Junio 2018",
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
    period: "Octubre 2019 - Junio 2020",
    start: "2019-10",
    end: "2020-06",
    location: "Móstoles, Madrid",
    details: [
      "Formación técnica en instalaciones eléctricas de baja tensión.",
    ],
  },
  {
    institution: "ENAE003PO",
    title: "Diseño y mantenimiento de instalaciones fotovoltaicas",
    period: "Enero 2019 - Diciembre 2019",
    start: "2019-01",
    end: "2019-12",
    details: [
      "Formación en diseño, mantenimiento e instalación fotovoltaica.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Networking Basics",
    issuer: "Cisco",
    date: "Mayo 2026",
    image: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/twitter_thumb_201604_image.png",
    credentialUrl: "https://www.credly.com/badges/5111aef1-03bb-4014-9b26-4a71d9809e26/public_url",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Abril 2026",
    image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    credentialUrl: "https://www.credly.com/badges/c775a0d0-1bcb-4516-a889-a23da7d49a04/public_url",
  },
  {
    name: "Docker Foundations Professional Certificate",
    issuer: "Docker",
    date: "Abril 2026",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQGWYIFHx1hORw/feedshare-shrink_1280/B4EZ1y2AwlIMAM-/0/1775748255035?e=1778185944&v=beta&t=XR70Hi91RuBzUrX6GYs3LkY8uGWKq0k0ttdBFG5xux0",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4E22AQHKv2tw7Y8Ngg/feedshare-shrink_1280/B4EZ1yDDhgJIAM-/0/1775734897033?e=1778186063&v=beta&t=Hv5rOuPDsSGwBbvWwno3LlNTllPXIvzYFv_s26fHtwQ",
  },
  {
    name: "Python para principiantes",
    issuer: "Microsoft",
    date: "Enero 2024",
    image: "https://learn.microsoft.com/training/achievements/beginner-python.svg",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4E22AQHKv2tw7Y8Ngg/feedshare-shrink_1280/B4EZ1yDDhgJIAM-/0/1775734897033?e=1778186063&v=beta&t=Hv5rOuPDsSGwBbvWwno3LlNTllPXIvzYFv_s26fHtwQ",
  },
];

export const projects: Project[] = [
  {
    title: "Carta Digital LM",
    description:
      "CartaDigitalLM convierte tu carta en una experiencia visual moderna. Tus clientes escanean, ven todo al instante y tú puedes actualizar precios, platos, fotos o promociones sin imprimir nada.",
    image: assetUrl("projects/carta-digital-lm-thumbnail.png"),
    technologies: ["BBDD", "Astro"],
    link: "https://lmcreator-dev.github.io/CartaDigitalLM/?cliente=demo",
  },
  {
    title: "Chatbot RAG",
    description:
      "Desarrollo de un chatbot basado en Retrieval-Augmented Generation (RAG) para mejorar la interacción con los usuarios.",
    image: assetUrl("projects/chatbot-rag-thumbnail.png"),
    technologies: ["n8n", "APIs", "RAG", "LLMs", "BBDD vectoriales"],
    link: "",
  },
];
