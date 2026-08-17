import type { HorusSubject } from "../../types";

import { S0101 } from "./S01.01";
import { S0102 } from "./S01.02";

export const S01: HorusSubject = {

  code: "S01",
  title: "Arquitectura de computadores y GPU",
  description: "Comprender el hardware sobre el que se ejecutan los modelos.",

  topics: [
    S0101,
    S0102,
  ],

  resources: [],

};
