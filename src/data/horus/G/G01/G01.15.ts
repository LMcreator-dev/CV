import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * G01.15
 * I/O, datos y serialización
 *******************************************************/

export const G0115: HorusTopic = {

  code: "G01.15",

  title: "I/O, datos y serialización",

  items: [

    item(
      "G01.15.01",
      "stdin"
    ),

    item(
      "G01.15.02",
      "stdout"
    ),

    item(
      "G01.15.03",
      "stderr"
    ),

    item(
      "G01.15.04",
      "Apertura de archivos"
    ),

    item(
      "G01.15.05",
      "Lectura de archivos"
    ),

    item(
      "G01.15.06",
      "Escritura de archivos"
    ),

    item(
      "G01.15.07",
      "CSV"
    ),

    item(
      "G01.15.08",
      "JSON"
    ),

    item(
      "G01.15.09",
      "Pickle"
    ),

    item(
      "G01.15.10",
      "pathlib"
    ),

    item(
      "G01.15.11",
      "Serialización segura"
    ),

    item(
      "G01.15.12",
      "Streams"
    ),

  ],

};
