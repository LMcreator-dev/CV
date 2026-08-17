import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S03.02
 * Parallelism
 ********************************************************/

export const S0302: HorusTopic = {

  code: "S03.02",

  title: "Parallelism",

  items: [

    item("S03.02.01", "Data parallelism"),
    item("S03.02.02", "DistributedDataParallel"),
    item("S03.02.03", "Gradient synchronization"),
    item("S03.02.04", "All-reduce"),
    item("S03.02.05", "Parameter synchronization"),
    item("S03.02.06", "Model parallelism"),
    item("S03.02.07", "Tensor parallelism"),
    item("S03.02.08", "Pipeline parallelism"),
    item("S03.02.09", "Sequence parallelism"),
    item("S03.02.10", "Expert parallelism"),

  ],

};
