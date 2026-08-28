import type { HorusSubject } from "../../types";

import { G0801 } from "./G08.01";
import { G0802 } from "./G08.02";
import { G0803 } from "./G08.03";
import { G0804 } from "./G08.04";
import { G0805 } from "./G08.05";
import { G0806 } from "./G08.06";
import { G0807 } from "./G08.07";

export const G08: HorusSubject = {

  code: "G08",
  title: "Deep Learning Fundamentals",
  description: "Redes neuronales, backpropagation, optimización, regularización y arquitecturas profundas.",

  topics: [
    G0801,
    G0802,
    G0803,
    G0804,
    G0805,
    G0806,
    G0807,
  ],

  resources: [],

};
