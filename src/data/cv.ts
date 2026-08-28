import { HORUS } from "./horus";
import { HORUS_RECORDS } from "./horus/progress";
import { mergeRecord } from "./horus/helpers";

export interface Knowledge {
  name: string;
  level: 1 | 2 | 3 | 4;
  group:
    | "Automatización y Desarrollo"
    | "HORUS / IA"
    | "Técnica Industrial"
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
  credentialUrl?: string;
  group?: "IT y redes" | "Desarrollo" | "Formación reglada" | "Industria y seguridad";
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  ctaLabel?: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  motto: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  profileImage?: string;
}

const assetUrl = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${baseUrl}${path.replace(/^\/+/, "")}`;
};

export const profile: Profile = {
  name: "Luis Galindo",
  role: "Informático | Automatización IT | Electricista | Soldador",
  headline:
    "Especialista en automatización IT, monitorización, operación de plataformas críticas y aprendizaje aplicado en IA.",
  motto: "Obsession beats talent",
  summary:
    "Me defino como un perfil técnico muy lógico, directo y orientado a la productividad. Aprendo con rapidez, tanto en contextos tranquilos como bajo presión, y disfruto puliendo conocimientos ya adquiridos mientras incorporo otros nuevos. Mi forma de trabajar consiste en conectar distintas áreas técnicas para llegar a soluciones concretas; cuando entiendo un sistema o una necesidad, puedo construir respuestas que no siempre son evidentes ni fáciles de ejecutar.",
  email: "luisgg099@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/luis-galindo-487b7a217/",
  location: "",
  profileImage: assetUrl("profile/fotocv.jpg")

};

export const knowledge: Knowledge[] = [
  {
    name: "Zabbix",
    level: 2,
    group: "Observabilidad y Operación",
    description: "Migraciones 5.x a 7.x, plantillas y estandarización de monitorización.",
  },
  {
    name: "Operation Orchestration",
    level: 4,
    group: "Observabilidad y Operación",
    description: "Diseño de automatismos para remediaciones, navegaciones sintéticas y tareas operativas.",
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
    name: "Soldadura MIG/MAG",
    level: 3,
    group: "Técnica Industrial",
    description: "Soldeo MIG/MAG en posiciones plano, vertical, cornisa, ascendente, bajo techo y penetraciones.",
  },
  {
    name: "Soldadura OXIGAS",
    level: 2,
    group: "Técnica Industrial",
    description: "Aplicación de procesos OXIGAS en entorno industrial y contrato de prácticas.",
  },
  {
    name: "Interpretación de planos",
    level: 2,
    group: "Técnica Industrial",
    description: "Lectura, entendimiento y elaboración de planos técnicos para fabricación.",
  },
  {
    name: "Instalaciones eléctricas",
    level: 3,
    group: "Técnica Industrial",
    description: "Cableado eléctrico, datos, cámaras IP e instalaciones completas en campo.",
  },
  {
    name: "Seguridad técnica",
    level: 3,
    group: "Infraestructura y Seguridad",
    description: "Integración de sistemas de detección, alarmas y buenas prácticas base.",
  },
  {
    name: "PowerShell",
    level: 4,
    group: "Automatización y Desarrollo",
    description: "Automatización de tareas operativas, scripts y soporte a remediaciones.",
  },
  {
    name: "APIs",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Integraciones, conectores y consumo de servicios para automatización.",
  },
  {
    name: "PHP",
    level: 3,
    group: "Automatización y Desarrollo",
    description: "Desarrollo web y lógica de backend en proyectos propios y formación.",
  },
  {
    name: "JIRA",
    level: 1,
    group: "Gestión y Comunicación",
    description: "Seguimiento de tareas, incidencias y coordinación en entornos de proyecto.",
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
    description: "Programación base, scripting y trabajo progresivo sobre fundamentos del lenguaje.",
  },
  {
    name: "JavaScript",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Desarrollo frontend y lógica de interacción en proyectos web.",
  },
  {
    name: "Groovy",
    level: 2,
    group: "Automatización y Desarrollo",
    description: "Uso en automatizaciones y lógica de Operation Orchestration.",
  },
  {
    name: "Aprendizaje",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Aprendizaje rápido y transferencia de conocimiento entre áreas técnicas.",
  },
  {
    name: "Innovación",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Capacidad para proponer mejoras, construir soluciones y resolver bloqueos técnicos.",
  },
  {
    name: "Trato con el cliente",
    level: 3,
    group: "Gestión y Comunicación",
    description:
      "Comunicación clara con cliente, seguimiento de objetivos y detección de mejoras durante el trabajo.",
  },
  {
    name: "Proactividad",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Iniciativa para detectar necesidades, ordenar prioridades y ejecutar soluciones.",
  },
  {
    name: "Análisis",
    level: 4,
    group: "Capacidades Profesionales",
    description: "Lectura rápida de problemas, dependencias y posibles líneas de solución.",
  },
];

const toPortfolioLevel = (level: number): Knowledge["level"] => {
  if (level >= 5) return 4;
  if (level >= 4) return 4;
  if (level >= 3) return 3;
  if (level >= 2) return 2;
  return 1;
};

export const horusKnowledge: Knowledge[] = HORUS.flatMap((stage) =>
  stage.subjects.flatMap((subject) =>
    subject.topics
      .map((topic) => {
        const records = topic.items.map((curriculumItem) =>
          mergeRecord(HORUS_RECORDS[curriculumItem.code])
        );

        const completed = records.filter((record) => record.completed).length;
        const totalHours = records.reduce(
          (sum, record) => sum + record.study.hours,
          0
        );
        const levels = records
          .map((record) => record.level)
          .filter((level) => level > 0);

        if (completed === 0 && totalHours === 0 && levels.length === 0) {
          return null;
        }

        const averageLevel = levels.length
          ? levels.reduce((sum, level) => sum + level, 0) / levels.length
          : 1;

        return {
          name: topic.title,
          level: toPortfolioLevel(averageLevel),
          group: "HORUS / IA",
          description:
            `${topic.code}: ${completed}/${topic.items.length} conceptos ` +
            `completados, ${totalHours.toFixed(1)} h de práctica, nivel ` +
            `${averageLevel.toFixed(1)}/5.`,
        } satisfies Knowledge;
      })
      .filter((item): item is Knowledge => item !== null)
  )
);

export const experiences: Experience[] = [
  {
    company: "DIVISEGUR",
    position: "Soldador MIG/MAG y OXIGAS",
    period: "Junio 2026 - Actualidad",
    start: "2026-06",
    end: "2026-08",
    description:
      "Contrato de prácticas presencial, dentro de entorno industrial.",
    highlights: [
      "Soldadura MIG/MAG y OXIGAS.",
      "Soldeo en plano, vertical, cornisa, ascendente, bajo techo y penetraciones.",
      "Elaboración, lectura y entendimiento de planos técnicos.",
    ],
  },
  {
    company: "WAKKEIT",
    position: "Consultor IT",
    period: "Junio 2022 - Noviembre 2025",
    start: "2022-06",
    end: "2025-11",
    description:
      "Consultoría IT en entornos enterprise para AENA, TMB, SEAT y SegurCaixa Adeslas.",
    highlights: [
      "AENA: migración y configuración de Zabbix 5.0 a 7.0, optimizaciones y soporte operativo.",
      "TMB: administración y desarrollo en Operation Orchestration con automatismos Windows/Linux.",
      "SEAT España: automatismos OO, conectores API para Zabbix, dashboards en Grafana y mantenimiento de SOI.",
      "SegurCaixa Adeslas: maquetación, despliegue SCCM e instalación en clínicas dentales.",
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
          "Administrador y desarrollador OO. Automatismos, lectura de bases de datos, envío de correos, reinicios, alertas, remediaciones, conectores API para Zabbix, dashboards Grafana y mantenimiento de SOI.",
      },
      {
        title: "TMB",
        period: "Julio 2024 - Noviembre 2025",
        start: "2024-07",
        end: "2025-11",
        description:
          "Administración y desarrollo OO: navegaciones sintéticas, reinicios, recopilación de estados de switches, generación de informes y remediaciones Windows/Linux.",
      },
      {
        title: "AENA",
        period: "Enero 2025 - Noviembre 2025",
        start: "2025-01",
        end: "2025-11",
        description:
          "Migración y configuración de Zabbix 5.0 a 7.0, optimizaciones, administración e incidencias.",
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
      "Trabajo técnico en instalaciones eléctricas y comunicaciones en aeropuertos de la península e islas de territorio español.",
    highlights: [
      "Derivaciones de alta tensión.",
      "Cableado de datos y eléctrico.",
      "Instalación de cámaras IP.",
      "Instalaciones eléctricas completas.",
    ],
  },
  {
    company: "Vodafone",
    position: "Instalador técnico",
    period: "Junio 2018 - Julio 2018",
    start: "2018-06",
    end: "2018-07",
    description:
      "Instalaciones y mantenimiento para servicios de telecomunicaciones en Humanes, Madrid.",
    highlights: [
      "Instalación y mantenimiento de servicios.",
      "Resolución de incidencias de campo.",
      "Trabajo técnico orientado a cliente.",
    ],
  },
  {
    company: "ACECHO SEGURIDAD SL",
    position: "Instalador técnico",
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
      "Administración de sistemas gestores de bases de datos",
      "Administración de sistemas operativos",
      "Empresa e iniciativa emprendedora",
      "Formación en Centros de Trabajo",
      "Implantación de aplicaciones web",
      "Inglés técnico para grado superior",
      "Proyecto de administración de sistemas informáticos en red",
      "Seguridad y alta disponibilidad",
      "Servicios de red e internet ",
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
      "Infraestructuras comunes de telecomunicación en viviendas y edificios.",
      "Electrónica aplicada ",
      "Equipos microinformáticos ",
      "Instalaciones eléctricas básicas",
      "Instalaciones de radiocomunicaciones ",
      "Inglés técnico para CFGM de la familia profesional de electricidad y electrónica",
      "Formación y orientación laboral",
      "Instalaciones domóticas",
      "Infraestructuras de redes de datos y sistemas de telefonía",
      "Instalaciones de megafonía y sonorización",
      "Circuito cerrado de televisión y seguridad electrónica",
      "Empresa e iniciativa emprendedora",
      "Formación en centros de trabajo"
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
      "Instalaciones eléctricas en edificios de viviendas",
      "Instalaciones eléctricas en edificios de oficinas, comercios e industrias",
      "Montaje y mantenimiento de redes eléctricas aéreas de baja tensión",
      "Montaje y mantenimiento de redes eléctricas subterráneas de baja tensión",
      "Montaje y mantenimiento de máquinas eléctricas"
    ],
  },
  {
    institution: "ENAE003PO",
    title: "Diseño y mantenimiento de instalaciones fotovoltaicas",
    period: "Enero 2019 - Diciembre 2019",
    start: "2019-01",
    end: "2019-12",
    details: [
      "Radiación solar",
      "Módulo fotovoltaico y generador fotovoltaico",
      "Instalación",
      "Puesta en marcha de sistemas fotovoltaicos",
      "Sistemas fotovoltaicos conectados a red",
      "Diseño de sistemas fotovoltaicos conectados a red",
      "Mantenimiento y plan de vigilancia"
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Introduction to Python",
    issuer: "DataCamp",
    date: "Agosto 2026",
    group: "Desarrollo",
    image: assetUrl("certifications/cert-fallback.svg"),
    credentialUrl: assetUrl("horus/evidence/certifications/datacamp-introduction-to-python-2026.pdf"),
  },
  {
    name: "Python",
    issuer: "Santander Open Academy",
    date: "Agosto 2026",
    group: "Desarrollo",
    image: assetUrl("certifications/cert-fallback.svg"),
    credentialUrl: assetUrl("horus/evidence/certifications/santander-open-academy-python-2026.pdf"),
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    date: "Mayo 2026",
    group: "IT y redes",
    image: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/twitter_thumb_201604_image.png",
    credentialUrl: "https://www.credly.com/badges/5111aef1-03bb-4014-9b26-4a71d9809e26/public_url",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Abril 2026",
    group: "IT y redes",
    image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    credentialUrl: "https://www.credly.com/badges/c775a0d0-1bcb-4516-a889-a23da7d49a04/public_url",
  },
  {
    name: "Docker Foundations Professional Certificate",
    issuer: "Docker",
    date: "Abril 2026",
    group: "Desarrollo",
    image: assetUrl("certifications/docker_logo.png"),
    credentialUrl: "https://www.linkedin.com/in/luis-galindo-487b7a217/details/certifications/",
  },
  {
    name: "Python para principiantes",
    issuer: "Microsoft",
    date: "Enero 2024",
    group: "Desarrollo",
    image: assetUrl("certifications/beginner-python.svg"),
    credentialUrl: "https://learn.microsoft.com/es-es/users/lmggmenendez/achievements/k5yxhhgb",
  },
  {
    name: "Administración de sistemas informáticos en Red",
    issuer: "Andel",
    date: "Enero 2022",
    group: "Formación reglada",
    image: assetUrl("certifications/asir_cv.png"),
  },
  {
    name: "Técnico en Instalaciones de Telecomunicaciones",
    issuer: "Luis de Lucena",
    date: "Enero 2018",
    group: "Formación reglada",
    image: assetUrl("certifications/itel_cv.png"),
  },
  {
    name: "Montaje y mantenimiento de instalaciones eléctricas de baja tensión",
    issuer: "Punto Omega",
    date: "Noviembre 2020",
    group: "Industria y seguridad",
    image: assetUrl("certifications/elect_cv.png"),
  },
  {
    name: "Diseño y mantenimiento de instalaciones fotovoltaicas",
    issuer: "Femxa",
    date: "Agosto 2019",
    group: "Industria y seguridad",
    image: assetUrl("certifications/fotovol_cv.png"),
  },
  {
    name: "PRL instalaciones eléctricas",
    issuer: "TERRASA",
    date: "Marzo 2019",
    group: "Industria y seguridad",
    image: assetUrl("certifications/prl_cv.png"),
  },
];

export const projects: Project[] = [
  {
    title: "Carta Digital LM",
    description:
      "CartaDigitalLM convierte tu carta en una experiencia visual moderna. Tus clientes escanean, ven todo al instante y tú puedes actualizar precios, platos, fotos o promociones sin imprimir nada.",
    image: assetUrl("projects/carta-digital-lm-thumbnail.png"),
    technologies: ["Astro", "Base de datos"],
    link: "https://lmcreator-dev.github.io/CartaDigitalLM/?cliente=demo",
  },
  {
    title: "Chatbot RAG",
    description:
      "Automatismo funcional en n8n con RAG, capaz de responder como secretario virtual de una empresa. Su comportamiento, información base y estilo de respuesta se pueden adaptar a cada caso; demo disponible bajo solicitud.",
    image: assetUrl("projects/project-fallback.svg"),
    technologies: ["n8n", "APIs", "RAG", "LLMs", "Bases vectoriales"],
    link: profile.linkedin,
    ctaLabel: "Disponible bajo solicitud",
  },
];
