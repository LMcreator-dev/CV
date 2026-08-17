import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R06.03
 * Publicación
 ********************************************************/

export const R0603: HorusTopic = {

  code: "R06.03",

  title: "Publicación",

  items: [

    item("R06.03.01", "Technical report"),
    item("R06.03.02", "Preprint"),
    item("R06.03.03", "arXiv"),
    item("R06.03.04", "Conference submission"),
    item("R06.03.05", "Peer review"),
    item("R06.03.06", "Open-source release"),
    item("R06.03.07", "Model release"),
    item("R06.03.08", "Dataset release"),

  ],

};
