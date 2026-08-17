import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G02.04
 * Networking
 ********************************************************/

export const G0204: HorusTopic = {

  code: "G02.04",

  title: "Networking",

  items: [

    item("G02.04.01", "OSI model"),
    item("G02.04.02", "TCP/IP"),
    item("G02.04.03", "IPv4"),
    item("G02.04.04", "IPv6"),
    item("G02.04.05", "DNS"),
    item("G02.04.06", "HTTP"),
    item("G02.04.07", "HTTPS"),
    item("G02.04.08", "TLS"),
    item("G02.04.09", "TCP"),
    item("G02.04.10", "UDP"),
    item("G02.04.11", "Sockets"),
    item("G02.04.12", "REST"),
    item("G02.04.13", "WebSockets"),
    item("G02.04.14", "Reverse proxy"),
    item("G02.04.15", "Load balancing"),

  ],

};
