import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R03.01
 * Proceso de reproducción
 ********************************************************/

export const R0301: HorusTopic = {

  code: "R03.01",

  title: "Proceso de reproducción",

  items: [

    item("R03.01.01", "Selección de paper"),
    item("R03.01.02", "Identificación del código oficial"),
    item("R03.01.03", "Identificación del dataset"),
    item("R03.01.04", "Reproducción del preprocessing"),
    item("R03.01.05", "Reproducción de la arquitectura"),
    item("R03.01.06", "Reproducción del training"),
    item("R03.01.07", "Reproducción de métricas"),
    item("R03.01.08", "Comparación con paper"),
    item("R03.01.09", "Análisis de discrepancias"),

  ],

};
