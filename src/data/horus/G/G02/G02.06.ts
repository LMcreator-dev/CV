import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G02.06
 * Docker y contenedores
 ********************************************************/

export const G0206: HorusTopic = {

  code: "G02.06",
  title: "Docker y contenedores",

  items: [
    item("G02.06.01", "Containers"),
    item("G02.06.02", "Images"),
    item("G02.06.03", "Dockerfile"),
    item("G02.06.04", "Layers"),
    item("G02.06.05", "Volumes"),
    item("G02.06.06", "Networks"),
    item("G02.06.07", "Docker Compose"),
    item("G02.06.08", "Container security"),
    item("G02.06.09", "GPU containers"),

  ],

};
