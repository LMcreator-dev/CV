import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G02.01
 * Sistemas operativos
 ********************************************************/

export const G0201: HorusTopic = {

  code: "G02.01",
  title: "Sistemas operativos",

  items: [
    item("G02.01.01", "Kernel"),
    item("G02.01.02", "User space"),
    item("G02.01.03", "Processes"),
    item("G02.01.04", "Threads"),
    item("G02.01.05", "Process scheduling"),
    item("G02.01.06", "Context switching"),
    item("G02.01.07", "Virtual memory"),
    item("G02.01.08", "Paging"),
    item("G02.01.09", "Filesystems"),
    item("G02.01.10", "Permissions"),
    item("G02.01.11", "System calls"),
    item("G02.01.12", "IPC"),
    item("G02.01.13", "Signals"),
    item("G02.01.14", "Environment variables"),

  ],

};
