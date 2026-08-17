import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M11.01
 * Signal processing
 ********************************************************/

export const M1101: HorusTopic = {

  code: "M11.01",

  title: "Signal processing",

  items: [

    item("M11.01.01", "Sampling rate"),
    item("M11.01.02", "Nyquist theorem"),
    item("M11.01.03", "Frequency"),
    item("M11.01.04", "Amplitude"),
    item("M11.01.05", "Fourier transform"),
    item("M11.01.06", "FFT"),
    item("M11.01.07", "Spectrogram"),
    item("M11.01.08", "Mel scale"),
    item("M11.01.09", "Mel spectrogram"),
    item("M11.01.10", "MFCC"),

  ],

};
