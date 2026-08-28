import type { HorusSubject } from "../../types";

import { G0901 } from "./G09.01";
import { G0902 } from "./G09.02";
import { G0903 } from "./G09.03";
import { G0904 } from "./G09.04";
import { G0905 } from "./G09.05";

export const G09: HorusSubject = {

  code: "G09",
  title: "PyTorch y Frameworks de Deep Learning",
  description: "Tensors, autograd, training, GPU, mixed precision y profiling.",

  topics: [
    G0901,
    G0902,
    G0903,
    G0904,
    G0905,
  ],

  resources: [],

};
