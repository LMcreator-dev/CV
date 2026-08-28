import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G03.06
 * Eigenvalues y descomposiciones
 ********************************************************/

export const G0306: HorusTopic = {

  code: "G03.06",
  title: "Eigenvalues y descomposiciones",

  items: [
    item("G03.06.01", "Bases ortogonales"),
    item("G03.06.02", "Bases ortonormales"),
    item("G03.06.03", "Gram-Schmidt"),
    item("G03.06.04", "Proyección ortogonal"),
    item("G03.06.05", "QR decomposition"),
    item("G03.06.06", "Eigenvalues"),
    item("G03.06.07", "Eigenvectors"),
    item("G03.06.08", "Eigenbasis"),
    item("G03.06.09", "Diagonalización"),
    item("G03.06.10", "Matrices positivas definidas"),
    item("G03.06.11", "SVD"),
    item("G03.06.12", "Pseudoinversa"),

  ],

};
