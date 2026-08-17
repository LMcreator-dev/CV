import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * G01.04
 * Control de flujo
 *******************************************************/

export const G0104: HorusTopic = {

  code: "G01.04",

  title: "Control de flujo",

  items: [

    item(
      "G01.04.01",
      "if"
    ),

    item(
      "G01.04.02",
      "elif"
    ),

    item(
      "G01.04.03",
      "else"
    ),

    item(
      "G01.04.04",
      "Condiciones anidadas"
    ),

    item(
      "G01.04.05",
      "Operador ternario"
    ),

    item(
      "G01.04.06",
      "while"
    ),

    item(
      "G01.04.07",
      "for"
    ),

    item(
      "G01.04.08",
      "range()"
    ),

    item(
      "G01.04.09",
      "enumerate()"
    ),

    item(
      "G01.04.10",
      "zip()"
    ),

    item(
      "G01.04.11",
      "break"
    ),

    item(
      "G01.04.12",
      "continue"
    ),

    item(
      "G01.04.13",
      "pass"
    ),

    item(
      "G01.04.14",
      "else en loops"
    ),

    item(
      "G01.04.15",
      "match/case"
    ),

    item(
      "G01.04.16",
      "Pattern matching"
    ),

  ],

};
