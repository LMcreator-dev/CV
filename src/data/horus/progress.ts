import type { HorusRecord } from "./types";

/*
 * ============================================================
 * HORUS RECORDS
 * ============================================================
 *
 * ESTE ES EL ARCHIVO QUE SE MODIFICA AL AVANZAR.
 *
 * Si un concepto NO aparece aquí:
 *
 *   completed = false
 *   level = 0
 *   no hay metadatos
 *
 * Cuando se complete un concepto, se añade aquí.
 *
 * ============================================================
 *
 * PLANTILLA:
 *
 * "G01.01.01": {
 *   completed: true,
 *   level: 5,
 *
 *   study: {
 *     status: "completed",
 *     startedAt: "",
 *     completedAt: "",
 *     hours: 0,
 *   },
 *
 *   resources: [],
 *   exercises: [],
 *   exams: [],
 *   projects: [],
 *   courses: [],
 *   certifications: [],
 *   papers: [],
 *   evidence: [],
 *
 *   notes: "",
 * },
 *
 * ============================================================
 */

export const HORUS_RECORDS: Record<
  string,
  Partial<HorusRecord>
> = {

  /*
   * ----------------------------------------------------------
   * AÑADIR AQUÍ LOS CONCEPTOS COMPLETADOS / EN PROGRESO
   * ----------------------------------------------------------
   *
   * Ejemplo:
   *
   * "G01.01.01": {
   *   completed: true,
   *   level: 5,
   *
   *   study: {
   *     status: "completed",
   *     startedAt: "",
   *     completedAt: "",
   *     hours: 0,
   *   },
   *
   *   resources: [],
   *   exercises: [],
   *   exams: [],
   *   projects: [],
   *   courses: [],
   *   certifications: [],
   *   papers: [],
   *   evidence: [],
   *
   *   notes: "",
   * },
   */

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
