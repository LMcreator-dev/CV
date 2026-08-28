export type StudyStatus =
  | "not-started"
  | "in-progress"
  | "completed"
  | "review";

export type EvidenceType =
  | "resource"
  | "exercise"
  | "exam"
  | "project"
  | "repository"
  | "course"
  | "certification"
  | "paper"
  | "report"
  | "research"
  | "other";

export type Evidence = {
  id: string;
  type: EvidenceType;
  title: string;
  url?: string;
  description?: string;
  date?: string;
  score?: number;
};

export type StudyInfo = {
  status: StudyStatus;
  startedAt: string;
  completedAt: string;
  hours: number;
};

export type HorusRecord = {
  completed: boolean;

  /*
   * 0 = No conocido
   * 1 = Familiaridad
   * 2 = Comprensión
   * 3 = Implementación
   * 4 = Dominio
   * 5 = Investigación
   */
  level: 0 | 1 | 2 | 3 | 4 | 5;

  study: StudyInfo;

  resources: Evidence[];
  exercises: Evidence[];
  exams: Evidence[];
  projects: Evidence[];
  courses: Evidence[];
  certifications: Evidence[];
  papers: Evidence[];
  evidence: Evidence[];

  notes: string;
};

export type CurriculumItem = {
  code: string;
  title: string;
};

export type HorusTopic = {
  code: string;
  title: string;
  items: CurriculumItem[];
};

export type HorusSubject = {
  code: string;
  title: string;
  description: string;
  topics: HorusTopic[];
  resources: Evidence[];
};

export type HorusStage = {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  subjects: HorusSubject[];
};
