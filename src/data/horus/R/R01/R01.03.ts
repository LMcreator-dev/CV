import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R01.03 · Reproducibilidad
 ********************************************************/

export const R0103: HorusTopic = {

  code: "R01.03",
  title: "Reproducibilidad",

  items: [
    item("R01.03.01", "Reproducible environment"),
    item("R01.03.02", "Dependency locking"),
    item("R01.03.03", "Seeds"),
    item("R01.03.04", "Dataset versioning"),
    item("R01.03.05", "Experiment logs"),
    item("R01.03.06", "Checkpoint preservation"),
    item("R01.03.07", "Hardware documentation"),

  ],

};
