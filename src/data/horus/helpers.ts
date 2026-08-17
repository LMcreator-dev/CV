import type {
  Evidence,
  HorusRecord,
  CurriculumItem,
} from "./types";

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
