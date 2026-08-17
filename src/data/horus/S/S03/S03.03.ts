import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S03.03 · Memory-efficient training
 ********************************************************/

export const S0303: HorusTopic = {

  code: "S03.03",
  title: "Memory-efficient training",

  items: [
    item("S03.03.01", "FSDP"),
    item("S03.03.02", "ZeRO"),
    item("S03.03.03", "Parameter sharding"),
    item("S03.03.04", "Optimizer sharding"),
    item("S03.03.05", "Gradient sharding"),
    item("S03.03.06", "Activation checkpointing"),
    item("S03.03.07", "Distributed checkpointing"),

  ],

};
