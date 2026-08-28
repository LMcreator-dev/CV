import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S06.03 · Producción
 ********************************************************/

export const S0603: HorusTopic = {

  code: "S06.03",
  title: "Producción",

  items: [
    item("S06.03.01", "Deployment"),
    item("S06.03.02", "Monitoring"),
    item("S06.03.03", "Data drift"),
    item("S06.03.04", "Concept drift"),
    item("S06.03.05", "Performance monitoring"),
    item("S06.03.06", "Rollbacks"),
    item("S06.03.07", "Observability"),

  ],

};
