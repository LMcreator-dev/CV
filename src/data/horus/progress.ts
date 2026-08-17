import type { HorusRecord } from "./types";

export const HORUS_RECORDS: Record<string, Partial<HorusRecord>> = {

  "G01.01.01": {
    completed: true,
    level: 5,
    study: {
      status: "completed",
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
  },

};
