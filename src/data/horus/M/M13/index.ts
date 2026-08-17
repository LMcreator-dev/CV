import type { HorusSubject } from "../../types";

import { M1301 } from "./M13.01";
import { M1302 } from "./M13.02";
import { M1303 } from "./M13.03";
import { M1304 } from "./M13.04";
import { M1305 } from "./M13.05";
import { M1306 } from "./M13.06";
import { M1307 } from "./M13.07";

export const M13: HorusSubject = {

  code: "M13",
  title: "Retrieval, RAG y Agent Systems",
  description: "Recuperación de información, RAG, herramientas y sistemas agentivos.",

  topics: [
    M1301,
    M1302,
    M1303,
    M1304,
    M1305,
    M1306,
    M1307,
  ],

  resources: [],

};
