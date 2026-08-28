import type {
  Evidence,
  HorusRecord,
  CurriculumItem,
  StudyInfo,
  StudyStatus,
} from "./types";

type CompactRecord = Omit<Partial<HorusRecord>, "study"> & {
  status?: StudyStatus;
  startedAt?: string;
  completedAt?: string;
  date?: string;
  hours?: number;
  study?: Partial<StudyInfo>;
};

export const emptyRecord = (): HorusRecord => ({
  completed: false,

  level: 0,

  study: {
    status: "not-started",
    startedAt: "",
    completedAt: "",
    hours: 0,
  },

  resources: [],
  exercises: [],
  exams: [],
  projects: [],
  courses: [],
  certifications: [],
  papers: [],
  evidence: [],

  notes: "",
});

export const item = (
  code: string,
  title: string
): CurriculumItem => ({
  code,
  title,
});

export const resource = (
  id: string,
  title: string,
  type: Evidence["type"],
  url: string,
  description = ""
): Evidence => ({
  id,
  type,
  title,
  url,
  description,
});

export const progressRecord = (
  record: CompactRecord
): Partial<HorusRecord> => {

  const completed =
    record.completed ?? record.status === "completed";

  const status =
    record.status ?? (completed ? "completed" : "not-started");

  const startedAt =
    record.startedAt ?? record.date ?? "";

  const completedAt =
    record.completedAt ??
    (completed ? record.date ?? startedAt : "");

  const hours =
    record.hours ?? record.study?.hours ?? 0;

  return {
    ...record,
    completed,

    study: {
      status,
      startedAt,
      completedAt,
      hours,
      ...(record.study ?? {}),
    },
  };
};

export const mergeRecord = (
  record?: Partial<HorusRecord>
): HorusRecord => {

  const base = emptyRecord();

  return {
    ...base,
    ...(record ?? {}),

    study: {
      ...base.study,
      ...(record?.study ?? {}),
    },

    resources:
      record?.resources ?? [],

    exercises:
      record?.exercises ?? [],

    exams:
      record?.exams ?? [],

    projects:
      record?.projects ?? [],

    courses:
      record?.courses ?? [],

    certifications:
      record?.certifications ?? [],

    papers:
      record?.papers ?? [],

    evidence:
      record?.evidence ?? [],

    notes:
      record?.notes ?? "",
  };
};

export const getEvidence = (
  record: HorusRecord
): Evidence[] => [
  ...record.resources,
  ...record.exercises,
  ...record.exams,
  ...record.projects,
  ...record.courses,
  ...record.certifications,
  ...record.papers,
  ...record.evidence,
];
