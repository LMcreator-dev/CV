import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R10.04 · Publication workflow
 ********************************************************/

export const R1004: HorusTopic = {

  code: "R10.04",
  title: "Publication workflow",

  items: [
    item("R10.04.01", "Preprint"),
    item("R10.04.02", "arXiv"),
    item("R10.04.03", "Conference submission"),
    item("R10.04.04", "Journal submission"),
    item("R10.04.05", "Peer review"),
    item("R10.04.06", "Rebuttal"),
    item("R10.04.07", "Revision"),
    item("R10.04.08", "Camera-ready submission"),

  ],

};
