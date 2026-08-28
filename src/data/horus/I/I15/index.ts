import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I15 · Distributed Training
 ********************************************************/

export const I15: HorusTopic = {

  code: "I15",
  title: "Distributed Training",

  items: [
    item("I15.01.01", "Data parallelism"),
    item("I15.01.02", "DistributedDataParallel"),
    item("I15.01.03", "Gradient synchronization"),
    item("I15.01.04", "All-reduce"),
    item("I15.01.05", "FSDP"),
    item("I15.01.06", "Checkpoint sharding"),
    item("I15.01.07", "Multi-GPU training"),

  ],

};
