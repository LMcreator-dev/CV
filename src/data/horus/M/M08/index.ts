import type { HorusSubject } from "../../types";

import { M0801 } from "./M08.01";
import { M0802 } from "./M08.02";
import { M0803 } from "./M08.03";
import { M0804 } from "./M08.04";

export const M08: HorusSubject = {

  code: "M08",
  title: "Generative AI",
  description: "Autoencoders, VAE, GANs y diffusion models.",

  topics: [
    M0801,
    M0802,
    M0803,
    M0804,
  ],

  resources: [],

};
