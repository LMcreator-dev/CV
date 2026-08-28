import type { HorusSubject } from "../../types";

import { S0701 } from "./S07.01";
import { S0702 } from "./S07.02";
import { S0703 } from "./S07.03";
import { S0704 } from "./S07.04";

export const S07: HorusSubject = {

  code: "S07",
  title: "AI Security y Privacy",
  description: "Seguridad específica de modelos, privacidad y supply chain.",

  topics: [
    S0701,
    S0702,
    S0703,
    S0704,
  ],

  resources: [],

};
