import type { HorusRecord } from "./types";
import { progressRecord } from "./helpers";

type Level = HorusRecord["level"];
type RecordExtra = Omit<
  Parameters<typeof progressRecord>[0],
  "completed" | "level" | "date" | "hours"
>;

const done = (
  level: Level,
  date: string,
  hours = 0.5,
  extra: RecordExtra = {}
) =>
  progressRecord({
    completed: true,
    level,
    date,
    hours,
    ...extra,
  });

const pending = (
  level: Level = 0,
  extra: RecordExtra = {}
) =>
  progressRecord({
    completed: false,
    level,
    ...extra,
  });

const custom = progressRecord;

const evidenceUrl = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${baseUrl}${path.replace(/^\/+/, "")}`;
};

const datacampIntroPythonCertificate = {
  id: "datacamp-introduction-to-python-2026",
  type: "certification" as const,
  title: "DataCamp - Introduction to Python",
  url: evidenceUrl("horus/evidence/certifications/datacamp-introduction-to-python-2026.pdf"),
  description: "Curso de 4 horas completado el 26/08/2026.",
  date: "26/08/2026",
};

const santanderPythonCertificate = {
  id: "santander-open-academy-python-2026",
  type: "certification" as const,
  title: "Santander Open Academy - Python",
  url: evidenceUrl("horus/evidence/certifications/santander-open-academy-python-2026.pdf"),
  description: "Curso de 8 horas completado el 22/08/2026.",
  date: "22/08/2026",
};

const pythonCoreCertificates = [
  datacampIntroPythonCertificate,
  santanderPythonCertificate,
];

const datacampPythonEvidence = [
  datacampIntroPythonCertificate,
];

const santanderPythonEvidence = [
  santanderPythonCertificate,
];

/*
  Guia rapida para registrar progreso:

  - Pendiente sin datos:
    "G01.01.01": pending(),

  - Pendiente pero ya sabes tu nivel actual:
    "G01.01.01": pending(2),

  - Completado con nivel, fecha y horas por defecto 0.5 h:
    "G01.01.01": done(3, "17/08/2026"),

  - Completado con horas concretas:
    "G01.01.01": done(3, "17/08/2026", 1.5),

  - Si inicio y fin son el mismo dia, usa solo date como arriba.
    El helper convierte date en Inicio y Fin automaticamente.

  - Si inicio y fin son distintos:
    "G01.01.01": done(3, "17/08/2026", 2, {
      completedAt: "18/08/2026",
    }),

  - En progreso:
    "G01.01.01": custom({
      completed: false,
      level: 3,
      status: "in-progress",
      startedAt: "17/08/2026",
      hours: 1,
    }),

  - Con notas o evidencias:
    "G01.01.01": done(3, "17/08/2026", 1, {
      notes: "Resumen personal o criterio de dominio.",
      evidence: [
        {
          id: "g010101-notebook",
          type: "repository",
          title: "Notebook de practica",
          url: "https://...",
        },
      ],
    }),

  Niveles de maestria:
  0 = No conocido, 1 = Familiaridad, 2 = Comprension,
  3 = Implementacion, 4 = Dominio, 5 = Investigacion.
*/

export const HORUS_RECORDS: Record<string, Partial<HorusRecord>> = {


  // G - Grado

  // G01 - Programacion y Python

  // G01.01 - Sintaxis y modelo basico de Python
  "G01.01.01": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Sintaxis básica de Python - Reglas esenciales para escribir instrucciones validas en Python.
  "G01.01.02": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Estructura de un programa Python - Organizacion basica de archivos, instrucciones y flujo de ejecucion.
  "G01.01.03": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Indentación significativa - Uso de espacios para delimitar bloques de codigo.
  "G01.01.04": done(3, "17/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Comentarios - Anotaciones que explican el codigo sin ejecutarse.
  "G01.01.05": pending(2), // Docstrings - Texto documental dentro de funciones, clases o modulos.
  "G01.01.06": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Keywords y palabras reservadas - Palabras del lenguaje que no pueden usarse como nombres propios.
  "G01.01.07": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Identificadores - Nombres usados para variables, funciones, clases y otros elementos.
  "G01.01.08": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Literales - Valores escritos directamente en el codigo.
  "G01.01.09": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Expresiones - Fragmentos de codigo que producen un valor.
  "G01.01.10": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Statements - Instrucciones completas que ejecutan una accion.
  "G01.01.11": done(3, "17/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Diferencia entre expresión y statement - Separacion entre codigo que devuelve valor y codigo que ordena acciones.
  "G01.01.12": done(3, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Evaluación de expresiones - Proceso por el que Python calcula el resultado de una expresion.
  "G01.01.13": done(2, "17/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Precedencia de operadores - Orden en el que se aplican operadores dentro de una expresion.
  "G01.01.14": done(2, "17/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Asociatividad - Direccion en la que se agrupan operadores con misma prioridad.
  "G01.01.15": pending(), // Convenciones PEP 8 - Guia de estilo para escribir Python legible y consistente.

  // G01.02 - Variables, objetos y tipos
  "G01.02.01": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Variables - Nombres que referencian valores u objetos en memoria.
  "G01.02.02": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Asignación - Operacion para vincular un nombre con un valor.
  "G01.02.03": done(3, "18/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Reasignación - Cambio del valor referenciado por una variable existente.
  "G01.02.04": done(2, "23/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Referencias a objetos - Relacion entre nombres y objetos reales almacenados en memoria.
  "G01.02.05": pending(), // Namespaces - Espacios donde Python guarda y resuelve nombres.
  "G01.02.06": pending(), // Scope - Zona del codigo donde un nombre es accesible.
  "G01.02.07": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // type() - Funcion para consultar el tipo de un objeto.
  "G01.02.08": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // isinstance() - Funcion para comprobar si un objeto pertenece a un tipo.
  "G01.02.09": pending(), // id() - Funcion para obtener la identidad unica de un objeto en memoria.
  "G01.02.10": pending(), // Identidad de objetos - Comparacion de si dos nombres apuntan al mismo objeto.
  "G01.02.11": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // int - Tipo numerico para enteros.
  "G01.02.12": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // float - Tipo numerico para decimales de coma flotante.
  "G01.02.13": pending(), // complex - Tipo numerico para numeros complejos.
  "G01.02.14": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // bool - Tipo logico con valores verdadero o falso.
  "G01.02.15": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // str - Tipo de dato para texto.
  "G01.02.16": pending(), // bytes - Secuencias binarias usadas para datos en bajo nivel o E/S.
  "G01.02.17": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // None - Valor especial que representa ausencia de resultado o dato.
  "G01.02.18": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Tipado dinámico - Capacidad de cambiar tipos asociados a variables durante ejecucion.
  "G01.02.19": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Tipado fuerte - Regla que evita mezclar tipos incompatibles sin conversion explicita.
  "G01.02.20": done(2, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Mutabilidad - Capacidad de modificar un objeto despues de crearlo.
  "G01.02.21": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Inmutabilidad - Propiedad de objetos que no pueden cambiar tras crearse.
  "G01.02.22": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Truthiness - Evaluacion booleana implicita de valores no booleanos.
  "G01.02.23": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Conversión de tipos - Transformacion de un valor de un tipo a otro.
  "G01.02.24": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Casting - Conversion explicita entre tipos de datos.
  "G01.02.25": pending(), // repr() - Funcion para obtener una representacion tecnica de un objeto.
  "G01.02.26": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // str() - Funcion para convertir valores a texto legible.

  // G01.03 - Operadores
  "G01.03.01": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Suma - Operacion aritmetica para agregar valores.
  "G01.03.02": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Resta - Operacion aritmetica para sustraer valores.
  "G01.03.03": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Multiplicación - Operacion aritmetica para escalar o repetir valores.
  "G01.03.04": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // División - Operacion aritmetica para repartir valores con resultado decimal.
  "G01.03.05": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // División entera - Division que descarta la parte decimal del resultado.
  "G01.03.06": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Módulo - Operacion que devuelve el resto de una division.
  "G01.03.07": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Potenciación - Operacion para elevar un valor a una potencia.
  "G01.03.08": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Igualdad - Comparacion para comprobar si dos valores son equivalentes.
  "G01.03.09": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Desigualdad - Comparacion para comprobar si dos valores son distintos.
  "G01.03.10": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Menor que - Comparacion de orden entre valores.
  "G01.03.11": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Mayor que - Comparacion de orden entre valores.
  "G01.03.12": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Menor o igual - Comparacion de orden incluyendo igualdad.
  "G01.03.13": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Mayor o igual - Comparacion de orden incluyendo igualdad.
  "G01.03.14": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // and - Operador logico que exige que ambas condiciones sean verdaderas.
  "G01.03.15": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // or - Operador logico que acepta que alguna condicion sea verdadera.
  "G01.03.16": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // not - Operador logico que invierte una condicion.
  "G01.03.17": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Asignación - Operacion para vincular un nombre con un valor.
  "G01.03.18": done(3, "18/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Asignación aumentada - Forma abreviada de actualizar una variable con una operacion.
  "G01.03.19": pending(), // Operadores bit a bit - Operaciones que actuan sobre bits individuales.
  "G01.03.20": pending(), // AND bit a bit - Operacion binaria que mantiene bits activos en ambos operandos.
  "G01.03.21": pending(), // OR bit a bit - Operacion binaria que activa bits presentes en cualquier operando.
  "G01.03.22": pending(), // XOR bit a bit - Operacion binaria que activa bits diferentes entre operandos.
  "G01.03.23": pending(), // NOT bit a bit - Operacion binaria que invierte bits.
  "G01.03.24": pending(), // Desplazamiento izquierdo - Operacion que mueve bits hacia posiciones de mayor peso.
  "G01.03.25": pending(), // Desplazamiento derecho - Operacion que mueve bits hacia posiciones de menor peso.
  "G01.03.26": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // is - Operador para comprobar identidad entre objetos.
  "G01.03.27": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // is not - Operador para comprobar que dos referencias no son el mismo objeto.
  "G01.03.28": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // in - Operador para comprobar pertenencia dentro de una coleccion.
  "G01.03.29": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // not in - Operador para comprobar ausencia dentro de una coleccion.

  // G01.04 - Control de flujo
  "G01.04.01": done(3, "23/08/2026", 0.5, { certifications: santanderPythonEvidence }), // if - Fundamento y uso practico de if.
  "G01.04.02": done(3, "23/08/2026", 0.5, { certifications: santanderPythonEvidence }), // elif - Fundamento y uso practico de elif.
  "G01.04.03": done(3, "23/08/2026", 0.5, { certifications: santanderPythonEvidence }), // else - Fundamento y uso practico de else.
  "G01.04.04": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Condiciones anidadas - Fundamento y uso practico de Condiciones anidadas.
  "G01.04.05": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Operador ternario - Fundamento y uso practico de Operador ternario.
  "G01.04.06": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // while - Fundamento y uso practico de while.
  "G01.04.07": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // for - Fundamento y uso practico de for.
  "G01.04.08": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // range() - Fundamento y uso practico de range().
  "G01.04.09": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // enumerate() - Fundamento y uso practico de enumerate().
  "G01.04.10": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // zip() - Fundamento y uso practico de zip().
  "G01.04.11": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // break - Fundamento y uso practico de break.
  "G01.04.12": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // continue - Fundamento y uso practico de continue.
  "G01.04.13": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // pass - Fundamento y uso practico de pass.
  "G01.04.14": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // else en loops - Fundamento y uso practico de else en loops.
  "G01.04.15": pending(), // match/case - Fundamento y uso practico de match/case.
  "G01.04.16": pending(), // Pattern matching - Fundamento y uso practico de Pattern matching.

  // G01.05 - Strings y texto
  "G01.05.01": done(3, "19/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Creación de strings - Fundamento y uso practico de Creación de strings.
  "G01.05.02": done(3, "20/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Indexación de strings - Fundamento y uso practico de Indexación de strings.
  "G01.05.03": done(3, "20/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Slicing de strings - Fundamento y uso practico de Slicing de strings.
  "G01.05.04": done(3, "19/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Concatenación - Fundamento y uso practico de Concatenación.
  "G01.05.05": done(3, "19/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Métodos de strings - Fundamento y uso practico de Métodos de strings.
  "G01.05.06": pending(), // split() - Fundamento y uso practico de split().
  "G01.05.07": pending(), // join() - Fundamento y uso practico de join().
  "G01.05.08": pending(), // strip() - Fundamento y uso practico de strip().
  "G01.05.09": done(3, "19/08/2026", 0.5, { certifications: datacampPythonEvidence }), // replace() - Fundamento y uso practico de replace().
  "G01.05.10": pending(), // startswith() - Fundamento y uso practico de startswith().
  "G01.05.11": pending(), // endswith() - Fundamento y uso practico de endswith().
  "G01.05.12": pending(), // find() - Fundamento y uso practico de find().
  "G01.05.13": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // f-strings - Fundamento y uso practico de f-strings.
  "G01.05.14": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Formateo de texto - Fundamento y uso practico de Formateo de texto.
  "G01.05.15": pending(), // Unicode - Fundamento y uso practico de Unicode.
  "G01.05.16": pending(), // Encoding - Fundamento y uso practico de Encoding.
  "G01.05.17": pending(), // UTF-8 - Concepto tecnico de UTF-8 y su uso practico.

  // G01.06 - Estructuras de datos
  "G01.06.01": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // list - Coleccion ordenada y mutable de elementos.
  "G01.06.02": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // tuple - Coleccion ordenada e inmutable de elementos.
  "G01.06.03": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // set - Coleccion mutable de elementos unicos sin orden garantizado.
  "G01.06.04": pending(), // frozenset - Coleccion inmutable de elementos unicos.
  "G01.06.05": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // dict - Coleccion de pares clave-valor.
  "G01.06.06": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Indexación - Acceso a elementos mediante una posicion o clave.
  "G01.06.07": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Slicing - Extraccion de una parte de una secuencia.
  "G01.06.08": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Nested collections - Colecciones dentro de otras colecciones.
  "G01.06.09": done(3, "20/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Mutabilidad de listas - Modificacion directa de elementos en una lista.
  "G01.06.10": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Mutabilidad de diccionarios - Modificacion directa de claves y valores en un diccionario.
  "G01.06.11": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Hashability - Capacidad de un objeto para usarse como clave o miembro de set.
  "G01.06.12": done(3, "20/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Comprensiones de listas - Sintaxis compacta para crear listas a partir de iterables.
  "G01.06.13": pending(), // Comprensiones de diccionarios - Sintaxis compacta para crear diccionarios.
  "G01.06.14": pending(), // Comprensiones de sets - Sintaxis compacta para crear conjuntos.
  "G01.06.15": pending(), // Generadores por comprensión - Construccion perezosa de valores bajo demanda.
  "G01.06.16": done(2, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // sorted() - Funcion para ordenar iterables sin modificar el original.
  "G01.06.17": done(2, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // min() - Funcion para obtener el valor minimo.
  "G01.06.18": done(2, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // max() - Funcion para obtener el valor maximo.
  "G01.06.19": done(2, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // sum() - Funcion para sumar valores numericos.
  "G01.06.20": done(2, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // any() - Funcion que comprueba si algun elemento cumple una condicion.
  "G01.06.21": done(2, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // all() - Funcion que comprueba si todos los elementos cumplen una condicion.

  // G01.07 - Funciones
  "G01.07.01": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Definición de funciones - Creacion de bloques reutilizables de codigo.
  "G01.07.02": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Parámetros - Nombres que recibe una funcion en su definicion.
  "G01.07.03": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Argumentos - Valores reales enviados al llamar una funcion.
  "G01.07.04": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // return - Instruccion para devolver un resultado desde una funcion.
  "G01.07.05": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Valores por defecto - Parametros con valor predefinido si no se pasa argumento.
  "G01.07.06": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Argumentos posicionales - Argumentos asignados por orden de aparicion.
  "G01.07.07": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Keyword arguments - Argumentos asignados por nombre.
  "G01.07.08": pending(), // *args - Captura de argumentos posicionales variables.
  "G01.07.09": pending(), // **kwargs - Captura de argumentos nombrados variables.
  "G01.07.10": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Scope local - Ambito interno de una funcion o bloque.
  "G01.07.11": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Scope global - Ambito disponible a nivel de modulo.
  "G01.07.12": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Regla LEGB - Orden de busqueda de nombres: local, enclosing, global y builtins.
  "G01.07.13": pending(), // Funciones anidadas - Funciones definidas dentro de otras funciones.
  "G01.07.14": pending(), // Closures - Funciones que conservan variables de su ambito externo.
  "G01.07.15": pending(), // lambda - Funcion anonima breve para expresiones simples.
  "G01.07.16": pending(), // Recursión - Tecnica en la que una funcion se llama a si misma.
  "G01.07.17": pending(), // Funciones de orden superior - Funciones que reciben o devuelven otras funciones.
  "G01.07.18": pending(), // map() - Funcion para transformar elementos de un iterable.
  "G01.07.19": pending(), // filter() - Funcion para filtrar elementos de un iterable.
  "G01.07.20": pending(), // functools.reduce() - Funcion para acumular un iterable en un solo resultado.
  "G01.07.21": pending(), // Anotaciones de funciones - Metadatos de tipos en parametros y retornos.

  // G01.08 - Modulos, paquetes y entornos
  "G01.08.01": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // import - Instruccion para cargar modulos o paquetes.
  "G01.08.02": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // from import - Importacion selectiva de nombres desde un modulo.
  "G01.08.03": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // __name__ - Variable especial que identifica como se ejecuta un modulo.
  "G01.08.04": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // __main__ - Nombre asignado al modulo ejecutado como entrada principal.
  "G01.08.05": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Módulos - Archivos Python reutilizables con codigo y definiciones.
  "G01.08.06": done(3, "23/08/2026", 0.5, { certifications: pythonCoreCertificates }), // Paquetes - Conjuntos organizados de modulos Python.
  "G01.08.07": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // __init__.py - Archivo que inicializa o marca un paquete Python.
  "G01.08.08": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Imports absolutos - Importaciones usando la ruta completa del paquete.
  "G01.08.09": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Imports relativos - Importaciones basadas en la posicion del modulo actual.
  "G01.08.10": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // sys.path - Lista de rutas donde Python busca modulos.
  "G01.08.11": pending(), // venv - Entorno virtual aislado para dependencias de Python.
  "G01.08.12": pending(), // pip - Gestor de instalacion de paquetes Python.
  "G01.08.13": pending(), // requirements.txt - Archivo de dependencias fijadas para un proyecto.
  "G01.08.14": pending(), // pyproject.toml - Archivo moderno de configuracion y empaquetado Python.
  "G01.08.15": done(2, "23/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Dependencias - Librerias externas que necesita un proyecto.
  "G01.08.16": pending(), // Versionado de dependencias - Control de versiones instaladas para reproducibilidad.

  // G01.09 - Errores, excepciones y debugging
  "G01.09.01": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // SyntaxError - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G01.09.02": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // TypeError - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G01.09.03": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // ValueError - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G01.09.04": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // KeyError - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G01.09.05": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // IndexError - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G01.09.06": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // AttributeError - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G01.09.07": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // try - Fundamento y uso practico de try.
  "G01.09.08": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // except - Fundamento y uso practico de except.
  "G01.09.09": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // else en excepciones - Fundamento y uso practico de else en excepciones.
  "G01.09.10": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // finally - Fundamento y uso practico de finally.
  "G01.09.11": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // raise - Fundamento y uso practico de raise.
  "G01.09.12": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Excepciones personalizadas - Concepto clave: Excepciones personalizadas.
  "G01.09.13": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // traceback - Fundamento y uso practico de traceback.
  "G01.09.14": pending(), // pdb - Fundamento y uso practico de pdb.
  "G01.09.15": pending(), // Debugging con IDE - Fundamento y uso practico de Debugging con IDE.

  // G01.10 - Programacion orientada a objetos
  "G01.10.01": pending(), // Clase - Fundamento y uso practico de Clase.
  "G01.10.02": pending(), // Objeto - Fundamento y uso practico de Objeto.
  "G01.10.03": pending(), // Instancia - Fundamento y uso practico de Instancia.
  "G01.10.04": pending(), // Atributos - Fundamento y uso practico de Atributos.
  "G01.10.05": pending(), // Métodos - Fundamento y uso practico de Métodos.
  "G01.10.06": pending(), // __init__ - Fundamento y uso practico de __init__.
  "G01.10.07": pending(), // self - Fundamento y uso practico de self.
  "G01.10.08": pending(), // Class attributes - Fundamento y uso practico de Class attributes.
  "G01.10.09": pending(), // Instance attributes - Fundamento y uso practico de Instance attributes.
  "G01.10.10": pending(), // Encapsulación - Fundamento y uso practico de Encapsulación.
  "G01.10.11": pending(), // Herencia - Fundamento y uso practico de Herencia.
  "G01.10.12": pending(), // Polimorfismo - Fundamento y uso practico de Polimorfismo.
  "G01.10.13": pending(), // Composición - Fundamento y uso practico de Composición.
  "G01.10.14": pending(), // Method overriding - Fundamento y uso practico de Method overriding.
  "G01.10.15": pending(), // super() - Fundamento y uso practico de super().
  "G01.10.16": pending(), // Métodos estáticos - Fundamento y uso practico de Métodos estáticos.
  "G01.10.17": pending(), // classmethod - Fundamento y uso practico de classmethod.
  "G01.10.18": pending(), // Abstract Base Classes - Fundamento y uso practico de Abstract Base Classes.
  "G01.10.19": pending(), // dataclasses - Fundamento y uso practico de dataclasses.
  "G01.10.20": pending(), // Protocols - Fundamento y uso practico de Protocols.

  // G01.11 - Iteracion y generadores
  "G01.11.01": done(2, "20/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Iterable - Fundamento y uso practico de Iterable.
  "G01.11.02": done(2, "20/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Iterator - Fundamento y uso practico de Iterator.
  "G01.11.03": pending(), // __iter__ - Fundamento y uso practico de __iter__.
  "G01.11.04": pending(), // __next__ - Fundamento y uso practico de __next__.
  "G01.11.05": pending(), // Generadores - Fundamento y uso practico de Generadores.
  "G01.11.06": pending(), // yield - Fundamento y uso practico de yield.
  "G01.11.07": pending(), // yield from - Fundamento y uso practico de yield from.
  "G01.11.08": pending(), // Generator expressions - Fundamento y uso practico de Generator expressions.
  "G01.11.09": pending(), // Context managers - Fundamento y uso practico de Context managers.
  "G01.11.10": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // with - Fundamento y uso practico de with.
  "G01.11.11": pending(), // __enter__ - Fundamento y uso practico de __enter__.
  "G01.11.12": pending(), // __exit__ - Fundamento y uso practico de __exit__.

  // G01.12 - Decoradores y metaprogramacion
  "G01.12.01": pending(), // Decoradores de funciones - Fundamento y uso practico de Decoradores de funciones.
  "G01.12.02": pending(), // functools.wraps - Fundamento y uso practico de functools.wraps.
  "G01.12.03": pending(), // Decoradores con argumentos - Concepto clave: Decoradores con argumentos.
  "G01.12.04": pending(), // Decoradores de clases - Fundamento y uso practico de Decoradores de clases.
  "G01.12.05": pending(), // Introspección - Fundamento y uso practico de Introspección.
  "G01.12.06": pending(), // getattr() - Fundamento y uso practico de getattr().
  "G01.12.07": pending(), // setattr() - Fundamento y uso practico de setattr().
  "G01.12.08": pending(), // hasattr() - Fundamento y uso practico de hasattr().
  "G01.12.09": pending(), // callable() - Fundamento y uso practico de callable().
  "G01.12.10": pending(), // Reflection básica - Fundamento y uso practico de Reflection básica.

  // G01.13 - Type hints y typing
  "G01.13.01": pending(), // Anotaciones de tipos - Fundamento y uso practico de Anotaciones de tipos.
  "G01.13.02": pending(), // Union - Fundamento y uso practico de Union.
  "G01.13.03": pending(), // Optional - Fundamento y uso practico de Optional.
  "G01.13.04": pending(), // Any - Fundamento y uso practico de Any.
  "G01.13.05": pending(), // Generic types - Fundamento y uso practico de Generic types.
  "G01.13.06": pending(), // list[str] - Fundamento y uso practico de list[str].
  "G01.13.07": pending(), // dict[str, int] - Fundamento y uso practico de dict[str, int].
  "G01.13.08": pending(), // Callable - Fundamento y uso practico de Callable.
  "G01.13.09": pending(), // TypeVar - Fundamento y uso practico de TypeVar.
  "G01.13.10": pending(), // Protocol - Fundamento y uso practico de Protocol.
  "G01.13.11": pending(), // Literal - Fundamento y uso practico de Literal.
  "G01.13.12": pending(), // TypedDict - Fundamento y uso practico de TypedDict.
  "G01.13.13": pending(), // mypy - Fundamento y uso practico de mypy.
  "G01.13.14": pending(), // Static type checking - Fundamento y uso practico de Static type checking.

  // G01.14 - Testing
  "G01.14.01": pending(), // Unit testing - Comprobacion de comportamiento esperado mediante pruebas.
  "G01.14.02": pending(), // pytest - Comprobacion de comportamiento esperado mediante pruebas.
  "G01.14.03": pending(), // Fixtures - Fundamento y uso practico de Fixtures.
  "G01.14.04": pending(), // Parametrized tests - Comprobacion de comportamiento esperado mediante pruebas.
  "G01.14.05": pending(), // Assertions - Fundamento y uso practico de Assertions.
  "G01.14.06": pending(), // Mocking - Fundamento y uso practico de Mocking.
  "G01.14.07": pending(), // Integration testing - Comprobacion de comportamiento esperado mediante pruebas.
  "G01.14.08": pending(), // Test coverage - Recuperacion de informacion externa para mejorar respuestas generadas.
  "G01.14.09": pending(), // Regression tests - Tarea de predecir valores numericos continuos.
  "G01.14.10": pending(), // Property-based testing - Comprobacion de comportamiento esperado mediante pruebas.

  // G01.15 - I/O, datos y serializacion
  "G01.15.01": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // stdin - Fundamento y uso practico de stdin.
  "G01.15.02": done(3, "22/08/2026", 0.5, { certifications: pythonCoreCertificates }), // stdout - Fundamento y uso practico de stdout.
  "G01.15.03": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // stderr - Fundamento y uso practico de stderr.
  "G01.15.04": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Apertura de archivos - Fundamento y uso practico de Apertura de archivos.
  "G01.15.05": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Lectura de archivos - Fundamento y uso practico de Lectura de archivos.
  "G01.15.06": done(3, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // Escritura de archivos - Fundamento y uso practico de Escritura de archivos.
  "G01.15.07": pending(), // CSV - Concepto tecnico de CSV y su uso practico.
  "G01.15.08": pending(), // JSON - Formato ligero de intercambio de datos estructurados.
  "G01.15.09": pending(), // Pickle - Fundamento y uso practico de Pickle.
  "G01.15.10": done(2, "22/08/2026", 0.5, { certifications: santanderPythonEvidence }), // pathlib - Fundamento y uso practico de pathlib.
  "G01.15.11": pending(), // Serialización segura - Fundamento y uso practico de Serialización segura.
  "G01.15.12": pending(), // Streams - Fundamento y uso practico de Streams.

  // G01.16 - Concurrencia y asincronia
  "G01.16.01": pending(), // Procesos - Fundamento y uso practico de Procesos.
  "G01.16.02": pending(), // Threads - Fundamento y uso practico de Threads.
  "G01.16.03": pending(), // GIL - Concepto tecnico de GIL y su uso practico.
  "G01.16.04": pending(), // multiprocessing - Fundamento y uso practico de multiprocessing.
  "G01.16.05": pending(), // threading - Fundamento y uso practico de threading.
  "G01.16.06": pending(), // concurrent.futures - Fundamento y uso practico de concurrent.futures.
  "G01.16.07": pending(), // asyncio - Fundamento y uso practico de asyncio.
  "G01.16.08": pending(), // async - Fundamento y uso practico de async.
  "G01.16.09": pending(), // await - Fundamento y uso practico de await.
  "G01.16.10": pending(), // Event loops - Fundamento y uso practico de Event loops.
  "G01.16.11": pending(), // Race conditions - Fundamento y uso practico de Race conditions.
  "G01.16.12": pending(), // Locks - Fundamento y uso practico de Locks.
  "G01.16.13": pending(), // Queues - Fundamento y uso practico de Queues.
  "G01.16.14": pending(), // Producer-consumer - Fundamento y uso practico de Producer-consumer.

  // G01.17 - Performance e internals de Python
  "G01.17.01": pending(), // Complejidad temporal - Fundamento y uso practico de Complejidad temporal.
  "G01.17.02": pending(), // Complejidad espacial - Fundamento y uso practico de Complejidad espacial.
  "G01.17.03": pending(), // Profiling - Fundamento y uso practico de Profiling.
  "G01.17.04": pending(), // cProfile - Fundamento y uso practico de cProfile.
  "G01.17.05": pending(), // timeit - Fundamento y uso practico de timeit.
  "G01.17.06": pending(), // Memory profiling - Gestion o uso de informacion almacenada durante ejecucion.
  "G01.17.07": pending(), // Garbage collection - Fundamento y uso practico de Garbage collection.
  "G01.17.08": pending(), // Reference counting - Fundamento y uso practico de Reference counting.
  "G01.17.09": pending(), // Python bytecode - Fundamento y uso practico de Python bytecode.
  "G01.17.10": pending(), // Disassembler - Fundamento y uso practico de Disassembler.
  "G01.17.11": pending(), // C extensions - Fundamento y uso practico de C extensions.
  "G01.17.12": pending(), // Cython - Fundamento y uso practico de Cython.
  "G01.17.13": pending(), // Numba - Compilador JIT para acelerar codigo numerico en Python.

  // G01.18 - NumPy
  "G01.18.01": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // ndarray - Estructura central de NumPy para arrays multidimensionales.
  "G01.18.02": pending(), // Shape - Dimensiones y tamaño de cada eje de un array.
  "G01.18.03": pending(), // ndim - Numero de dimensiones de un array.
  "G01.18.04": pending(), // dtype - Tipo de dato almacenado por un array NumPy.
  "G01.18.05": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Indexing - Acceso a elementos concretos de arrays o secuencias.
  "G01.18.06": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Slicing - Extraccion de una parte de una secuencia.
  "G01.18.07": pending(), // Boolean indexing - Seleccion de datos mediante mascaras booleanas.
  "G01.18.08": pending(), // Fancy indexing - Seleccion avanzada usando listas o arrays de indices.
  "G01.18.09": pending(), // Reshape - Cambio de forma de un array sin alterar sus datos.
  "G01.18.10": pending(), // Transpose - Intercambio de ejes o filas y columnas.
  "G01.18.11": pending(), // Broadcasting - Reglas para operar arrays con formas compatibles.
  "G01.18.12": pending(), // Vectorización - Uso de operaciones por lotes sin bucles explicitos.
  "G01.18.13": pending(), // Matrix multiplication - Producto matricial entre arrays o matrices.
  "G01.18.14": pending(), // einsum - Notacion compacta para operaciones tensoriales avanzadas.
  "G01.18.15": pending(), // Random sampling - Generacion de muestras aleatorias.
  "G01.18.16": pending(), // Numerical precision - Exactitud limitada de calculos numericos en maquina.
  "G01.18.17": pending(), // Floating-point error - Errores derivados de representar decimales en binario.
  "G01.18.18": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Arrays 2D - Matrices de NumPy con filas y columnas.
  "G01.18.19": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Subconjuntos de arrays 2D - Seleccion de filas, columnas o regiones dentro de arrays bidimensionales.
  "G01.18.20": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Aritmética con arrays 2D - Operaciones numericas aplicadas a matrices NumPy.
  "G01.18.21": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Estadística básica con NumPy - Calculos descriptivos simples sobre arrays numericos.
  "G01.18.22": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Media y mediana - Medidas de tendencia central para comparar datos numericos.
  "G01.18.23": done(3, "26/08/2026", 0.5, { certifications: datacampPythonEvidence }), // Exploración de datos con NumPy - Inspeccion y resumen inicial de datos usando arrays.

  // G01.19 - SciPy
  "G01.19.01": pending(), // SciPy ecosystem - Fundamento y uso practico de SciPy ecosystem.
  "G01.19.02": pending(), // scipy.linalg - Fundamento y uso practico de scipy.linalg.
  "G01.19.03": pending(), // scipy.optimize - Fundamento y uso practico de scipy.optimize.
  "G01.19.04": pending(), // scipy.stats - Fundamento y uso practico de scipy.stats.
  "G01.19.05": pending(), // scipy.signal - Fundamento y uso practico de scipy.signal.
  "G01.19.06": pending(), // scipy.sparse - Fundamento y uso practico de scipy.sparse.
  "G01.19.07": pending(), // Scientific computing - Fundamento y uso practico de Scientific computing.

  // G01.20 - Pandas
  "G01.20.01": pending(), // Series - Fundamento y uso practico de Series.
  "G01.20.02": pending(), // DataFrame - Fundamento y uso practico de DataFrame.
  "G01.20.03": pending(), // Index - Fundamento y uso practico de Index.
  "G01.20.04": pending(), // loc - Fundamento y uso practico de loc.
  "G01.20.05": pending(), // iloc - Fundamento y uso practico de iloc.
  "G01.20.06": pending(), // Filtering - Fundamento y uso practico de Filtering.
  "G01.20.07": pending(), // Grouping - Fundamento y uso practico de Grouping.
  "G01.20.08": pending(), // Aggregation - Fundamento y uso practico de Aggregation.
  "G01.20.09": pending(), // Merge - Fundamento y uso practico de Merge.
  "G01.20.10": pending(), // Join - Fundamento y uso practico de Join.
  "G01.20.11": pending(), // Concatenation - Fundamento y uso practico de Concatenation.
  "G01.20.12": pending(), // Missing values - Fundamento y uso practico de Missing values.
  "G01.20.13": pending(), // Type conversion - Fundamento y uso practico de Type conversion.
  "G01.20.14": pending(), // Time series - Fundamento y uso practico de Time series.

  // G01.21 - Visualizacion
  "G01.21.01": pending(), // Matplotlib - Fundamento y uso practico de Matplotlib.
  "G01.21.02": pending(), // Figure - Fundamento y uso practico de Figure.
  "G01.21.03": pending(), // Axes - Fundamento y uso practico de Axes.
  "G01.21.04": pending(), // Line plot - Fundamento y uso practico de Line plot.
  "G01.21.05": pending(), // Scatter plot - Fundamento y uso practico de Scatter plot.
  "G01.21.06": pending(), // Histogram - Fundamento y uso practico de Histogram.
  "G01.21.07": pending(), // Heatmap - Fundamento y uso practico de Heatmap.
  "G01.21.08": pending(), // Subplots - Fundamento y uso practico de Subplots.
  "G01.21.09": pending(), // Visualization of distributions - Forma en la que se reparten valores o probabilidades.
  "G01.21.10": pending(), // Visualization of model metrics - Indicador cuantitativo para comparar resultados.

  // G02 - Computer Science, Sistemas y Herramientas

  // G02.01 - Sistemas operativos
  "G02.01.01": pending(), // Kernel - Fundamento y uso practico de Kernel.
  "G02.01.02": pending(), // User space - Fundamento y uso practico de User space.
  "G02.01.03": pending(), // Processes - Fundamento y uso practico de Processes.
  "G02.01.04": pending(), // Threads - Fundamento y uso practico de Threads.
  "G02.01.05": pending(), // Process scheduling - Fundamento y uso practico de Process scheduling.
  "G02.01.06": pending(), // Context switching - Fundamento y uso practico de Context switching.
  "G02.01.07": pending(), // Virtual memory - Gestion o uso de informacion almacenada durante ejecucion.
  "G02.01.08": pending(), // Paging - Fundamento y uso practico de Paging.
  "G02.01.09": pending(), // Filesystems - Fundamento y uso practico de Filesystems.
  "G02.01.10": pending(), // Permissions - Fundamento y uso practico de Permissions.
  "G02.01.11": pending(), // System calls - Fundamento y uso practico de System calls.
  "G02.01.12": pending(), // IPC - Concepto tecnico de IPC y su uso practico.
  "G02.01.13": pending(), // Signals - Fundamento y uso practico de Signals.
  "G02.01.14": pending(), // Environment variables - Fundamento y uso practico de Environment variables.

  // G02.02 - Linux
  "G02.02.01": pending(), // Shell - Interfaz de comandos para automatizar tareas del sistema.
  "G02.02.02": pending(), // Bash - Interfaz de comandos para automatizar tareas del sistema.
  "G02.02.03": pending(), // Processes - Fundamento y uso practico de Processes.
  "G02.02.04": pending(), // ps - Fundamento y uso practico de ps.
  "G02.02.05": pending(), // top - Fundamento y uso practico de top.
  "G02.02.06": pending(), // htop - Fundamento y uso practico de htop.
  "G02.02.07": pending(), // grep - Fundamento y uso practico de grep.
  "G02.02.08": pending(), // sed - Fundamento y uso practico de sed.
  "G02.02.09": pending(), // awk - Fundamento y uso practico de awk.
  "G02.02.10": pending(), // find - Fundamento y uso practico de find.
  "G02.02.11": pending(), // xargs - Fundamento y uso practico de xargs.
  "G02.02.12": pending(), // Pipes - Fundamento y uso practico de Pipes.
  "G02.02.13": pending(), // Redirections - Fundamento y uso practico de Redirections.
  "G02.02.14": pending(), // Permissions - Fundamento y uso practico de Permissions.
  "G02.02.15": pending(), // systemd - Fundamento y uso practico de systemd.
  "G02.02.16": pending(), // Logs - Registro de eventos para diagnostico y auditoria.
  "G02.02.17": pending(), // SSH - Concepto tecnico de SSH y su uso practico.
  "G02.02.18": pending(), // Package managers - Fundamento y uso practico de Package managers.
  "G02.02.19": pending(), // Environment management - Fundamento y uso practico de Environment management.

  // G02.03 - Git
  "G02.03.01": pending(), // Repository - Fundamento y uso practico de Repository.
  "G02.03.02": pending(), // Working tree - Fundamento y uso practico de Working tree.
  "G02.03.03": pending(), // Staging area - Fundamento y uso practico de Staging area.
  "G02.03.04": done(5, "23/08/2026", 10), // Commit - Fundamento y uso practico de Commit.
  "G02.03.05": pending(), // Branch - Fundamento y uso practico de Branch.
  "G02.03.06": pending(), // Merge - Fundamento y uso practico de Merge.
  "G02.03.07": pending(), // Rebase - Fundamento y uso practico de Rebase.
  "G02.03.08": pending(), // Conflict resolution - Fundamento y uso practico de Conflict resolution.
  "G02.03.09": pending(), // Remote - Fundamento y uso practico de Remote.
  "G02.03.10": done(5, "23/08/2026", 10), // Pull - Fundamento y uso practico de Pull.
  "G02.03.11": done(5, "23/08/2026", 10), // Push - Fundamento y uso practico de Push.
  "G02.03.12": pending(), // Tags - Fundamento y uso practico de Tags.
  "G02.03.13": pending(), // Releases - Fundamento y uso practico de Releases.
  "G02.03.14": pending(), // GitHub workflows - Control de versiones para gestionar cambios de codigo.
  "G02.03.15": pending(), // .gitignore - Control de versiones para gestionar cambios de codigo.

  // G02.04 - Networking
  "G02.04.01": pending(), // OSI model - Fundamento y uso practico de OSI model.
  "G02.04.02": pending(), // TCP/IP - Fundamento y uso practico de TCP/IP.
  "G02.04.03": pending(), // IPv4 - Fundamento y uso practico de IPv4.
  "G02.04.04": pending(), // IPv6 - Fundamento y uso practico de IPv6.
  "G02.04.05": pending(), // DNS - Concepto tecnico de DNS y su uso practico.
  "G02.04.06": pending(), // HTTP - Protocolo de comunicacion entre clientes y servidores web.
  "G02.04.07": pending(), // HTTPS - Protocolo de comunicacion entre clientes y servidores web.
  "G02.04.08": pending(), // TLS - Concepto tecnico de TLS y su uso practico.
  "G02.04.09": pending(), // TCP - Concepto tecnico de TCP y su uso practico.
  "G02.04.10": pending(), // UDP - Concepto tecnico de UDP y su uso practico.
  "G02.04.11": pending(), // Sockets - Fundamento y uso practico de Sockets.
  "G02.04.12": pending(), // REST - Concepto tecnico de REST y su uso practico.
  "G02.04.13": pending(), // WebSockets - Fundamento y uso practico de WebSockets.
  "G02.04.14": pending(), // Reverse proxy - Fundamento y uso practico de Reverse proxy.
  "G02.04.15": pending(), // Load balancing - Fundamento y uso practico de Load balancing.

  // G02.05 - Bases de datos
  "G02.05.01": pending(), // Relational model - Fundamento y uso practico de Relational model.
  "G02.05.02": pending(), // Tables - Fundamento y uso practico de Tables.
  "G02.05.03": pending(), // Primary keys - Fundamento y uso practico de Primary keys.
  "G02.05.04": pending(), // Foreign keys - Fundamento y uso practico de Foreign keys.
  "G02.05.05": pending(), // Indexes - Fundamento y uso practico de Indexes.
  "G02.05.06": pending(), // SQL SELECT - Lenguaje para consultar y manipular datos relacionales.
  "G02.05.07": pending(), // JOIN - Concepto tecnico de JOIN y su uso practico.
  "G02.05.08": pending(), // GROUP BY - Fundamento y uso practico de GROUP BY.
  "G02.05.09": pending(), // Aggregations - Fundamento y uso practico de Aggregations.
  "G02.05.10": pending(), // Transactions - Fundamento y uso practico de Transactions.
  "G02.05.11": pending(), // ACID - Concepto tecnico de ACID y su uso practico.
  "G02.05.12": pending(), // Normalization - Fundamento y uso practico de Normalization.
  "G02.05.13": pending(), // PostgreSQL - Lenguaje para consultar y manipular datos relacionales.
  "G02.05.14": pending(), // Redis - Fundamento y uso practico de Redis.
  "G02.05.15": pending(), // Document databases - Sistema para almacenar, consultar y organizar informacion.
  "G02.05.16": pending(), // Vector databases - Representacion numerica usada para calculo, busqueda o modelado.
  "G02.05.17": pending(), // ANN indexes - Fundamento y uso practico de ANN indexes.

  // G02.06 - Docker y contenedores
  "G02.06.01": pending(), // Containers - Fundamento y uso practico de Containers.
  "G02.06.02": pending(), // Images - Fundamento y uso practico de Images.
  "G02.06.03": pending(), // Dockerfile - Contenerizacion para ejecutar aplicaciones de forma reproducible.
  "G02.06.04": pending(), // Layers - Fundamento y uso practico de Layers.
  "G02.06.05": pending(), // Volumes - Fundamento y uso practico de Volumes.
  "G02.06.06": pending(), // Networks - Fundamento y uso practico de Networks.
  "G02.06.07": pending(), // Docker Compose - Contenerizacion para ejecutar aplicaciones de forma reproducible.
  "G02.06.08": pending(), // Container security - Practicas para proteger sistemas, datos y accesos.
  "G02.06.09": pending(), // GPU containers - Fundamento y uso practico de GPU containers.

  // G03 - Algebra Lineal

  // G03.01 - Vectores
  "G03.01.01": pending(), // Escalares - Fundamento y uso practico de Escalares.
  "G03.01.02": pending(), // Vectores - Representacion numerica usada para calculo, busqueda o modelado.
  "G03.01.03": pending(), // Componentes - Fundamento y uso practico de Componentes.
  "G03.01.04": pending(), // Vector fila - Representacion numerica usada para calculo, busqueda o modelado.
  "G03.01.05": pending(), // Vector columna - Representacion numerica usada para calculo, busqueda o modelado.
  "G03.01.06": pending(), // Magnitud - Fundamento y uso practico de Magnitud.
  "G03.01.07": pending(), // Norma L1 - Fundamento y uso practico de Norma L1.
  "G03.01.08": pending(), // Norma L2 - Fundamento y uso practico de Norma L2.
  "G03.01.09": pending(), // Distancia Euclídea - Fundamento y uso practico de Distancia Euclídea.
  "G03.01.10": pending(), // Producto escalar - Fundamento y uso practico de Producto escalar.
  "G03.01.11": pending(), // Ángulo entre vectores - Representacion numerica usada para calculo, busqueda o modelado.
  "G03.01.12": pending(), // Ortogonalidad - Fundamento y uso practico de Ortogonalidad.
  "G03.01.13": pending(), // Proyección - Fundamento y uso practico de Proyección.

  // G03.02 - Matrices
  "G03.02.01": pending(), // Matrices - Fundamento y uso practico de Matrices.
  "G03.02.02": pending(), // Dimensión - Fundamento y uso practico de Dimensión.
  "G03.02.03": pending(), // Filas - Fundamento y uso practico de Filas.
  "G03.02.04": pending(), // Columnas - Fundamento y uso practico de Columnas.
  "G03.02.05": pending(), // Matriz cuadrada - Estructura bidimensional usada en algebra y computacion numerica.
  "G03.02.06": pending(), // Matriz diagonal - Estructura bidimensional usada en algebra y computacion numerica.
  "G03.02.07": pending(), // Matriz triangular - Estructura bidimensional usada en algebra y computacion numerica.
  "G03.02.08": pending(), // Matriz identidad - Estructura bidimensional usada en algebra y computacion numerica.
  "G03.02.09": pending(), // Matriz cero - Estructura bidimensional usada en algebra y computacion numerica.
  "G03.02.10": pending(), // Matriz simétrica - Indicador cuantitativo para comparar resultados.
  "G03.02.11": pending(), // Suma de matrices - Fundamento y uso practico de Suma de matrices.
  "G03.02.12": pending(), // Multiplicación por escalar - Concepto clave: Multiplicación por escalar.
  "G03.02.13": pending(), // Producto matricial - Fundamento y uso practico de Producto matricial.
  "G03.02.14": pending(), // Transpuesta - Fundamento y uso practico de Transpuesta.
  "G03.02.15": pending(), // Inversa - Fundamento y uso practico de Inversa.
  "G03.02.16": pending(), // Determinante - Fundamento y uso practico de Determinante.
  "G03.02.17": pending(), // Rango - Fundamento y uso practico de Rango.

  // G03.03 - Sistemas lineales
  "G03.03.01": pending(), // Sistemas de ecuaciones - Fundamento y uso practico de Sistemas de ecuaciones.
  "G03.03.02": pending(), // Representación matricial - Fundamento y uso practico de Representación matricial.
  "G03.03.03": pending(), // Eliminación de Gauss - Fundamento y uso practico de Eliminación de Gauss.
  "G03.03.04": pending(), // Eliminación de Gauss-Jordan - Concepto clave: Eliminación de Gauss-Jordan.
  "G03.03.05": pending(), // Forma escalonada - Fundamento y uso practico de Forma escalonada.
  "G03.03.06": pending(), // Solución única - Fundamento y uso practico de Solución única.
  "G03.03.07": pending(), // Infinitas soluciones - Fundamento y uso practico de Infinitas soluciones.
  "G03.03.08": pending(), // Sistema incompatible - Fundamento y uso practico de Sistema incompatible.
  "G03.03.09": pending(), // Interpretación geométrica - Indicador cuantitativo para comparar resultados.

  // G03.04 - Espacios vectoriales
  "G03.04.01": pending(), // Espacio vectorial - Representacion numerica usada para calculo, busqueda o modelado.
  "G03.04.02": pending(), // Subespacio - Fundamento y uso practico de Subespacio.
  "G03.04.03": pending(), // Combinación lineal - Fundamento y uso practico de Combinación lineal.
  "G03.04.04": pending(), // Span - Fundamento y uso practico de Span.
  "G03.04.05": pending(), // Independencia lineal - Fundamento y uso practico de Independencia lineal.
  "G03.04.06": pending(), // Base - Fundamento y uso practico de Base.
  "G03.04.07": pending(), // Dimensión - Fundamento y uso practico de Dimensión.
  "G03.04.08": pending(), // Coordenadas - Fundamento y uso practico de Coordenadas.
  "G03.04.09": pending(), // Cambio de base - Fundamento y uso practico de Cambio de base.

  // G03.05 - Transformaciones lineales
  "G03.05.01": pending(), // Transformación lineal - Fundamento y uso practico de Transformación lineal.
  "G03.05.02": pending(), // Kernel - Fundamento y uso practico de Kernel.
  "G03.05.03": pending(), // Imagen - Fundamento y uso practico de Imagen.
  "G03.05.04": pending(), // Matriz de transformación - Estructura bidimensional usada en algebra y computacion numerica.
  "G03.05.05": pending(), // Composición de transformaciones - Concepto clave: Composición de transformaciones.
  "G03.05.06": pending(), // Cambio de coordenadas - Fundamento y uso practico de Cambio de coordenadas.

  // G03.06 - Eigenvalues y descomposiciones
  "G03.06.01": pending(), // Bases ortogonales - Fundamento y uso practico de Bases ortogonales.
  "G03.06.02": pending(), // Bases ortonormales - Fundamento y uso practico de Bases ortonormales.
  "G03.06.03": pending(), // Gram-Schmidt - Fundamento y uso practico de Gram-Schmidt.
  "G03.06.04": pending(), // Proyección ortogonal - Fundamento y uso practico de Proyección ortogonal.
  "G03.06.05": pending(), // QR decomposition - Fundamento y uso practico de QR decomposition.
  "G03.06.06": pending(), // Eigenvalues - Fundamento y uso practico de Eigenvalues.
  "G03.06.07": pending(), // Eigenvectors - Representacion numerica usada para calculo, busqueda o modelado.
  "G03.06.08": pending(), // Eigenbasis - Fundamento y uso practico de Eigenbasis.
  "G03.06.09": pending(), // Diagonalización - Fundamento y uso practico de Diagonalización.
  "G03.06.10": pending(), // Matrices positivas definidas - Concepto clave: Matrices positivas definidas.
  "G03.06.11": pending(), // SVD - Concepto tecnico de SVD y su uso practico.
  "G03.06.12": pending(), // Pseudoinversa - Fundamento y uso practico de Pseudoinversa.

  // G03.07 - Algebra multilineal
  "G03.07.01": pending(), // Tensors - Fundamento y uso practico de Tensors.
  "G03.07.02": pending(), // Orden de un tensor - Fundamento y uso practico de Orden de un tensor.
  "G03.07.03": pending(), // Contracción - Fundamento y uso practico de Contracción.
  "G03.07.04": pending(), // Einstein notation - Fundamento y uso practico de Einstein notation.
  "G03.07.05": pending(), // Einsum - Fundamento y uso practico de Einsum.
  "G03.07.06": pending(), // Outer product - Fundamento y uso practico de Outer product.
  "G03.07.07": pending(), // Kronecker product - Fundamento y uso practico de Kronecker product.

  // G04 - Calculo y Optimizacion

  // G04.01 - Calculo diferencial
  "G04.01.01": pending(), // Funciones - Fundamento y uso practico de Funciones.
  "G04.01.02": pending(), // Dominio - Fundamento y uso practico de Dominio.
  "G04.01.03": pending(), // Recorrido - Fundamento y uso practico de Recorrido.
  "G04.01.04": pending(), // Límites - Fundamento y uso practico de Límites.
  "G04.01.05": pending(), // Continuidad - Fundamento y uso practico de Continuidad.
  "G04.01.06": pending(), // Derivada - Fundamento y uso practico de Derivada.
  "G04.01.07": pending(), // Interpretación geométrica de la derivada - Indicador cuantitativo para comparar resultados.
  "G04.01.08": pending(), // Derivadas de funciones elementales - Concepto clave: Derivadas de funciones elementales.
  "G04.01.09": pending(), // Regla del producto - Fundamento y uso practico de Regla del producto.
  "G04.01.10": pending(), // Regla del cociente - Fundamento y uso practico de Regla del cociente.
  "G04.01.11": pending(), // Regla de la cadena - Fundamento y uso practico de Regla de la cadena.

  // G04.02 - Calculo multivariable
  "G04.02.01": pending(), // Derivadas parciales - Fundamento y uso practico de Derivadas parciales.
  "G04.02.02": pending(), // Gradiente - Direccion de cambio usada para optimizar parametros.
  "G04.02.03": pending(), // Derivadas direccionales - Fundamento y uso practico de Derivadas direccionales.
  "G04.02.04": pending(), // Jacobiano - Fundamento y uso practico de Jacobiano.
  "G04.02.05": pending(), // Hessiano - Fundamento y uso practico de Hessiano.
  "G04.02.06": pending(), // Derivadas vectoriales - Representacion numerica usada para calculo, busqueda o modelado.
  "G04.02.07": pending(), // Derivadas matriciales - Fundamento y uso practico de Derivadas matriciales.

  // G04.03 - Integracion
  "G04.03.01": pending(), // Integral definida - Fundamento y uso practico de Integral definida.
  "G04.03.02": pending(), // Integral indefinida - Fundamento y uso practico de Integral indefinida.
  "G04.03.03": pending(), // Integrales múltiples - Fundamento y uso practico de Integrales múltiples.
  "G04.03.04": pending(), // Sustitución - Fundamento y uso practico de Sustitución.
  "G04.03.05": pending(), // Serie de Taylor - Fundamento y uso practico de Serie de Taylor.
  "G04.03.06": pending(), // Aproximaciones locales - Fundamento y uso practico de Aproximaciones locales.

  // G04.04 - Optimizacion
  "G04.04.01": pending(), // Función objetivo - Bloque o relacion que transforma entradas en salidas.
  "G04.04.02": pending(), // Puntos críticos - Fundamento y uso practico de Puntos críticos.
  "G04.04.03": pending(), // Máximos y mínimos - Fundamento y uso practico de Máximos y mínimos.
  "G04.04.04": pending(), // Convexidad - Fundamento y uso practico de Convexidad.
  "G04.04.05": pending(), // Problemas convexos - Fundamento y uso practico de Problemas convexos.
  "G04.04.06": pending(), // Optimización con restricciones - Concepto clave: Optimización con restricciones.
  "G04.04.07": pending(), // Lagrange multipliers - Fundamento y uso practico de Lagrange multipliers.
  "G04.04.08": pending(), // Gradient descent - Direccion de cambio usada para optimizar parametros.
  "G04.04.09": pending(), // Step size - Fundamento y uso practico de Step size.
  "G04.04.10": pending(), // Learning rate - Fundamento y uso practico de Learning rate.

  // G04.05 - Metodos numericos
  "G04.05.01": pending(), // Error absoluto - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G04.05.02": pending(), // Error relativo - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G04.05.03": pending(), // Floating point - Fundamento y uso practico de Floating point.
  "G04.05.04": pending(), // Condition number - Fundamento y uso practico de Condition number.
  "G04.05.05": pending(), // Estabilidad numérica - Fundamento y uso practico de Estabilidad numérica.
  "G04.05.06": pending(), // Iterative methods - Fundamento y uso practico de Iterative methods.
  "G04.05.07": pending(), // Newton's method - Fundamento y uso practico de Newton's method.
  "G04.05.08": pending(), // Numerical differentiation - Concepto clave: Numerical differentiation.

  // G05 - Probabilidad y Estadistica

  // G05.01 - Probabilidad
  "G05.01.01": pending(), // Experimentos aleatorios - Fundamento y uso practico de Experimentos aleatorios.
  "G05.01.02": pending(), // Espacio muestral - Fundamento y uso practico de Espacio muestral.
  "G05.01.03": pending(), // Eventos - Fundamento y uso practico de Eventos.
  "G05.01.04": pending(), // Axiomas de probabilidad - Medida de incertidumbre asociada a eventos o predicciones.
  "G05.01.05": pending(), // Probabilidad condicional - Medida de incertidumbre asociada a eventos o predicciones.
  "G05.01.06": pending(), // Independencia - Fundamento y uso practico de Independencia.
  "G05.01.07": pending(), // Teorema de Bayes - Fundamento y uso practico de Teorema de Bayes.
  "G05.01.08": pending(), // Odds - Fundamento y uso practico de Odds.
  "G05.01.09": pending(), // Log-odds - Fundamento y uso practico de Log-odds.

  // G05.02 - Variables aleatorias
  "G05.02.01": pending(), // Variable aleatoria discreta - Concepto clave: Variable aleatoria discreta.
  "G05.02.02": pending(), // Variable aleatoria continua - Concepto clave: Variable aleatoria continua.
  "G05.02.03": pending(), // PMF - Concepto tecnico de PMF y su uso practico.
  "G05.02.04": pending(), // PDF - Concepto tecnico de PDF y su uso practico.
  "G05.02.05": pending(), // CDF - Concepto tecnico de CDF y su uso practico.
  "G05.02.06": pending(), // Esperanza - Fundamento y uso practico de Esperanza.
  "G05.02.07": pending(), // Varianza - Fundamento y uso practico de Varianza.
  "G05.02.08": pending(), // Desviación estándar - Fundamento y uso practico de Desviación estándar.
  "G05.02.09": pending(), // Covarianza - Fundamento y uso practico de Covarianza.
  "G05.02.10": pending(), // Correlación - Fundamento y uso practico de Correlación.

  // G05.03 - Distribuciones
  "G05.03.01": pending(), // Bernoulli - Fundamento y uso practico de Bernoulli.
  "G05.03.02": pending(), // Binomial - Fundamento y uso practico de Binomial.
  "G05.03.03": pending(), // Categórica - Fundamento y uso practico de Categórica.
  "G05.03.04": pending(), // Multinomial - Fundamento y uso practico de Multinomial.
  "G05.03.05": pending(), // Poisson - Fundamento y uso practico de Poisson.
  "G05.03.06": pending(), // Uniforme - Fundamento y uso practico de Uniforme.
  "G05.03.07": pending(), // Normal - Fundamento y uso practico de Normal.
  "G05.03.08": pending(), // Log-normal - Fundamento y uso practico de Log-normal.
  "G05.03.09": pending(), // Exponencial - Fundamento y uso practico de Exponencial.
  "G05.03.10": pending(), // Distribuciones conjuntas - Fundamento y uso practico de Distribuciones conjuntas.

  // G05.04 - Inferencia
  "G05.04.01": pending(), // Población - Fundamento y uso practico de Población.
  "G05.04.02": pending(), // Muestra - Fundamento y uso practico de Muestra.
  "G05.04.03": pending(), // Estimadores - Fundamento y uso practico de Estimadores.
  "G05.04.04": pending(), // Sesgo del estimador - Fundamento y uso practico de Sesgo del estimador.
  "G05.04.05": pending(), // Varianza del estimador - Fundamento y uso practico de Varianza del estimador.
  "G05.04.06": pending(), // Máxima verosimilitud - Fundamento y uso practico de Máxima verosimilitud.
  "G05.04.07": pending(), // MAP - Concepto tecnico de MAP y su uso practico.
  "G05.04.08": pending(), // Intervalos de confianza - Fundamento y uso practico de Intervalos de confianza.
  "G05.04.09": pending(), // Hipótesis nula - Fundamento y uso practico de Hipótesis nula.
  "G05.04.10": pending(), // Hipótesis alternativa - Fundamento y uso practico de Hipótesis alternativa.
  "G05.04.11": pending(), // p-value - Fundamento y uso practico de p-value.
  "G05.04.12": pending(), // Error tipo I - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G05.04.13": pending(), // Error tipo II - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G05.04.14": pending(), // Statistical power - Fundamento y uso practico de Statistical power.

  // G05.05 - Informacion
  "G05.05.01": pending(), // Entropía - Fundamento y uso practico de Entropía.
  "G05.05.02": pending(), // Entropía conjunta - Fundamento y uso practico de Entropía conjunta.
  "G05.05.03": pending(), // Entropía condicional - Fundamento y uso practico de Entropía condicional.
  "G05.05.04": pending(), // KL divergence - Fundamento y uso practico de KL divergence.
  "G05.05.05": pending(), // Jensen-Shannon divergence - Concepto clave: Jensen-Shannon divergence.
  "G05.05.06": pending(), // Mutual information - Fundamento y uso practico de Mutual information.
  "G05.05.07": pending(), // Cross entropy - Fundamento y uso practico de Cross entropy.
  "G05.05.08": pending(), // Perplexity - Fundamento y uso practico de Perplexity.

  // G05.06 - Estadistica aplicada a ML
  "G05.06.01": pending(), // Bias - Fundamento y uso practico de Bias.
  "G05.06.02": pending(), // Variance - Fundamento y uso practico de Variance.
  "G05.06.03": pending(), // Noise - Fundamento y uso practico de Noise.
  "G05.06.04": pending(), // Sampling bias - Seleccion o generacion de muestras desde una distribucion.
  "G05.06.05": pending(), // Data leakage - Fundamento y uso practico de Data leakage.
  "G05.06.06": pending(), // Distribution shift - Forma en la que se reparten valores o probabilidades.
  "G05.06.07": pending(), // Bootstrap - Fundamento y uso practico de Bootstrap.
  "G05.06.08": pending(), // Cross-validation - Validacion con particiones multiples para estimar generalizacion.
  "G05.06.09": pending(), // Statistical significance - Fundamento y uso practico de Statistical significance.
  "G05.06.10": pending(), // Confidence intervals - Fundamento y uso practico de Confidence intervals.

  // G06 - Algoritmos y Estructuras de Datos

  // G06.01 - Complejidad
  "G06.01.01": pending(), // Big O - Fundamento y uso practico de Big O.
  "G06.01.02": pending(), // Big Omega - Fundamento y uso practico de Big Omega.
  "G06.01.03": pending(), // Big Theta - Fundamento y uso practico de Big Theta.
  "G06.01.04": pending(), // Complejidad temporal - Fundamento y uso practico de Complejidad temporal.
  "G06.01.05": pending(), // Complejidad espacial - Fundamento y uso practico de Complejidad espacial.
  "G06.01.06": pending(), // Amortized analysis - Fundamento y uso practico de Amortized analysis.

  // G06.02 - Estructuras lineales
  "G06.02.01": pending(), // Arrays - Fundamento y uso practico de Arrays.
  "G06.02.02": pending(), // Dynamic arrays - Fundamento y uso practico de Dynamic arrays.
  "G06.02.03": pending(), // Linked lists - Fundamento y uso practico de Linked lists.
  "G06.02.04": pending(), // Doubly linked lists - Fundamento y uso practico de Doubly linked lists.
  "G06.02.05": pending(), // Stacks - Fundamento y uso practico de Stacks.
  "G06.02.06": pending(), // Queues - Fundamento y uso practico de Queues.
  "G06.02.07": pending(), // Deques - Fundamento y uso practico de Deques.
  "G06.02.08": pending(), // Hash tables - Fundamento y uso practico de Hash tables.
  "G06.02.09": pending(), // Collision handling - Fundamento y uso practico de Collision handling.

  // G06.03 - Trees
  "G06.03.01": pending(), // Binary trees - Fundamento y uso practico de Binary trees.
  "G06.03.02": pending(), // Binary search trees - Fundamento y uso practico de Binary search trees.
  "G06.03.03": pending(), // Tree traversal - Fundamento y uso practico de Tree traversal.
  "G06.03.04": pending(), // AVL trees - Fundamento y uso practico de AVL trees.
  "G06.03.05": pending(), // Red-black trees - Fundamento y uso practico de Red-black trees.
  "G06.03.06": pending(), // Heaps - Fundamento y uso practico de Heaps.
  "G06.03.07": pending(), // Priority queues - Fundamento y uso practico de Priority queues.
  "G06.03.08": pending(), // Tries - Fundamento y uso practico de Tries.

  // G06.04 - Graphs
  "G06.04.01": pending(), // Graph representation - Fundamento y uso practico de Graph representation.
  "G06.04.02": pending(), // Adjacency matrix - Estructura bidimensional usada en algebra y computacion numerica.
  "G06.04.03": pending(), // Adjacency list - Fundamento y uso practico de Adjacency list.
  "G06.04.04": pending(), // BFS - Concepto tecnico de BFS y su uso practico.
  "G06.04.05": pending(), // DFS - Concepto tecnico de DFS y su uso practico.
  "G06.04.06": pending(), // Topological sorting - Fundamento y uso practico de Topological sorting.
  "G06.04.07": pending(), // Connected components - Fundamento y uso practico de Connected components.
  "G06.04.08": pending(), // Dijkstra - Fundamento y uso practico de Dijkstra.
  "G06.04.09": pending(), // Bellman-Ford - Fundamento y uso practico de Bellman-Ford.
  "G06.04.10": pending(), // A* - Fundamento y uso practico de A*.
  "G06.04.11": pending(), // Minimum spanning tree - Fundamento y uso practico de Minimum spanning tree.

  // G06.05 - Algoritmos
  "G06.05.01": pending(), // Linear search - Fundamento y uso practico de Linear search.
  "G06.05.02": pending(), // Binary search - Fundamento y uso practico de Binary search.
  "G06.05.03": pending(), // Bubble sort - Fundamento y uso practico de Bubble sort.
  "G06.05.04": pending(), // Insertion sort - Fundamento y uso practico de Insertion sort.
  "G06.05.05": pending(), // Selection sort - Fundamento y uso practico de Selection sort.
  "G06.05.06": pending(), // Merge sort - Fundamento y uso practico de Merge sort.
  "G06.05.07": pending(), // Quick sort - Fundamento y uso practico de Quick sort.
  "G06.05.08": pending(), // Heap sort - Fundamento y uso practico de Heap sort.
  "G06.05.09": pending(), // Recursión - Tecnica en la que una funcion se llama a si misma.
  "G06.05.10": pending(), // Divide and conquer - Fundamento y uso practico de Divide and conquer.
  "G06.05.11": pending(), // Greedy algorithms - Procedimiento definido para resolver un problema.
  "G06.05.12": pending(), // Dynamic programming - Fundamento y uso practico de Dynamic programming.

  // G07 - Machine Learning

  // G07.01 - Fundamentos
  "G07.01.01": pending(), // Supervised learning - Fundamento y uso practico de Supervised learning.
  "G07.01.02": pending(), // Unsupervised learning - Fundamento y uso practico de Unsupervised learning.
  "G07.01.03": pending(), // Semi-supervised learning - Fundamento y uso practico de Semi-supervised learning.
  "G07.01.04": pending(), // Self-supervised learning - Fundamento y uso practico de Self-supervised learning.
  "G07.01.05": pending(), // Features - Fundamento y uso practico de Features.
  "G07.01.06": pending(), // Labels - Fundamento y uso practico de Labels.
  "G07.01.07": pending(), // Training set - Proceso de ajuste de un modelo con datos.
  "G07.01.08": pending(), // Validation set - Fundamento y uso practico de Validation set.
  "G07.01.09": pending(), // Test set - Comprobacion de comportamiento esperado mediante pruebas.
  "G07.01.10": pending(), // Loss function - Medida del error que guia el aprendizaje del modelo.
  "G07.01.11": pending(), // Objective function - Bloque o relacion que transforma entradas en salidas.
  "G07.01.12": pending(), // Generalization - Fundamento y uso practico de Generalization.

  // G07.02 - Regresion
  "G07.02.01": pending(), // Linear regression - Tarea de predecir valores numericos continuos.
  "G07.02.02": pending(), // Ordinary least squares - Fundamento y uso practico de Ordinary least squares.
  "G07.02.03": pending(), // Normal equation - Fundamento y uso practico de Normal equation.
  "G07.02.04": pending(), // Gradient descent regression - Direccion de cambio usada para optimizar parametros.
  "G07.02.05": pending(), // Polynomial regression - Tarea de predecir valores numericos continuos.
  "G07.02.06": pending(), // Ridge regression - Tarea de predecir valores numericos continuos.
  "G07.02.07": pending(), // Lasso regression - Tarea de predecir valores numericos continuos.
  "G07.02.08": pending(), // Elastic Net - Fundamento y uso practico de Elastic Net.

  // G07.03 - Clasificacion
  "G07.03.01": pending(), // Logistic regression - Tarea de predecir valores numericos continuos.
  "G07.03.02": pending(), // Binary classification - Tarea de asignar categorias a entradas.
  "G07.03.03": pending(), // Multiclass classification - Tarea de asignar categorias a entradas.
  "G07.03.04": pending(), // Multilabel classification - Tarea de asignar categorias a entradas.
  "G07.03.05": pending(), // Decision boundaries - Fundamento y uso practico de Decision boundaries.
  "G07.03.06": pending(), // Naive Bayes - Fundamento y uso practico de Naive Bayes.
  "G07.03.07": pending(), // k-NN - Fundamento y uso practico de k-NN.
  "G07.03.08": pending(), // SVM - Concepto tecnico de SVM y su uso practico.
  "G07.03.09": pending(), // Kernel trick - Fundamento y uso practico de Kernel trick.

  // G07.04 - Arboles y ensembles
  "G07.04.01": pending(), // Decision trees - Fundamento y uso practico de Decision trees.
  "G07.04.02": pending(), // Entropy split - Fundamento y uso practico de Entropy split.
  "G07.04.03": pending(), // Information gain - Fundamento y uso practico de Information gain.
  "G07.04.04": pending(), // Gini impurity - Fundamento y uso practico de Gini impurity.
  "G07.04.05": pending(), // Random forest - Fundamento y uso practico de Random forest.
  "G07.04.06": pending(), // Bagging - Fundamento y uso practico de Bagging.
  "G07.04.07": pending(), // Boosting - Fundamento y uso practico de Boosting.
  "G07.04.08": pending(), // AdaBoost - Fundamento y uso practico de AdaBoost.
  "G07.04.09": pending(), // Gradient boosting - Direccion de cambio usada para optimizar parametros.
  "G07.04.10": pending(), // XGBoost - Fundamento y uso practico de XGBoost.
  "G07.04.11": pending(), // LightGBM - Fundamento y uso practico de LightGBM.
  "G07.04.12": pending(), // CatBoost - Fundamento y uso practico de CatBoost.

  // G07.05 - Unsupervised learning
  "G07.05.01": pending(), // Clustering - Agrupacion automatica de datos por similitud.
  "G07.05.02": pending(), // k-means - Fundamento y uso practico de k-means.
  "G07.05.03": pending(), // Hierarchical clustering - Agrupacion automatica de datos por similitud.
  "G07.05.04": pending(), // DBSCAN - Concepto tecnico de DBSCAN y su uso practico.
  "G07.05.05": pending(), // Gaussian mixture models - Fundamento y uso practico de Gaussian mixture models.
  "G07.05.06": pending(), // Dimensionality reduction - Fundamento y uso practico de Dimensionality reduction.
  "G07.05.07": pending(), // PCA - Reduccion lineal de dimensionalidad conservando varianza.
  "G07.05.08": pending(), // Kernel PCA - PCA no lineal usando funciones kernel.
  "G07.05.09": pending(), // t-SNE - Reduccion de dimensionalidad para visualizar datos complejos.
  "G07.05.10": pending(), // UMAP - Reduccion de dimensionalidad que conserva estructura local y global.

  // G07.06 - Evaluacion
  "G07.06.01": pending(), // Overfitting - Problema donde el modelo memoriza y generaliza mal.
  "G07.06.02": pending(), // Underfitting - Problema donde el modelo no aprende suficiente patron.
  "G07.06.03": pending(), // Bias-variance tradeoff - Equilibrio entre error por sesgo y error por variabilidad.
  "G07.06.04": pending(), // Cross-validation - Validacion con particiones multiples para estimar generalizacion.
  "G07.06.05": pending(), // Stratified cross-validation - Validacion que conserva proporciones de clases en cada particion.
  "G07.06.06": pending(), // Accuracy - Proporcion de predicciones correctas sobre el total.
  "G07.06.07": pending(), // Precision - Proporcion de positivos predichos que realmente son positivos.
  "G07.06.08": pending(), // Recall - Proporcion de positivos reales que el modelo consigue detectar.
  "G07.06.09": pending(), // F1 - Media armonica entre precision y recall.
  "G07.06.10": pending(), // ROC - Curva que compara verdaderos positivos y falsos positivos.
  "G07.06.11": pending(), // AUC - Area bajo una curva de evaluacion.
  "G07.06.12": pending(), // PR-AUC - Area bajo la curva precision-recall.
  "G07.06.13": pending(), // Calibration - Ajuste entre probabilidades predichas y frecuencias reales.
  "G07.06.14": pending(), // Confusion matrix - Tabla que resume aciertos y errores por clase.
  "G07.06.15": pending(), // Regression metrics - Indicador cuantitativo para comparar resultados.

  // G07.07 - Teoria del aprendizaje
  "G07.07.01": pending(), // Empirical risk minimization - Concepto clave: Empirical risk minimization.
  "G07.07.02": pending(), // Generalization error - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G07.07.03": pending(), // VC dimension - Fundamento y uso practico de VC dimension.
  "G07.07.04": pending(), // PAC learning - Fundamento y uso practico de PAC learning.
  "G07.07.05": pending(), // Margin - Fundamento y uso practico de Margin.
  "G07.07.06": pending(), // Regularization - Tecnica para reducir sobreajuste y mejorar generalizacion.
  "G07.07.07": pending(), // Structural risk minimization - Concepto clave: Structural risk minimization.
  "G07.07.08": pending(), // Learning curves - Fundamento y uso practico de Learning curves.

  // G07.08 - Preparacion de datos
  "G07.08.01": pending(), // Missing data - Fundamento y uso practico de Missing data.
  "G07.08.02": pending(), // Outliers - Fundamento y uso practico de Outliers.
  "G07.08.03": pending(), // Feature scaling - Fundamento y uso practico de Feature scaling.
  "G07.08.04": pending(), // Standardization - Fundamento y uso practico de Standardization.
  "G07.08.05": pending(), // Normalization - Fundamento y uso practico de Normalization.
  "G07.08.06": pending(), // Encoding categorical variables - Concepto clave: Encoding categorical variables.
  "G07.08.07": pending(), // Feature selection - Fundamento y uso practico de Feature selection.
  "G07.08.08": pending(), // Feature engineering - Fundamento y uso practico de Feature engineering.
  "G07.08.09": pending(), // Data leakage - Fundamento y uso practico de Data leakage.
  "G07.08.10": pending(), // Class imbalance - Fundamento y uso practico de Class imbalance.
  "G07.08.11": pending(), // Resampling - Seleccion o generacion de muestras desde una distribucion.
  "G07.08.12": pending(), // SMOTE - Concepto tecnico de SMOTE y su uso practico.

  // G08 - Deep Learning Fundamentals

  // G08.01 - Redes neuronales
  "G08.01.01": pending(), // Perceptron - Fundamento y uso practico de Perceptron.
  "G08.01.02": pending(), // Artificial neuron - Fundamento y uso practico de Artificial neuron.
  "G08.01.03": pending(), // Weights - Fundamento y uso practico de Weights.
  "G08.01.04": pending(), // Bias - Fundamento y uso practico de Bias.
  "G08.01.05": pending(), // Linear layer - Fundamento y uso practico de Linear layer.
  "G08.01.06": pending(), // Activation function - Bloque o relacion que transforma entradas en salidas.
  "G08.01.07": pending(), // Sigmoid - Fundamento y uso practico de Sigmoid.
  "G08.01.08": pending(), // Tanh - Fundamento y uso practico de Tanh.
  "G08.01.09": pending(), // ReLU - Fundamento y uso practico de ReLU.
  "G08.01.10": pending(), // Leaky ReLU - Fundamento y uso practico de Leaky ReLU.
  "G08.01.11": pending(), // GELU - Concepto tecnico de GELU y su uso practico.
  "G08.01.12": pending(), // Softmax - Fundamento y uso practico de Softmax.

  // G08.02 - Forward y loss
  "G08.02.01": pending(), // Forward pass - Fundamento y uso practico de Forward pass.
  "G08.02.02": pending(), // Computational graph - Fundamento y uso practico de Computational graph.
  "G08.02.03": pending(), // Logits - Control de versiones para gestionar cambios de codigo.
  "G08.02.04": pending(), // Probability output - Medida de incertidumbre asociada a eventos o predicciones.
  "G08.02.05": pending(), // Mean squared error - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "G08.02.06": pending(), // Binary cross entropy - Fundamento y uso practico de Binary cross entropy.
  "G08.02.07": pending(), // Categorical cross entropy - Concepto clave: Categorical cross entropy.
  "G08.02.08": pending(), // Negative log likelihood - Fundamento y uso practico de Negative log likelihood.

  // G08.03 - Backpropagation
  "G08.03.01": pending(), // Chain rule - Fundamento y uso practico de Chain rule.
  "G08.03.02": pending(), // Local gradients - Direccion de cambio usada para optimizar parametros.
  "G08.03.03": pending(), // Gradient propagation - Direccion de cambio usada para optimizar parametros.
  "G08.03.04": pending(), // Backpropagation - Fundamento y uso practico de Backpropagation.
  "G08.03.05": pending(), // Gradient checking - Direccion de cambio usada para optimizar parametros.
  "G08.03.06": pending(), // Computational graph differentiation - Concepto clave: Computational graph differentiation.
  "G08.03.07": pending(), // Automatic differentiation - Concepto clave: Automatic differentiation.

  // G08.04 - Optimizacion
  "G08.04.01": pending(), // Gradient descent - Direccion de cambio usada para optimizar parametros.
  "G08.04.02": pending(), // Stochastic gradient descent - Direccion de cambio usada para optimizar parametros.
  "G08.04.03": pending(), // Mini-batch SGD - Fundamento y uso practico de Mini-batch SGD.
  "G08.04.04": pending(), // Momentum - Fundamento y uso practico de Momentum.
  "G08.04.05": pending(), // Nesterov momentum - Fundamento y uso practico de Nesterov momentum.
  "G08.04.06": pending(), // AdaGrad - Fundamento y uso practico de AdaGrad.
  "G08.04.07": pending(), // RMSProp - Fundamento y uso practico de RMSProp.
  "G08.04.08": pending(), // Adam - Fundamento y uso practico de Adam.
  "G08.04.09": pending(), // AdamW - Fundamento y uso practico de AdamW.
  "G08.04.10": pending(), // Learning-rate warmup - Fundamento y uso practico de Learning-rate warmup.
  "G08.04.11": pending(), // Learning-rate decay - Fundamento y uso practico de Learning-rate decay.
  "G08.04.12": pending(), // Cosine decay - Fundamento y uso practico de Cosine decay.
  "G08.04.13": pending(), // One-cycle schedule - Fundamento y uso practico de One-cycle schedule.

  // G08.05 - Inicializacion y estabilidad
  "G08.05.01": pending(), // Xavier initialization - Fundamento y uso practico de Xavier initialization.
  "G08.05.02": pending(), // He initialization - Fundamento y uso practico de He initialization.
  "G08.05.03": pending(), // Orthogonal initialization - Concepto clave: Orthogonal initialization.
  "G08.05.04": pending(), // Vanishing gradients - Direccion de cambio usada para optimizar parametros.
  "G08.05.05": pending(), // Exploding gradients - Direccion de cambio usada para optimizar parametros.
  "G08.05.06": pending(), // Gradient clipping - Direccion de cambio usada para optimizar parametros.
  "G08.05.07": pending(), // Activation statistics - Fundamento y uso practico de Activation statistics.
  "G08.05.08": pending(), // Numerical stability - Fundamento y uso practico de Numerical stability.

  // G08.06 - Regularizacion
  "G08.06.01": pending(), // L1 regularization - Tecnica para reducir sobreajuste y mejorar generalizacion.
  "G08.06.02": pending(), // L2 regularization - Tecnica para reducir sobreajuste y mejorar generalizacion.
  "G08.06.03": pending(), // Weight decay - Fundamento y uso practico de Weight decay.
  "G08.06.04": pending(), // Dropout - Fundamento y uso practico de Dropout.
  "G08.06.05": pending(), // Data augmentation - Fundamento y uso practico de Data augmentation.
  "G08.06.06": pending(), // Early stopping - Fundamento y uso practico de Early stopping.
  "G08.06.07": pending(), // Label smoothing - Fundamento y uso practico de Label smoothing.
  "G08.06.08": pending(), // Batch normalization - Fundamento y uso practico de Batch normalization.
  "G08.06.09": pending(), // Layer normalization - Fundamento y uso practico de Layer normalization.

  // G08.07 - Arquitecturas basicas
  "G08.07.01": pending(), // MLP - Concepto tecnico de MLP y su uso practico.
  "G08.07.02": pending(), // Residual network - Fundamento y uso practico de Residual network.
  "G08.07.03": pending(), // Skip connections - Fundamento y uso practico de Skip connections.
  "G08.07.04": pending(), // Representation learning - Fundamento y uso practico de Representation learning.
  "G08.07.05": pending(), // Embeddings - Representacion vectorial que captura significado o similitud.
  "G08.07.06": pending(), // Bottleneck architectures - Diseño estructural de componentes y sus relaciones.

  // G09 - PyTorch y Frameworks de Deep Learning

  // G09.01 - Tensors
  "G09.01.01": pending(), // Tensor creation - Fundamento y uso practico de Tensor creation.
  "G09.01.02": pending(), // Shape - Dimensiones y tamaño de cada eje de un array.
  "G09.01.03": pending(), // dtype - Tipo de dato almacenado por un array NumPy.
  "G09.01.04": pending(), // Device - Fundamento y uso practico de Device.
  "G09.01.05": pending(), // Indexing - Acceso a elementos concretos de arrays o secuencias.
  "G09.01.06": pending(), // Broadcasting - Reglas para operar arrays con formas compatibles.
  "G09.01.07": pending(), // Reshape - Cambio de forma de un array sin alterar sus datos.
  "G09.01.08": pending(), // View - Fundamento y uso practico de View.
  "G09.01.09": pending(), // Permute - Fundamento y uso practico de Permute.
  "G09.01.10": pending(), // Contiguous tensors - Fundamento y uso practico de Contiguous tensors.
  "G09.01.11": pending(), // Matrix multiplication - Producto matricial entre arrays o matrices.
  "G09.01.12": pending(), // einsum - Notacion compacta para operaciones tensoriales avanzadas.

  // G09.02 - Autograd y modelos
  "G09.02.01": pending(), // requires_grad - Fundamento y uso practico de requires_grad.
  "G09.02.02": pending(), // Computational graph - Fundamento y uso practico de Computational graph.
  "G09.02.03": pending(), // backward() - Fundamento y uso practico de backward().
  "G09.02.04": pending(), // Gradient accumulation - Direccion de cambio usada para optimizar parametros.
  "G09.02.05": pending(), // no_grad - Fundamento y uso practico de no_grad.
  "G09.02.06": pending(), // nn.Module - Fundamento y uso practico de nn.Module.
  "G09.02.07": pending(), // Parameters - Fundamento y uso practico de Parameters.
  "G09.02.08": pending(), // Buffers - Fundamento y uso practico de Buffers.
  "G09.02.09": pending(), // state_dict - Fundamento y uso practico de state_dict.

  // G09.03 - Training
  "G09.03.01": pending(), // Dataset - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "G09.03.02": pending(), // DataLoader - Fundamento y uso practico de DataLoader.
  "G09.03.03": pending(), // Batch - Fundamento y uso practico de Batch.
  "G09.03.04": pending(), // Optimizer - Algoritmo que ajusta parametros durante el entrenamiento.
  "G09.03.05": pending(), // Loss - Medida del error que guia el aprendizaje del modelo.
  "G09.03.06": pending(), // Training loop - Proceso de ajuste de un modelo con datos.
  "G09.03.07": pending(), // Validation loop - Fundamento y uso practico de Validation loop.
  "G09.03.08": pending(), // Evaluation mode - Medicion sistematica del rendimiento de un sistema.
  "G09.03.09": pending(), // Checkpoints - Fundamento y uso practico de Checkpoints.
  "G09.03.10": pending(), // Resume training - Proceso de ajuste de un modelo con datos.

  // G09.04 - GPU y precision
  "G09.04.01": pending(), // CUDA devices - Fundamento y uso practico de CUDA devices.
  "G09.04.02": pending(), // CPU tensors - Fundamento y uso practico de CPU tensors.
  "G09.04.03": pending(), // GPU tensors - Fundamento y uso practico de GPU tensors.
  "G09.04.04": pending(), // Device placement - Fundamento y uso practico de Device placement.
  "G09.04.05": pending(), // CUDA memory - Gestion o uso de informacion almacenada durante ejecucion.
  "G09.04.06": pending(), // Mixed precision - Fundamento y uso practico de Mixed precision.
  "G09.04.07": pending(), // AMP - Concepto tecnico de AMP y su uso practico.
  "G09.04.08": pending(), // FP32 - Concepto tecnico de FP32 y su uso practico.
  "G09.04.09": pending(), // FP16 - Concepto tecnico de FP16 y su uso practico.
  "G09.04.10": pending(), // BF16 - Concepto tecnico de BF16 y su uso practico.
  "G09.04.11": pending(), // Gradient scaling - Direccion de cambio usada para optimizar parametros.

  // G09.05 - Performance
  "G09.05.01": pending(), // Profiling - Fundamento y uso practico de Profiling.
  "G09.05.02": pending(), // PyTorch Profiler - Fundamento y uso practico de PyTorch Profiler.
  "G09.05.03": pending(), // Data bottlenecks - Fundamento y uso practico de Data bottlenecks.
  "G09.05.04": pending(), // GPU utilization - Fundamento y uso practico de GPU utilization.
  "G09.05.05": pending(), // CPU-GPU transfers - Fundamento y uso practico de CPU-GPU transfers.
  "G09.05.06": pending(), // Memory fragmentation - Recuperacion de informacion externa para mejorar respuestas generadas.
  "G09.05.07": pending(), // Gradient accumulation - Direccion de cambio usada para optimizar parametros.
  "G09.05.08": pending(), // Activation checkpointing - Fundamento y uso practico de Activation checkpointing.

  // M - Master

  // M01 - Computer Vision

  // M01.01 - Representacion de imagenes
  "M01.01.01": pending(), // Pixels - Fundamento y uso practico de Pixels.
  "M01.01.02": pending(), // Channels - Fundamento y uso practico de Channels.
  "M01.01.03": pending(), // RGB - Concepto tecnico de RGB y su uso practico.
  "M01.01.04": pending(), // Grayscale - Fundamento y uso practico de Grayscale.
  "M01.01.05": pending(), // Resolution - Fundamento y uso practico de Resolution.
  "M01.01.06": pending(), // Image tensors - Fundamento y uso practico de Image tensors.
  "M01.01.07": pending(), // Normalization - Fundamento y uso practico de Normalization.
  "M01.01.08": pending(), // Data augmentation - Fundamento y uso practico de Data augmentation.

  // M01.02 - Convoluciones
  "M01.02.01": pending(), // Convolution - Fundamento y uso practico de Convolution.
  "M01.02.02": pending(), // Kernel - Fundamento y uso practico de Kernel.
  "M01.02.03": pending(), // Filters - Fundamento y uso practico de Filters.
  "M01.02.04": pending(), // Stride - Fundamento y uso practico de Stride.
  "M01.02.05": pending(), // Padding - Fundamento y uso practico de Padding.
  "M01.02.06": pending(), // Receptive field - Fundamento y uso practico de Receptive field.
  "M01.02.07": pending(), // Pooling - Fundamento y uso practico de Pooling.
  "M01.02.08": pending(), // Max pooling - Fundamento y uso practico de Max pooling.
  "M01.02.09": pending(), // Average pooling - Recuperacion de informacion externa para mejorar respuestas generadas.
  "M01.02.10": pending(), // Channel dimension - Fundamento y uso practico de Channel dimension.
  "M01.02.11": pending(), // Feature maps - Fundamento y uso practico de Feature maps.

  // M01.03 - Arquitecturas CNN
  "M01.03.01": pending(), // LeNet - Fundamento y uso practico de LeNet.
  "M01.03.02": pending(), // AlexNet - Fundamento y uso practico de AlexNet.
  "M01.03.03": pending(), // VGG - Concepto tecnico de VGG y su uso practico.
  "M01.03.04": pending(), // Inception - Fundamento y uso practico de Inception.
  "M01.03.05": pending(), // ResNet - Fundamento y uso practico de ResNet.
  "M01.03.06": pending(), // Residual block - Fundamento y uso practico de Residual block.
  "M01.03.07": pending(), // DenseNet - Fundamento y uso practico de DenseNet.
  "M01.03.08": pending(), // EfficientNet - Fundamento y uso practico de EfficientNet.

  // M01.04 - Computer Vision tasks
  "M01.04.01": pending(), // Image classification - Tarea de asignar categorias a entradas.
  "M01.04.02": pending(), // Object detection - Fundamento y uso practico de Object detection.
  "M01.04.03": pending(), // Semantic segmentation - Fundamento y uso practico de Semantic segmentation.
  "M01.04.04": pending(), // Instance segmentation - Fundamento y uso practico de Instance segmentation.
  "M01.04.05": pending(), // Panoptic segmentation - Fundamento y uso practico de Panoptic segmentation.
  "M01.04.06": pending(), // Object tracking - Fundamento y uso practico de Object tracking.
  "M01.04.07": pending(), // Pose estimation - Fundamento y uso practico de Pose estimation.
  "M01.04.08": pending(), // Optical flow - Fundamento y uso practico de Optical flow.
  "M01.04.09": pending(), // Depth estimation - Fundamento y uso practico de Depth estimation.

  // M01.05 - Vision moderna
  "M01.05.01": pending(), // Vision Transformer - Arquitectura neuronal basada en atencion para secuencias.
  "M01.05.02": pending(), // Patch embeddings - Representacion vectorial que captura significado o similitud.
  "M01.05.03": pending(), // Swin Transformer - Arquitectura neuronal basada en atencion para secuencias.
  "M01.05.04": pending(), // Contrastive vision learning - Concepto clave: Contrastive vision learning.
  "M01.05.05": pending(), // CLIP - Concepto tecnico de CLIP y su uso practico.
  "M01.05.06": pending(), // Vision-language models - Fundamento y uso practico de Vision-language models.
  "M01.05.07": pending(), // Image embeddings - Representacion vectorial que captura significado o similitud.
  "M01.05.08": pending(), // Visual grounding - Fundamento y uso practico de Visual grounding.
  "M01.05.09": pending(), // Image captioning - Fundamento y uso practico de Image captioning.

  // M02 - NLP clasico y representacion del lenguaje

  // M02.01 - Procesamiento de texto
  "M02.01.01": pending(), // Text normalization - Fundamento y uso practico de Text normalization.
  "M02.01.02": pending(), // Word tokenization - Unidad de texto usada para procesar lenguaje en modelos.
  "M02.01.03": pending(), // Character tokenization - Unidad de texto usada para procesar lenguaje en modelos.
  "M02.01.04": pending(), // Sentence splitting - Fundamento y uso practico de Sentence splitting.
  "M02.01.05": pending(), // Stopwords - Fundamento y uso practico de Stopwords.
  "M02.01.06": pending(), // Stemming - Fundamento y uso practico de Stemming.
  "M02.01.07": pending(), // Lemmatization - Fundamento y uso practico de Lemmatization.
  "M02.01.08": pending(), // Subword tokenization - Unidad de texto usada para procesar lenguaje en modelos.

  // M02.02 - Modelos estadisticos
  "M02.02.01": pending(), // N-grams - Fundamento y uso practico de N-grams.
  "M02.02.02": pending(), // Unigram language model - Fundamento y uso practico de Unigram language model.
  "M02.02.03": pending(), // Bigram model - Fundamento y uso practico de Bigram model.
  "M02.02.04": pending(), // Trigram model - Fundamento y uso practico de Trigram model.
  "M02.02.05": pending(), // Smoothing - Fundamento y uso practico de Smoothing.
  "M02.02.06": pending(), // Backoff - Fundamento y uso practico de Backoff.
  "M02.02.07": pending(), // Perplexity - Fundamento y uso practico de Perplexity.

  // M02.03 - Embeddings
  "M02.03.01": pending(), // One-hot representation - Fundamento y uso practico de One-hot representation.
  "M02.03.02": pending(), // Dense embeddings - Representacion vectorial que captura significado o similitud.
  "M02.03.03": pending(), // Word2Vec - Fundamento y uso practico de Word2Vec.
  "M02.03.04": pending(), // CBOW - Concepto tecnico de CBOW y su uso practico.
  "M02.03.05": pending(), // Skip-gram - Fundamento y uso practico de Skip-gram.
  "M02.03.06": pending(), // Negative sampling - Seleccion o generacion de muestras desde una distribucion.
  "M02.03.07": pending(), // GloVe - Fundamento y uso practico de GloVe.
  "M02.03.08": pending(), // Contextual representations - Concepto clave: Contextual representations.

  // M02.04 - Tareas NLP
  "M02.04.01": pending(), // Sentiment analysis - Fundamento y uso practico de Sentiment analysis.
  "M02.04.02": pending(), // Text classification - Tarea de asignar categorias a entradas.
  "M02.04.03": pending(), // Named Entity Recognition - Fundamento y uso practico de Named Entity Recognition.
  "M02.04.04": pending(), // Part-of-Speech tagging - Fundamento y uso practico de Part-of-Speech tagging.
  "M02.04.05": pending(), // Question answering - Fundamento y uso practico de Question answering.
  "M02.04.06": pending(), // Machine translation - Fundamento y uso practico de Machine translation.
  "M02.04.07": pending(), // Summarization - Fundamento y uso practico de Summarization.
  "M02.04.08": pending(), // Information extraction - Fundamento y uso practico de Information extraction.

  // M03 - RNN, LSTM y GRU

  // M03.01 - RNN
  "M03.01.01": pending(), // Sequence modeling - Fundamento y uso practico de Sequence modeling.
  "M03.01.02": pending(), // Hidden state - Fundamento y uso practico de Hidden state.
  "M03.01.03": pending(), // Recurrent connection - Fundamento y uso practico de Recurrent connection.
  "M03.01.04": pending(), // Unrolling - Fundamento y uso practico de Unrolling.
  "M03.01.05": pending(), // Teacher forcing - Fundamento y uso practico de Teacher forcing.
  "M03.01.06": pending(), // Many-to-one - Fundamento y uso practico de Many-to-one.
  "M03.01.07": pending(), // One-to-many - Fundamento y uso practico de One-to-many.
  "M03.01.08": pending(), // Many-to-many - Fundamento y uso practico de Many-to-many.

  // M03.02 - Problemas de RNN
  "M03.02.01": pending(), // Vanishing gradients - Direccion de cambio usada para optimizar parametros.
  "M03.02.02": pending(), // Exploding gradients - Direccion de cambio usada para optimizar parametros.
  "M03.02.03": pending(), // Long-term dependencies - Fundamento y uso practico de Long-term dependencies.
  "M03.02.04": pending(), // Gradient clipping - Direccion de cambio usada para optimizar parametros.
  "M03.02.05": pending(), // Truncated backpropagation - Concepto clave: Truncated backpropagation.

  // M03.03 - LSTM
  "M03.03.01": pending(), // Cell state - Fundamento y uso practico de Cell state.
  "M03.03.02": pending(), // Forget gate - Fundamento y uso practico de Forget gate.
  "M03.03.03": pending(), // Input gate - Fundamento y uso practico de Input gate.
  "M03.03.04": pending(), // Output gate - Fundamento y uso practico de Output gate.
  "M03.03.05": pending(), // Candidate state - Fundamento y uso practico de Candidate state.
  "M03.03.06": pending(), // Bidirectional LSTM - Fundamento y uso practico de Bidirectional LSTM.

  // M03.04 - GRU y Seq2Seq
  "M03.04.01": pending(), // GRU - Concepto tecnico de GRU y su uso practico.
  "M03.04.02": pending(), // Update gate - Fundamento y uso practico de Update gate.
  "M03.04.03": pending(), // Reset gate - Fundamento y uso practico de Reset gate.
  "M03.04.04": pending(), // Encoder-decoder - Fundamento y uso practico de Encoder-decoder.
  "M03.04.05": pending(), // Sequence-to-sequence - Fundamento y uso practico de Sequence-to-sequence.
  "M03.04.06": pending(), // Beam search - Fundamento y uso practico de Beam search.

  // M04 - Attention

  // M04.01 - Attention basica
  "M04.01.01": pending(), // Query - Fundamento y uso practico de Query.
  "M04.01.02": pending(), // Key - Fundamento y uso practico de Key.
  "M04.01.03": pending(), // Value - Fundamento y uso practico de Value.
  "M04.01.04": pending(), // Attention scores - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.01.05": pending(), // Dot-product attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.01.06": pending(), // Scaled dot-product attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.01.07": pending(), // Softmax attention weights - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.01.08": pending(), // Weighted sum - Fundamento y uso practico de Weighted sum.

  // M04.02 - Tipos de atencion
  "M04.02.01": pending(), // Self-attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.02.02": pending(), // Cross-attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.02.03": pending(), // Causal attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.02.04": pending(), // Masked attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M04.02.05": pending(), // Padding mask - Fundamento y uso practico de Padding mask.
  "M04.02.06": pending(), // Attention mask - Mecanismo para ponderar informacion relevante entre elementos.

  // M04.03 - Multi-head attention
  "M04.03.01": pending(), // Head - Fundamento y uso practico de Head.
  "M04.03.02": pending(), // Q projection - Fundamento y uso practico de Q projection.
  "M04.03.03": pending(), // K projection - Fundamento y uso practico de K projection.
  "M04.03.04": pending(), // V projection - Fundamento y uso practico de V projection.
  "M04.03.05": pending(), // Head splitting - Fundamento y uso practico de Head splitting.
  "M04.03.06": pending(), // Head concatenation - Fundamento y uso practico de Head concatenation.
  "M04.03.07": pending(), // Output projection - Fundamento y uso practico de Output projection.
  "M04.03.08": pending(), // Attention complexity - Mecanismo para ponderar informacion relevante entre elementos.

  // M05 - Transformers

  // M05.01 - Arquitectura
  "M05.01.01": pending(), // Transformer block - Arquitectura neuronal basada en atencion para secuencias.
  "M05.01.02": pending(), // Encoder - Fundamento y uso practico de Encoder.
  "M05.01.03": pending(), // Decoder - Fundamento y uso practico de Decoder.
  "M05.01.04": pending(), // Encoder-decoder Transformer - Arquitectura neuronal basada en atencion para secuencias.
  "M05.01.05": pending(), // Decoder-only Transformer - Arquitectura neuronal basada en atencion para secuencias.
  "M05.01.06": pending(), // Residual connections - Fundamento y uso practico de Residual connections.
  "M05.01.07": pending(), // Feed-forward network - Fundamento y uso practico de Feed-forward network.
  "M05.01.08": pending(), // Layer normalization - Fundamento y uso practico de Layer normalization.

  // M05.02 - Positional information
  "M05.02.01": pending(), // Positional encoding - Fundamento y uso practico de Positional encoding.
  "M05.02.02": pending(), // Sinusoidal positional encoding - Concepto clave: Sinusoidal positional encoding.
  "M05.02.03": pending(), // Learned positional embeddings - Representacion vectorial que captura significado o similitud.
  "M05.02.04": pending(), // Relative position - Fundamento y uso practico de Relative position.
  "M05.02.05": pending(), // Rotary positional embeddings - Representacion vectorial que captura significado o similitud.
  "M05.02.06": pending(), // RoPE - Fundamento y uso practico de RoPE.
  "M05.02.07": pending(), // RoPE scaling - Fundamento y uso practico de RoPE scaling.
  "M05.02.08": pending(), // ALiBi - Fundamento y uso practico de ALiBi.

  // M05.03 - Bloques modernos
  "M05.03.01": pending(), // Pre-norm Transformer - Arquitectura neuronal basada en atencion para secuencias.
  "M05.03.02": pending(), // Post-norm Transformer - Arquitectura neuronal basada en atencion para secuencias.
  "M05.03.03": pending(), // RMSNorm - Fundamento y uso practico de RMSNorm.
  "M05.03.04": pending(), // GELU - Concepto tecnico de GELU y su uso practico.
  "M05.03.05": pending(), // SwiGLU - Fundamento y uso practico de SwiGLU.
  "M05.03.06": pending(), // Gated MLP - Fundamento y uso practico de Gated MLP.
  "M05.03.07": pending(), // Residual stream - Fundamento y uso practico de Residual stream.

  // M05.04 - Entrenamiento y generacion
  "M05.04.01": pending(), // Causal language modeling - Fundamento y uso practico de Causal language modeling.
  "M05.04.02": pending(), // Teacher forcing - Fundamento y uso practico de Teacher forcing.
  "M05.04.03": pending(), // Next-token prediction - Unidad de texto usada para procesar lenguaje en modelos.
  "M05.04.04": pending(), // Cross entropy - Fundamento y uso practico de Cross entropy.
  "M05.04.05": pending(), // Logits - Control de versiones para gestionar cambios de codigo.
  "M05.04.06": pending(), // Sampling - Seleccion o generacion de muestras desde una distribucion.
  "M05.04.07": pending(), // Temperature - Fundamento y uso practico de Temperature.
  "M05.04.08": pending(), // Top-k sampling - Seleccion o generacion de muestras desde una distribucion.
  "M05.04.09": pending(), // Top-p sampling - Seleccion o generacion de muestras desde una distribucion.
  "M05.04.10": pending(), // Greedy decoding - Fundamento y uso practico de Greedy decoding.
  "M05.04.11": pending(), // Beam search - Fundamento y uso practico de Beam search.

  // M06 - Large Language Models

  // M06.01 - Language modeling
  "M06.01.01": pending(), // Language modeling - Fundamento y uso practico de Language modeling.
  "M06.01.02": pending(), // Autoregressive language modeling - Concepto clave: Autoregressive language modeling.
  "M06.01.03": pending(), // Next-token prediction - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.01.04": pending(), // Conditional language modeling - Concepto clave: Conditional language modeling.
  "M06.01.05": pending(), // Masked language modeling - Fundamento y uso practico de Masked language modeling.
  "M06.01.06": pending(), // Causal language modeling - Fundamento y uso practico de Causal language modeling.
  "M06.01.07": pending(), // Perplexity - Fundamento y uso practico de Perplexity.

  // M06.02 - Tokenizacion
  "M06.02.01": pending(), // Character tokenization - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.02.02": pending(), // Word tokenization - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.02.03": pending(), // Subword tokenization - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.02.04": pending(), // Byte-level tokenization - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.02.05": pending(), // BPE - Concepto tecnico de BPE y su uso practico.
  "M06.02.06": pending(), // WordPiece - Fundamento y uso practico de WordPiece.
  "M06.02.07": pending(), // Unigram - Fundamento y uso practico de Unigram.
  "M06.02.08": pending(), // SentencePiece - Fundamento y uso practico de SentencePiece.
  "M06.02.09": pending(), // Vocabulary size - Fundamento y uso practico de Vocabulary size.
  "M06.02.10": pending(), // Special tokens - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.02.11": pending(), // BOS - Concepto tecnico de BOS y su uso practico.
  "M06.02.12": pending(), // EOS - Concepto tecnico de EOS y su uso practico.
  "M06.02.13": pending(), // PAD - Concepto tecnico de PAD y su uso practico.
  "M06.02.14": pending(), // UNK - Concepto tecnico de UNK y su uso practico.

  // M06.03 - Datos de pretraining
  "M06.03.01": pending(), // Dataset construction - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "M06.03.02": pending(), // Data collection - Fundamento y uso practico de Data collection.
  "M06.03.03": pending(), // Web corpora - Fundamento y uso practico de Web corpora.
  "M06.03.04": pending(), // Common Crawl - Fundamento y uso practico de Common Crawl.
  "M06.03.05": pending(), // Text extraction - Fundamento y uso practico de Text extraction.
  "M06.03.06": pending(), // Language identification - Fundamento y uso practico de Language identification.
  "M06.03.07": pending(), // Quality filtering - Fundamento y uso practico de Quality filtering.
  "M06.03.08": pending(), // Deduplication - Fundamento y uso practico de Deduplication.
  "M06.03.09": pending(), // Near-duplicate detection - Fundamento y uso practico de Near-duplicate detection.
  "M06.03.10": pending(), // PII filtering - Fundamento y uso practico de PII filtering.
  "M06.03.11": pending(), // Data contamination - Fundamento y uso practico de Data contamination.
  "M06.03.12": pending(), // Data mixtures - Fundamento y uso practico de Data mixtures.
  "M06.03.13": pending(), // Synthetic data - Fundamento y uso practico de Synthetic data.

  // M06.04 - Pretraining
  "M06.04.01": pending(), // Pretraining objective - Proceso de ajuste de un modelo con datos.
  "M06.04.02": pending(), // Batch size - Fundamento y uso practico de Batch size.
  "M06.04.03": pending(), // Sequence length - Fundamento y uso practico de Sequence length.
  "M06.04.04": pending(), // Tokens per batch - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.04.05": pending(), // Learning rate - Fundamento y uso practico de Learning rate.
  "M06.04.06": pending(), // Warmup - Fundamento y uso practico de Warmup.
  "M06.04.07": pending(), // Weight decay - Fundamento y uso practico de Weight decay.
  "M06.04.08": pending(), // Gradient accumulation - Direccion de cambio usada para optimizar parametros.
  "M06.04.09": pending(), // Gradient clipping - Direccion de cambio usada para optimizar parametros.
  "M06.04.10": pending(), // Checkpointing - Fundamento y uso practico de Checkpointing.
  "M06.04.11": pending(), // Resume training - Proceso de ajuste de un modelo con datos.
  "M06.04.12": pending(), // Validation loss - Medida del error que guia el aprendizaje del modelo.
  "M06.04.13": pending(), // Perplexity - Fundamento y uso practico de Perplexity.

  // M06.05 - Scaling
  "M06.05.01": pending(), // Parameter count - Fundamento y uso practico de Parameter count.
  "M06.05.02": pending(), // Training compute - Proceso de ajuste de un modelo con datos.
  "M06.05.03": pending(), // Dataset size - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "M06.05.04": pending(), // Compute-optimal training - Proceso de ajuste de un modelo con datos.
  "M06.05.05": pending(), // Scaling laws - Fundamento y uso practico de Scaling laws.
  "M06.05.06": pending(), // Chinchilla scaling - Fundamento y uso practico de Chinchilla scaling.
  "M06.05.07": pending(), // Loss scaling - Medida del error que guia el aprendizaje del modelo.
  "M06.05.08": pending(), // Emergent capabilities - Fundamento y uso practico de Emergent capabilities.

  // M06.06 - Arquitecturas LLM modernas
  "M06.06.01": pending(), // GPT-style models - Fundamento y uso practico de GPT-style models.
  "M06.06.02": pending(), // BERT-style models - Fundamento y uso practico de BERT-style models.
  "M06.06.03": pending(), // T5 - Concepto tecnico de T5 y su uso practico.
  "M06.06.04": pending(), // Decoder-only models - Fundamento y uso practico de Decoder-only models.
  "M06.06.05": pending(), // Encoder-only models - Fundamento y uso practico de Encoder-only models.
  "M06.06.06": pending(), // Encoder-decoder models - Fundamento y uso practico de Encoder-decoder models.
  "M06.06.07": pending(), // Grouped-query attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M06.06.08": pending(), // Multi-query attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M06.06.09": pending(), // Sliding-window attention - Mecanismo para ponderar informacion relevante entre elementos.
  "M06.06.10": pending(), // Mixture of Experts - Fundamento y uso practico de Mixture of Experts.
  "M06.06.11": pending(), // Sparse MoE - Fundamento y uso practico de Sparse MoE.
  "M06.06.12": pending(), // Router - Fundamento y uso practico de Router.
  "M06.06.13": pending(), // Expert load balancing - Fundamento y uso practico de Expert load balancing.

  // M06.07 - Generacion e inferencia
  "M06.07.01": pending(), // Autoregressive decoding - Fundamento y uso practico de Autoregressive decoding.
  "M06.07.02": pending(), // Greedy decoding - Fundamento y uso practico de Greedy decoding.
  "M06.07.03": pending(), // Temperature - Fundamento y uso practico de Temperature.
  "M06.07.04": pending(), // Top-k - Fundamento y uso practico de Top-k.
  "M06.07.05": pending(), // Top-p - Fundamento y uso practico de Top-p.
  "M06.07.06": pending(), // Repetition penalty - Fundamento y uso practico de Repetition penalty.
  "M06.07.07": pending(), // Stop tokens - Unidad de texto usada para procesar lenguaje en modelos.
  "M06.07.08": pending(), // KV cache - Almacenamiento temporal para acelerar accesos repetidos.
  "M06.07.09": pending(), // Context window - Fundamento y uso practico de Context window.
  "M06.07.10": pending(), // Long-context models - Fundamento y uso practico de Long-context models.
  "M06.07.11": pending(), // Speculative decoding - Fundamento y uso practico de Speculative decoding.

  // M06.08 - Evaluacion
  "M06.08.01": pending(), // Intrinsic evaluation - Medicion sistematica del rendimiento de un sistema.
  "M06.08.02": pending(), // Perplexity - Fundamento y uso practico de Perplexity.
  "M06.08.03": pending(), // Benchmark datasets - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "M06.08.04": pending(), // Task evaluation - Medicion sistematica del rendimiento de un sistema.
  "M06.08.05": pending(), // Human evaluation - Medicion sistematica del rendimiento de un sistema.
  "M06.08.06": pending(), // Instruction following - Fundamento y uso practico de Instruction following.
  "M06.08.07": pending(), // Factuality - Fundamento y uso practico de Factuality.
  "M06.08.08": pending(), // Hallucination - Fundamento y uso practico de Hallucination.
  "M06.08.09": pending(), // Robustness - Fundamento y uso practico de Robustness.
  "M06.08.10": pending(), // Bias evaluation - Medicion sistematica del rendimiento de un sistema.

  // M07 - Fine-Tuning, Instruction Tuning y Alignment

  // M07.01 - Adaptacion
  "M07.01.01": pending(), // Continued pretraining - Proceso de ajuste de un modelo con datos.
  "M07.01.02": pending(), // Domain adaptation - Fundamento y uso practico de Domain adaptation.
  "M07.01.03": pending(), // Supervised fine-tuning - Adaptacion de un modelo preentrenado a una tarea concreta.
  "M07.01.04": pending(), // Instruction tuning - Fundamento y uso practico de Instruction tuning.
  "M07.01.05": pending(), // Chat templates - Fundamento y uso practico de Chat templates.
  "M07.01.06": pending(), // Training data formatting - Proceso de ajuste de un modelo con datos.
  "M07.01.07": pending(), // Data quality - Fundamento y uso practico de Data quality.
  "M07.01.08": pending(), // Catastrophic forgetting - Fundamento y uso practico de Catastrophic forgetting.

  // M07.02 - Parameter-efficient fine-tuning
  "M07.02.01": pending(), // Adapters - Fundamento y uso practico de Adapters.
  "M07.02.02": pending(), // LoRA - Fundamento y uso practico de LoRA.
  "M07.02.03": pending(), // Low-rank decomposition - Fundamento y uso practico de Low-rank decomposition.
  "M07.02.04": pending(), // QLoRA - Fundamento y uso practico de QLoRA.
  "M07.02.05": pending(), // Rank selection - Fundamento y uso practico de Rank selection.
  "M07.02.06": pending(), // Target modules - Fundamento y uso practico de Target modules.
  "M07.02.07": pending(), // Merge adapters - Fundamento y uso practico de Merge adapters.

  // M07.03 - Preference alignment
  "M07.03.01": pending(), // Preference datasets - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "M07.03.02": pending(), // Reward models - Fundamento y uso practico de Reward models.
  "M07.03.03": pending(), // RLHF - Concepto tecnico de RLHF y su uso practico.
  "M07.03.04": pending(), // PPO - Concepto tecnico de PPO y su uso practico.
  "M07.03.05": pending(), // DPO - Concepto tecnico de DPO y su uso practico.
  "M07.03.06": pending(), // Preference optimization - Fundamento y uso practico de Preference optimization.
  "M07.03.07": pending(), // Rejection sampling - Seleccion o generacion de muestras desde una distribucion.
  "M07.03.08": pending(), // Constitutional methods - Fundamento y uso practico de Constitutional methods.

  // M08 - Generative AI

  // M08.01 - Autoencoders
  "M08.01.01": pending(), // Encoder - Fundamento y uso practico de Encoder.
  "M08.01.02": pending(), // Decoder - Fundamento y uso practico de Decoder.
  "M08.01.03": pending(), // Latent representation - Fundamento y uso practico de Latent representation.
  "M08.01.04": pending(), // Reconstruction loss - Medida del error que guia el aprendizaje del modelo.
  "M08.01.05": pending(), // Bottleneck - Fundamento y uso practico de Bottleneck.

  // M08.02 - Variational Autoencoders
  "M08.02.01": pending(), // Latent distribution - Forma en la que se reparten valores o probabilidades.
  "M08.02.02": pending(), // Reparameterization trick - Fundamento y uso practico de Reparameterization trick.
  "M08.02.03": pending(), // KL divergence loss - Medida del error que guia el aprendizaje del modelo.
  "M08.02.04": pending(), // ELBO - Concepto tecnico de ELBO y su uso practico.
  "M08.02.05": pending(), // VAE sampling - Seleccion o generacion de muestras desde una distribucion.

  // M08.03 - GANs
  "M08.03.01": pending(), // Generator - Fundamento y uso practico de Generator.
  "M08.03.02": pending(), // Discriminator - Fundamento y uso practico de Discriminator.
  "M08.03.03": pending(), // Adversarial objective - Fundamento y uso practico de Adversarial objective.
  "M08.03.04": pending(), // Minimax game - Fundamento y uso practico de Minimax game.
  "M08.03.05": pending(), // Mode collapse - Fundamento y uso practico de Mode collapse.
  "M08.03.06": pending(), // WGAN - Concepto tecnico de WGAN y su uso practico.
  "M08.03.07": pending(), // GAN stability - Fundamento y uso practico de GAN stability.

  // M08.04 - Diffusion
  "M08.04.01": pending(), // Forward diffusion - Fundamento y uso practico de Forward diffusion.
  "M08.04.02": pending(), // Noise schedule - Fundamento y uso practico de Noise schedule.
  "M08.04.03": pending(), // Reverse diffusion - Fundamento y uso practico de Reverse diffusion.
  "M08.04.04": pending(), // Score function - Bloque o relacion que transforma entradas en salidas.
  "M08.04.05": pending(), // Noise prediction - Fundamento y uso practico de Noise prediction.
  "M08.04.06": pending(), // DDPM - Concepto tecnico de DDPM y su uso practico.
  "M08.04.07": pending(), // DDIM - Concepto tecnico de DDIM y su uso practico.
  "M08.04.08": pending(), // Latent diffusion - Fundamento y uso practico de Latent diffusion.
  "M08.04.09": pending(), // U-Net - Fundamento y uso practico de U-Net.
  "M08.04.10": pending(), // Conditioning - Fundamento y uso practico de Conditioning.
  "M08.04.11": pending(), // Classifier-free guidance - Fundamento y uso practico de Classifier-free guidance.
  "M08.04.12": pending(), // Diffusion Transformer - Arquitectura neuronal basada en atencion para secuencias.

  // M09 - Reinforcement Learning

  // M09.01 - Fundamentos
  "M09.01.01": pending(), // Agent - Sistema capaz de ejecutar pasos o decisiones para cumplir objetivos.
  "M09.01.02": pending(), // Environment - Fundamento y uso practico de Environment.
  "M09.01.03": pending(), // State - Fundamento y uso practico de State.
  "M09.01.04": pending(), // Action - Fundamento y uso practico de Action.
  "M09.01.05": pending(), // Reward - Fundamento y uso practico de Reward.
  "M09.01.06": pending(), // Policy - Fundamento y uso practico de Policy.
  "M09.01.07": pending(), // Value function - Bloque o relacion que transforma entradas en salidas.
  "M09.01.08": pending(), // Q function - Bloque o relacion que transforma entradas en salidas.
  "M09.01.09": pending(), // Return - Fundamento y uso practico de Return.
  "M09.01.10": pending(), // Discount factor - Fundamento y uso practico de Discount factor.

  // M09.02 - MDPs
  "M09.02.01": pending(), // Markov property - Fundamento y uso practico de Markov property.
  "M09.02.02": pending(), // Transition model - Fundamento y uso practico de Transition model.
  "M09.02.03": pending(), // Reward model - Fundamento y uso practico de Reward model.
  "M09.02.04": pending(), // Markov Decision Process - Fundamento y uso practico de Markov Decision Process.
  "M09.02.05": pending(), // Bellman equation - Fundamento y uso practico de Bellman equation.
  "M09.02.06": pending(), // Bellman optimality - Fundamento y uso practico de Bellman optimality.
  "M09.02.07": pending(), // Dynamic programming - Fundamento y uso practico de Dynamic programming.

  // M09.03 - Value-based RL
  "M09.03.01": pending(), // Monte Carlo - Fundamento y uso practico de Monte Carlo.
  "M09.03.02": pending(), // Temporal difference - Fundamento y uso practico de Temporal difference.
  "M09.03.03": pending(), // Q-learning - Fundamento y uso practico de Q-learning.
  "M09.03.04": pending(), // SARSA - Concepto tecnico de SARSA y su uso practico.
  "M09.03.05": pending(), // DQN - Concepto tecnico de DQN y su uso practico.
  "M09.03.06": pending(), // Experience replay - Fundamento y uso practico de Experience replay.
  "M09.03.07": pending(), // Target network - Fundamento y uso practico de Target network.
  "M09.03.08": pending(), // Double DQN - Fundamento y uso practico de Double DQN.

  // M09.04 - Policy-based RL
  "M09.04.01": pending(), // Policy gradient - Direccion de cambio usada para optimizar parametros.
  "M09.04.02": pending(), // REINFORCE - Concepto tecnico de REINFORCE y su uso practico.
  "M09.04.03": pending(), // Actor-critic - Fundamento y uso practico de Actor-critic.
  "M09.04.04": pending(), // Advantage function - Bloque o relacion que transforma entradas en salidas.
  "M09.04.05": pending(), // A2C - Concepto tecnico de A2C y su uso practico.
  "M09.04.06": pending(), // A3C - Concepto tecnico de A3C y su uso practico.
  "M09.04.07": pending(), // PPO - Concepto tecnico de PPO y su uso practico.

  // M09.05 - RL avanzado
  "M09.05.01": pending(), // Model-based RL - Fundamento y uso practico de Model-based RL.
  "M09.05.02": pending(), // Planning - Fundamento y uso practico de Planning.
  "M09.05.03": pending(), // Exploration - Fundamento y uso practico de Exploration.
  "M09.05.04": pending(), // Intrinsic motivation - Fundamento y uso practico de Intrinsic motivation.
  "M09.05.05": pending(), // Offline RL - Fundamento y uso practico de Offline RL.
  "M09.05.06": pending(), // Inverse RL - Fundamento y uso practico de Inverse RL.
  "M09.05.07": pending(), // Imitation learning - Fundamento y uso practico de Imitation learning.
  "M09.05.08": pending(), // Multi-task RL - Fundamento y uso practico de Multi-task RL.
  "M09.05.09": pending(), // Meta-RL - Fundamento y uso practico de Meta-RL.
  "M09.05.10": pending(), // RL for LLMs - Fundamento y uso practico de RL for LLMs.

  // M10 - Multimodal AI

  // M10.01 - Representaciones multimodales
  "M10.01.01": pending(), // Modality - Fundamento y uso practico de Modality.
  "M10.01.02": pending(), // Joint embedding - Representacion vectorial que captura significado o similitud.
  "M10.01.03": pending(), // Cross-modal representation - Concepto clave: Cross-modal representation.
  "M10.01.04": pending(), // Contrastive learning - Fundamento y uso practico de Contrastive learning.
  "M10.01.05": pending(), // Alignment - Fundamento y uso practico de Alignment.
  "M10.01.06": pending(), // Projection layers - Fundamento y uso practico de Projection layers.

  // M10.02 - Vision-Language
  "M10.02.01": pending(), // CLIP - Concepto tecnico de CLIP y su uso practico.
  "M10.02.02": pending(), // Image encoder - Fundamento y uso practico de Image encoder.
  "M10.02.03": pending(), // Text encoder - Fundamento y uso practico de Text encoder.
  "M10.02.04": pending(), // Contrastive loss - Medida del error que guia el aprendizaje del modelo.
  "M10.02.05": pending(), // Visual instruction tuning - Concepto clave: Visual instruction tuning.
  "M10.02.06": pending(), // Vision-language models - Fundamento y uso practico de Vision-language models.
  "M10.02.07": pending(), // Image tokens - Unidad de texto usada para procesar lenguaje en modelos.
  "M10.02.08": pending(), // Vision-language connector - Concepto clave: Vision-language connector.

  // M10.03 - Audio y video
  "M10.03.01": pending(), // Audio embeddings - Representacion vectorial que captura significado o similitud.
  "M10.03.02": pending(), // Video embeddings - Representacion vectorial que captura significado o similitud.
  "M10.03.03": pending(), // Temporal modeling - Fundamento y uso practico de Temporal modeling.
  "M10.03.04": pending(), // Audio-language models - Fundamento y uso practico de Audio-language models.
  "M10.03.05": pending(), // Video-language models - Fundamento y uso practico de Video-language models.
  "M10.03.06": pending(), // Multimodal attention - Mecanismo para ponderar informacion relevante entre elementos.

  // M11 - Speech y Audio AI

  // M11.01 - Signal processing
  "M11.01.01": pending(), // Sampling rate - Seleccion o generacion de muestras desde una distribucion.
  "M11.01.02": pending(), // Nyquist theorem - Fundamento y uso practico de Nyquist theorem.
  "M11.01.03": pending(), // Frequency - Fundamento y uso practico de Frequency.
  "M11.01.04": pending(), // Amplitude - Fundamento y uso practico de Amplitude.
  "M11.01.05": pending(), // Fourier transform - Fundamento y uso practico de Fourier transform.
  "M11.01.06": pending(), // FFT - Concepto tecnico de FFT y su uso practico.
  "M11.01.07": pending(), // Spectrogram - Fundamento y uso practico de Spectrogram.
  "M11.01.08": pending(), // Mel scale - Fundamento y uso practico de Mel scale.
  "M11.01.09": pending(), // Mel spectrogram - Fundamento y uso practico de Mel spectrogram.
  "M11.01.10": pending(), // MFCC - Concepto tecnico de MFCC y su uso practico.

  // M11.02 - Speech recognition
  "M11.02.01": pending(), // ASR - Concepto tecnico de ASR y su uso practico.
  "M11.02.02": pending(), // CTC - Concepto tecnico de CTC y su uso practico.
  "M11.02.03": pending(), // Connectionist Temporal Classification - Tarea de asignar categorias a entradas.
  "M11.02.04": pending(), // wav2vec - Fundamento y uso practico de wav2vec.
  "M11.02.05": pending(), // Self-supervised speech - Fundamento y uso practico de Self-supervised speech.
  "M11.02.06": pending(), // Whisper - Fundamento y uso practico de Whisper.

  // M11.03 - Text-to-speech
  "M11.03.01": pending(), // TTS - Concepto tecnico de TTS y su uso practico.
  "M11.03.02": pending(), // Acoustic model - Fundamento y uso practico de Acoustic model.
  "M11.03.03": pending(), // Neural vocoder - Fundamento y uso practico de Neural vocoder.
  "M11.03.04": pending(), // WaveNet - Fundamento y uso practico de WaveNet.
  "M11.03.05": pending(), // Mel-to-audio generation - Fundamento y uso practico de Mel-to-audio generation.
  "M11.03.06": pending(), // Prosody - Fundamento y uso practico de Prosody.

  // S - Especializacion

  // S01 - Arquitectura de computadores y GPU

  // S01.01 - CPU
  "S01.01.01": pending(), // CPU architecture - Diseño estructural de componentes y sus relaciones.
  "S01.01.02": pending(), // Registers - Fundamento y uso practico de Registers.
  "S01.01.03": pending(), // Cache L1 - Almacenamiento temporal para acelerar accesos repetidos.
  "S01.01.04": pending(), // Cache L2 - Almacenamiento temporal para acelerar accesos repetidos.
  "S01.01.05": pending(), // Cache L3 - Almacenamiento temporal para acelerar accesos repetidos.
  "S01.01.06": pending(), // RAM - Concepto tecnico de RAM y su uso practico.
  "S01.01.07": pending(), // Memory bandwidth - Gestion o uso de informacion almacenada durante ejecucion.
  "S01.01.08": pending(), // SIMD - Concepto tecnico de SIMD y su uso practico.
  "S01.01.09": pending(), // Vectorization - Representacion numerica usada para calculo, busqueda o modelado.
  "S01.01.10": pending(), // Branch prediction - Fundamento y uso practico de Branch prediction.

  // S01.02 - GPU
  "S01.02.01": pending(), // GPU architecture - Diseño estructural de componentes y sus relaciones.
  "S01.02.02": pending(), // Streaming multiprocessor - Fundamento y uso practico de Streaming multiprocessor.
  "S01.02.03": pending(), // CUDA core - Fundamento y uso practico de CUDA core.
  "S01.02.04": pending(), // Tensor core - Fundamento y uso practico de Tensor core.
  "S01.02.05": pending(), // VRAM - Concepto tecnico de VRAM y su uso practico.
  "S01.02.06": pending(), // Memory bandwidth - Gestion o uso de informacion almacenada durante ejecucion.
  "S01.02.07": pending(), // Warp - Fundamento y uso practico de Warp.
  "S01.02.08": pending(), // Occupancy - Fundamento y uso practico de Occupancy.
  "S01.02.09": pending(), // FLOPS - Concepto tecnico de FLOPS y su uso practico.
  "S01.02.10": pending(), // Arithmetic intensity - Fundamento y uso practico de Arithmetic intensity.

  // S02 - CUDA y GPU Programming

  // S02.01 - CUDA programming model
  "S02.01.01": pending(), // CUDA platform - Fundamento y uso practico de CUDA platform.
  "S02.01.02": pending(), // Host - Fundamento y uso practico de Host.
  "S02.01.03": pending(), // Device - Fundamento y uso practico de Device.
  "S02.01.04": pending(), // Kernel - Fundamento y uso practico de Kernel.
  "S02.01.05": pending(), // Thread - Fundamento y uso practico de Thread.
  "S02.01.06": pending(), // Block - Fundamento y uso practico de Block.
  "S02.01.07": pending(), // Grid - Fundamento y uso practico de Grid.
  "S02.01.08": pending(), // Warp - Fundamento y uso practico de Warp.
  "S02.01.09": pending(), // SIMT - Concepto tecnico de SIMT y su uso practico.

  // S02.02 - Memoria CUDA
  "S02.02.01": pending(), // Global memory - Gestion o uso de informacion almacenada durante ejecucion.
  "S02.02.02": pending(), // Shared memory - Gestion o uso de informacion almacenada durante ejecucion.
  "S02.02.03": pending(), // Registers - Fundamento y uso practico de Registers.
  "S02.02.04": pending(), // Constant memory - Gestion o uso de informacion almacenada durante ejecucion.
  "S02.02.05": pending(), // Unified memory - Gestion o uso de informacion almacenada durante ejecucion.
  "S02.02.06": pending(), // Memory coalescing - Gestion o uso de informacion almacenada durante ejecucion.
  "S02.02.07": pending(), // Bank conflicts - Fundamento y uso practico de Bank conflicts.

  // S02.03 - Kernels
  "S02.03.01": pending(), // Kernel launch - Fundamento y uso practico de Kernel launch.
  "S02.03.02": pending(), // Thread indexing - Fundamento y uso practico de Thread indexing.
  "S02.03.03": pending(), // Synchronization - Fundamento y uso practico de Synchronization.
  "S02.03.04": pending(), // __syncthreads - Fundamento y uso practico de __syncthreads.
  "S02.03.05": pending(), // Atomic operations - Fundamento y uso practico de Atomic operations.
  "S02.03.06": pending(), // Tiled kernels - Fundamento y uso practico de Tiled kernels.
  "S02.03.07": pending(), // Asynchronous execution - Fundamento y uso practico de Asynchronous execution.
  "S02.03.08": pending(), // CUDA streams - Fundamento y uso practico de CUDA streams.
  "S02.03.09": pending(), // CUDA events - Fundamento y uso practico de CUDA events.

  // S02.04 - CUDA avanzado
  "S02.04.01": pending(), // CUDA graphs - Fundamento y uso practico de CUDA graphs.
  "S02.04.02": pending(), // Cooperative groups - Fundamento y uso practico de Cooperative groups.
  "S02.04.03": pending(), // Multi-GPU programming - Fundamento y uso practico de Multi-GPU programming.
  "S02.04.04": pending(), // Driver API - Interfaz para comunicar sistemas mediante llamadas programaticas.
  "S02.04.05": pending(), // CUDA profiling - Fundamento y uso practico de CUDA profiling.
  "S02.04.06": pending(), // Nsight Systems - Fundamento y uso practico de Nsight Systems.
  "S02.04.07": pending(), // Nsight Compute - Fundamento y uso practico de Nsight Compute.

  // S03 - Distributed Training

  // S03.01 - Distributed computing
  "S03.01.01": pending(), // Distributed systems basics - Concepto clave: Distributed systems basics.
  "S03.01.02": pending(), // Communication overhead - Fundamento y uso practico de Communication overhead.
  "S03.01.03": pending(), // Network bandwidth - Fundamento y uso practico de Network bandwidth.
  "S03.01.04": pending(), // Latency - Fundamento y uso practico de Latency.
  "S03.01.05": pending(), // Synchronization - Fundamento y uso practico de Synchronization.
  "S03.01.06": pending(), // Fault tolerance - Fundamento y uso practico de Fault tolerance.

  // S03.02 - Parallelism
  "S03.02.01": pending(), // Data parallelism - Fundamento y uso practico de Data parallelism.
  "S03.02.02": pending(), // DistributedDataParallel - Fundamento y uso practico de DistributedDataParallel.
  "S03.02.03": pending(), // Gradient synchronization - Direccion de cambio usada para optimizar parametros.
  "S03.02.04": pending(), // All-reduce - Fundamento y uso practico de All-reduce.
  "S03.02.05": pending(), // Parameter synchronization - Concepto clave: Parameter synchronization.
  "S03.02.06": pending(), // Model parallelism - Fundamento y uso practico de Model parallelism.
  "S03.02.07": pending(), // Tensor parallelism - Fundamento y uso practico de Tensor parallelism.
  "S03.02.08": pending(), // Pipeline parallelism - Cadena ordenada de pasos de procesamiento.
  "S03.02.09": pending(), // Sequence parallelism - Fundamento y uso practico de Sequence parallelism.
  "S03.02.10": pending(), // Expert parallelism - Fundamento y uso practico de Expert parallelism.

  // S03.03 - Memory-efficient training
  "S03.03.01": pending(), // FSDP - Concepto tecnico de FSDP y su uso practico.
  "S03.03.02": pending(), // ZeRO - Fundamento y uso practico de ZeRO.
  "S03.03.03": pending(), // Parameter sharding - Fundamento y uso practico de Parameter sharding.
  "S03.03.04": pending(), // Optimizer sharding - Algoritmo que ajusta parametros durante el entrenamiento.
  "S03.03.05": pending(), // Gradient sharding - Direccion de cambio usada para optimizar parametros.
  "S03.03.06": pending(), // Activation checkpointing - Fundamento y uso practico de Activation checkpointing.
  "S03.03.07": pending(), // Distributed checkpointing - Concepto clave: Distributed checkpointing.

  // S04 - LLM Inference y Serving

  // S04.01 - Inference
  "S04.01.01": pending(), // Forward inference - Uso de un modelo entrenado para producir resultados.
  "S04.01.02": pending(), // Batch inference - Uso de un modelo entrenado para producir resultados.
  "S04.01.03": pending(), // Token generation - Unidad de texto usada para procesar lenguaje en modelos.
  "S04.01.04": pending(), // KV cache - Almacenamiento temporal para acelerar accesos repetidos.
  "S04.01.05": pending(), // Prefill - Fundamento y uso practico de Prefill.
  "S04.01.06": pending(), // Decode - Fundamento y uso practico de Decode.
  "S04.01.07": pending(), // Context length - Fundamento y uso practico de Context length.

  // S04.02 - Serving
  "S04.02.01": pending(), // Model server - Fundamento y uso practico de Model server.
  "S04.02.02": pending(), // Request batching - Fundamento y uso practico de Request batching.
  "S04.02.03": pending(), // Continuous batching - Fundamento y uso practico de Continuous batching.
  "S04.02.04": pending(), // Scheduling - Fundamento y uso practico de Scheduling.
  "S04.02.05": pending(), // Throughput - Fundamento y uso practico de Throughput.
  "S04.02.06": pending(), // Latency - Fundamento y uso practico de Latency.
  "S04.02.07": pending(), // Time to first token - Unidad de texto usada para procesar lenguaje en modelos.
  "S04.02.08": pending(), // Tokens per second - Unidad de texto usada para procesar lenguaje en modelos.

  // S04.03 - Optimizacion
  "S04.03.01": pending(), // Paged attention - Mecanismo para ponderar informacion relevante entre elementos.
  "S04.03.02": pending(), // Speculative decoding - Fundamento y uso practico de Speculative decoding.
  "S04.03.03": pending(), // Prefix caching - Fundamento y uso practico de Prefix caching.
  "S04.03.04": pending(), // Quantized inference - Uso de un modelo entrenado para producir resultados.
  "S04.03.05": pending(), // Memory optimization - Gestion o uso de informacion almacenada durante ejecucion.
  "S04.03.06": pending(), // GPU utilization - Fundamento y uso practico de GPU utilization.
  "S04.03.07": pending(), // Model parallel inference - Uso de un modelo entrenado para producir resultados.

  // S05 - Quantization, Compression y Optimization

  // S05.01 - Numerical precision
  "S05.01.01": pending(), // FP64 - Concepto tecnico de FP64 y su uso practico.
  "S05.01.02": pending(), // FP32 - Concepto tecnico de FP32 y su uso practico.
  "S05.01.03": pending(), // TF32 - Concepto tecnico de TF32 y su uso practico.
  "S05.01.04": pending(), // FP16 - Concepto tecnico de FP16 y su uso practico.
  "S05.01.05": pending(), // BF16 - Concepto tecnico de BF16 y su uso practico.
  "S05.01.06": pending(), // FP8 - Concepto tecnico de FP8 y su uso practico.

  // S05.02 - Quantization
  "S05.02.01": pending(), // Quantization basics - Fundamento y uso practico de Quantization basics.
  "S05.02.02": pending(), // Symmetric quantization - Indicador cuantitativo para comparar resultados.
  "S05.02.03": pending(), // Asymmetric quantization - Indicador cuantitativo para comparar resultados.
  "S05.02.04": pending(), // Calibration - Ajuste entre probabilidades predichas y frecuencias reales.
  "S05.02.05": pending(), // Post-training quantization - Proceso de ajuste de un modelo con datos.
  "S05.02.06": pending(), // Quantization-aware training - Proceso de ajuste de un modelo con datos.
  "S05.02.07": pending(), // INT8 - Concepto tecnico de INT8 y su uso practico.
  "S05.02.08": pending(), // INT4 - Concepto tecnico de INT4 y su uso practico.
  "S05.02.09": pending(), // GPTQ - Concepto tecnico de GPTQ y su uso practico.
  "S05.02.10": pending(), // AWQ - Concepto tecnico de AWQ y su uso practico.
  "S05.02.11": pending(), // GGUF - Concepto tecnico de GGUF y su uso practico.

  // S05.03 - Compression
  "S05.03.01": pending(), // Pruning - Fundamento y uso practico de Pruning.
  "S05.03.02": pending(), // Structured pruning - Fundamento y uso practico de Structured pruning.
  "S05.03.03": pending(), // Unstructured pruning - Fundamento y uso practico de Unstructured pruning.
  "S05.03.04": pending(), // Sparsity - Fundamento y uso practico de Sparsity.
  "S05.03.05": pending(), // Knowledge distillation - Fundamento y uso practico de Knowledge distillation.
  "S05.03.06": pending(), // Teacher-student models - Fundamento y uso practico de Teacher-student models.
  "S05.03.07": pending(), // Model merging - Fundamento y uso practico de Model merging.

  // S05.04 - Efficient kernels
  "S05.04.01": pending(), // Kernel fusion - Fundamento y uso practico de Kernel fusion.
  "S05.04.02": pending(), // FlashAttention - Mecanismo para ponderar informacion relevante entre elementos.
  "S05.04.03": pending(), // Memory-efficient attention - Mecanismo para ponderar informacion relevante entre elementos.
  "S05.04.04": pending(), // Tensor cores - Fundamento y uso practico de Tensor cores.
  "S05.04.05": pending(), // Triton kernels - Fundamento y uso practico de Triton kernels.
  "S05.04.06": pending(), // Kernel benchmarking - Prueba comparativa para medir rendimiento o calidad.

  // S06 - MLOps y ML Engineering

  // S06.01 - Experimentacion
  "S06.01.01": pending(), // Experiment tracking - Fundamento y uso practico de Experiment tracking.
  "S06.01.02": pending(), // Hyperparameter logging - Registro de eventos para diagnostico y auditoria.
  "S06.01.03": pending(), // Dataset versioning - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "S06.01.04": pending(), // Model versioning - Fundamento y uso practico de Model versioning.
  "S06.01.05": pending(), // Random seeds - Fundamento y uso practico de Random seeds.
  "S06.01.06": pending(), // Reproducibility - Fundamento y uso practico de Reproducibility.
  "S06.01.07": pending(), // Experiment metadata - Fundamento y uso practico de Experiment metadata.

  // S06.02 - Pipelines
  "S06.02.01": pending(), // Data pipelines - Cadena ordenada de pasos de procesamiento.
  "S06.02.02": pending(), // Training pipelines - Cadena ordenada de pasos de procesamiento.
  "S06.02.03": pending(), // Evaluation pipelines - Medicion sistematica del rendimiento de un sistema.
  "S06.02.04": pending(), // CI/CD - Fundamento y uso practico de CI/CD.
  "S06.02.05": pending(), // Model registry - Fundamento y uso practico de Model registry.
  "S06.02.06": pending(), // Artifact storage - Recuperacion de informacion externa para mejorar respuestas generadas.

  // S06.03 - Produccion
  "S06.03.01": pending(), // Deployment - Publicacion de un sistema para uso real.
  "S06.03.02": pending(), // Monitoring - Observacion continua del estado y rendimiento de un sistema.
  "S06.03.03": pending(), // Data drift - Fundamento y uso practico de Data drift.
  "S06.03.04": pending(), // Concept drift - Fundamento y uso practico de Concept drift.
  "S06.03.05": pending(), // Performance monitoring - Observacion continua del estado y rendimiento de un sistema.
  "S06.03.06": pending(), // Rollbacks - Fundamento y uso practico de Rollbacks.
  "S06.03.07": pending(), // Observability - Fundamento y uso practico de Observability.

  // S07 - AI Security y Privacy

  // S07.01 - Adversarial ML
  "S07.01.01": pending(), // Adversarial examples - Fundamento y uso practico de Adversarial examples.
  "S07.01.02": pending(), // Evasion attacks - Fundamento y uso practico de Evasion attacks.
  "S07.01.03": pending(), // White-box attacks - Fundamento y uso practico de White-box attacks.
  "S07.01.04": pending(), // Black-box attacks - Fundamento y uso practico de Black-box attacks.
  "S07.01.05": pending(), // Adversarial training - Proceso de ajuste de un modelo con datos.
  "S07.01.06": pending(), // Robustness evaluation - Medicion sistematica del rendimiento de un sistema.

  // S07.02 - LLM security
  "S07.02.01": pending(), // Prompt injection - Instruccion o contexto que guia la salida de un modelo.
  "S07.02.02": pending(), // Indirect prompt injection - Instruccion o contexto que guia la salida de un modelo.
  "S07.02.03": pending(), // Jailbreaks - Fundamento y uso practico de Jailbreaks.
  "S07.02.04": pending(), // Data exfiltration - Fundamento y uso practico de Data exfiltration.
  "S07.02.05": pending(), // Tool misuse - Fundamento y uso practico de Tool misuse.
  "S07.02.06": pending(), // Model extraction - Fundamento y uso practico de Model extraction.
  "S07.02.07": pending(), // Data poisoning - Fundamento y uso practico de Data poisoning.
  "S07.02.08": pending(), // Model poisoning - Fundamento y uso practico de Model poisoning.

  // S07.03 - Privacy
  "S07.03.01": pending(), // Membership inference - Uso de un modelo entrenado para producir resultados.
  "S07.03.02": pending(), // Model inversion - Fundamento y uso practico de Model inversion.
  "S07.03.03": pending(), // Data memorization - Fundamento y uso practico de Data memorization.
  "S07.03.04": pending(), // Differential privacy - Control del uso, exposicion y proteccion de datos personales.
  "S07.03.05": pending(), // Private aggregation - Fundamento y uso practico de Private aggregation.
  "S07.03.06": pending(), // Privacy-preserving ML - Control del uso, exposicion y proteccion de datos personales.

  // S07.04 - Supply chain
  "S07.04.01": pending(), // Model provenance - Fundamento y uso practico de Model provenance.
  "S07.04.02": pending(), // Dataset provenance - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "S07.04.03": pending(), // Dependency security - Practicas para proteger sistemas, datos y accesos.
  "S07.04.04": pending(), // Malicious models - Fundamento y uso practico de Malicious models.
  "S07.04.05": pending(), // Artifact integrity - Fundamento y uso practico de Artifact integrity.
  "S07.04.06": pending(), // Secure deployment - Publicacion de un sistema para uso real.

  // S08 - Interpretability y Mechanistic Interpretability

  // S08.01 - Interpretabilidad clasica
  "S08.01.01": pending(), // Feature visualization - Fundamento y uso practico de Feature visualization.
  "S08.01.02": pending(), // Saliency - Fundamento y uso practico de Saliency.
  "S08.01.03": pending(), // Attribution - Fundamento y uso practico de Attribution.
  "S08.01.04": pending(), // Integrated gradients - Direccion de cambio usada para optimizar parametros.
  "S08.01.05": pending(), // SHAP - Concepto tecnico de SHAP y su uso practico.
  "S08.01.06": pending(), // LIME - Concepto tecnico de LIME y su uso practico.
  "S08.01.07": pending(), // Probing - Fundamento y uso practico de Probing.

  // S08.02 - Mechanistic interpretability
  "S08.02.01": pending(), // Activations - Fundamento y uso practico de Activations.
  "S08.02.02": pending(), // Residual stream - Fundamento y uso practico de Residual stream.
  "S08.02.03": pending(), // Attention head analysis - Mecanismo para ponderar informacion relevante entre elementos.
  "S08.02.04": pending(), // MLP neurons - Fundamento y uso practico de MLP neurons.
  "S08.02.05": pending(), // Circuits - Fundamento y uso practico de Circuits.
  "S08.02.06": pending(), // Activation patching - Fundamento y uso practico de Activation patching.
  "S08.02.07": pending(), // Causal tracing - Fundamento y uso practico de Causal tracing.
  "S08.02.08": pending(), // Representation analysis - Fundamento y uso practico de Representation analysis.
  "S08.02.09": pending(), // Feature superposition - Fundamento y uso practico de Feature superposition.
  "S08.02.10": pending(), // Sparse autoencoders - Fundamento y uso practico de Sparse autoencoders.
  "S08.02.11": pending(), // Dictionary learning - Fundamento y uso practico de Dictionary learning.
  "S08.02.12": pending(), // Monosemanticity - Fundamento y uso practico de Monosemanticity.

  // R - Research

  // R01 - Metodo cientifico y metodologia experimental

  // R01.01 - Problemas e hipotesis
  "R01.01.01": pending(), // Definir un problema - Fundamento y uso practico de Definir un problema.
  "R01.01.02": pending(), // Research question - Fundamento y uso practico de Research question.
  "R01.01.03": pending(), // Hypothesis - Fundamento y uso practico de Hypothesis.
  "R01.01.04": pending(), // Falsifiability - Fundamento y uso practico de Falsifiability.
  "R01.01.05": pending(), // Assumptions - Fundamento y uso practico de Assumptions.
  "R01.01.06": pending(), // Scope - Zona del codigo donde un nombre es accesible.

  // R01.02 - Diseno experimental
  "R01.02.01": pending(), // Baseline - Fundamento y uso practico de Baseline.
  "R01.02.02": pending(), // Control - Fundamento y uso practico de Control.
  "R01.02.03": pending(), // Treatment - Fundamento y uso practico de Treatment.
  "R01.02.04": pending(), // Variables - Nombres que referencian valores u objetos en memoria.
  "R01.02.05": pending(), // Confounders - Fundamento y uso practico de Confounders.
  "R01.02.06": pending(), // Ablation study - Fundamento y uso practico de Ablation study.
  "R01.02.07": pending(), // Hyperparameter control - Fundamento y uso practico de Hyperparameter control.
  "R01.02.08": pending(), // Replicate experiments - Fundamento y uso practico de Replicate experiments.
  "R01.02.09": pending(), // Statistical significance - Fundamento y uso practico de Statistical significance.
  "R01.02.10": pending(), // Error analysis - Fallo o desviacion que debe detectarse, entenderse y corregirse.

  // R01.03 - Reproducibilidad
  "R01.03.01": pending(), // Reproducible environment - Fundamento y uso practico de Reproducible environment.
  "R01.03.02": pending(), // Dependency locking - Fundamento y uso practico de Dependency locking.
  "R01.03.03": pending(), // Seeds - Fundamento y uso practico de Seeds.
  "R01.03.04": pending(), // Dataset versioning - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "R01.03.05": pending(), // Experiment logs - Registro de eventos para diagnostico y auditoria.
  "R01.03.06": pending(), // Checkpoint preservation - Fundamento y uso practico de Checkpoint preservation.
  "R01.03.07": pending(), // Hardware documentation - Fundamento y uso practico de Hardware documentation.

  // R02 - Lectura y analisis de papers

  // R02.01 - Estructura de un paper
  "R02.01.01": pending(), // Abstract - Fundamento y uso practico de Abstract.
  "R02.01.02": pending(), // Introduction - Fundamento y uso practico de Introduction.
  "R02.01.03": pending(), // Related work - Fundamento y uso practico de Related work.
  "R02.01.04": pending(), // Method - Fundamento y uso practico de Method.
  "R02.01.05": pending(), // Experiments - Fundamento y uso practico de Experiments.
  "R02.01.06": pending(), // Results - Fundamento y uso practico de Results.
  "R02.01.07": pending(), // Limitations - Fundamento y uso practico de Limitations.
  "R02.01.08": pending(), // Appendix - Fundamento y uso practico de Appendix.
  "R02.01.09": pending(), // References - Fundamento y uso practico de References.

  // R02.02 - Evaluacion critica
  "R02.02.01": pending(), // Claim - Fundamento y uso practico de Claim.
  "R02.02.02": pending(), // Evidence - Fundamento y uso practico de Evidence.
  "R02.02.03": pending(), // Baseline quality - Fundamento y uso practico de Baseline quality.
  "R02.02.04": pending(), // Dataset quality - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "R02.02.05": pending(), // Evaluation metrics - Medicion sistematica del rendimiento de un sistema.
  "R02.02.06": pending(), // Statistical validity - Fundamento y uso practico de Statistical validity.
  "R02.02.07": pending(), // Reproducibility - Fundamento y uso practico de Reproducibility.
  "R02.02.08": pending(), // Limitations - Fundamento y uso practico de Limitations.
  "R02.02.09": pending(), // Possible confounders - Fundamento y uso practico de Possible confounders.

  // R03 - Paper Reproduction

  // R03.01 - Proceso de reproduccion
  "R03.01.01": pending(), // Selección de paper - Fundamento y uso practico de Selección de paper.
  "R03.01.02": pending(), // Identificación del código oficial - Concepto clave: Identificación del código oficial.
  "R03.01.03": pending(), // Identificación del dataset - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "R03.01.04": pending(), // Reproducción del preprocessing - Concepto clave: Reproducción del preprocessing.
  "R03.01.05": pending(), // Reproducción de la arquitectura - Diseño estructural de componentes y sus relaciones.
  "R03.01.06": pending(), // Reproducción del training - Proceso de ajuste de un modelo con datos.
  "R03.01.07": pending(), // Reproducción de métricas - Indicador cuantitativo para comparar resultados.
  "R03.01.08": pending(), // Comparación con paper - Fundamento y uso practico de Comparación con paper.
  "R03.01.09": pending(), // Análisis de discrepancias - Concepto clave: Análisis de discrepancias.

  // R04 - Advanced AI Theory

  // R04.01 - Probabilistic Machine Learning
  "R04.01.01": pending(), // Bayesian inference - Uso de un modelo entrenado para producir resultados.
  "R04.01.02": pending(), // Priors - Fundamento y uso practico de Priors.
  "R04.01.03": pending(), // Likelihood - Fundamento y uso practico de Likelihood.
  "R04.01.04": pending(), // Posterior - Fundamento y uso practico de Posterior.
  "R04.01.05": pending(), // MAP estimation - Fundamento y uso practico de MAP estimation.
  "R04.01.06": pending(), // MCMC - Concepto tecnico de MCMC y su uso practico.
  "R04.01.07": pending(), // Variational inference - Uso de un modelo entrenado para producir resultados.
  "R04.01.08": pending(), // Graphical models - Fundamento y uso practico de Graphical models.
  "R04.01.09": pending(), // Bayesian networks - Fundamento y uso practico de Bayesian networks.
  "R04.01.10": pending(), // Markov random fields - Fundamento y uso practico de Markov random fields.

  // R04.02 - Graph Machine Learning
  "R04.02.01": pending(), // Graph representation - Fundamento y uso practico de Graph representation.
  "R04.02.02": pending(), // Node embeddings - Representacion vectorial que captura significado o similitud.
  "R04.02.03": pending(), // Graph convolution - Fundamento y uso practico de Graph convolution.
  "R04.02.04": pending(), // Graph neural networks - Fundamento y uso practico de Graph neural networks.
  "R04.02.05": pending(), // Message passing - Fundamento y uso practico de Message passing.
  "R04.02.06": pending(), // Graph attention - Mecanismo para ponderar informacion relevante entre elementos.
  "R04.02.07": pending(), // Graph transformers - Arquitectura neuronal basada en atencion para secuencias.
  "R04.02.08": pending(), // Link prediction - Fundamento y uso practico de Link prediction.
  "R04.02.09": pending(), // Node classification - Tarea de asignar categorias a entradas.

  // R04.03 - Causal Machine Learning
  "R04.03.01": pending(), // Correlation vs causation - Fundamento y uso practico de Correlation vs causation.
  "R04.03.02": pending(), // Causal graphs - Fundamento y uso practico de Causal graphs.
  "R04.03.03": pending(), // DAGs - Fundamento y uso practico de DAGs.
  "R04.03.04": pending(), // Confounding - Fundamento y uso practico de Confounding.
  "R04.03.05": pending(), // Interventions - Fundamento y uso practico de Interventions.
  "R04.03.06": pending(), // Counterfactuals - Fundamento y uso practico de Counterfactuals.
  "R04.03.07": pending(), // Potential outcomes - Fundamento y uso practico de Potential outcomes.
  "R04.03.08": pending(), // Causal identification - Fundamento y uso practico de Causal identification.

  // R04.04 - Recommender Systems
  "R04.04.01": pending(), // Collaborative filtering - Fundamento y uso practico de Collaborative filtering.
  "R04.04.02": pending(), // Content-based recommendation - Concepto clave: Content-based recommendation.
  "R04.04.03": pending(), // Matrix factorization - Estructura bidimensional usada en algebra y computacion numerica.
  "R04.04.04": pending(), // Implicit feedback - Fundamento y uso practico de Implicit feedback.
  "R04.04.05": pending(), // Ranking - Fundamento y uso practico de Ranking.
  "R04.04.06": pending(), // Two-tower models - Fundamento y uso practico de Two-tower models.
  "R04.04.07": pending(), // Retrieval - Busqueda y recuperacion de informacion relevante.
  "R04.04.08": pending(), // Recommendation evaluation - Medicion sistematica del rendimiento de un sistema.

  // R04.05 - Robotics y Control
  "R04.05.01": pending(), // State estimation - Fundamento y uso practico de State estimation.
  "R04.05.02": pending(), // Control systems - Fundamento y uso practico de Control systems.
  "R04.05.03": pending(), // PID - Concepto tecnico de PID y su uso practico.
  "R04.05.04": pending(), // Kalman filter - Fundamento y uso practico de Kalman filter.
  "R04.05.05": pending(), // Model predictive control - Fundamento y uso practico de Model predictive control.
  "R04.05.06": pending(), // Motion planning - Fundamento y uso practico de Motion planning.
  "R04.05.07": pending(), // Imitation learning - Fundamento y uso practico de Imitation learning.
  "R04.05.08": pending(), // Reinforcement learning for robotics - Concepto clave: Reinforcement learning for robotics.
  "R04.05.09": pending(), // Sim-to-real - Fundamento y uso practico de Sim-to-real.

  // R05 - Research Engineering

  // R05.01 - Research code
  "R05.01.01": pending(), // Modular experiment code - Fundamento y uso practico de Modular experiment code.
  "R05.01.02": pending(), // Configuration management - Fundamento y uso practico de Configuration management.
  "R05.01.03": pending(), // Experiment launcher - Fundamento y uso practico de Experiment launcher.
  "R05.01.04": pending(), // Checkpoint management - Fundamento y uso practico de Checkpoint management.
  "R05.01.05": pending(), // Automatic evaluation - Medicion sistematica del rendimiento de un sistema.
  "R05.01.06": pending(), // Experiment metadata - Fundamento y uso practico de Experiment metadata.
  "R05.01.07": pending(), // Reproducible training - Proceso de ajuste de un modelo con datos.

  // R05.02 - Benchmarking
  "R05.02.01": pending(), // Benchmark design - Prueba comparativa para medir rendimiento o calidad.
  "R05.02.02": pending(), // Baselines - Fundamento y uso practico de Baselines.
  "R05.02.03": pending(), // Metric selection - Indicador cuantitativo para comparar resultados.
  "R05.02.04": pending(), // Throughput benchmark - Prueba comparativa para medir rendimiento o calidad.
  "R05.02.05": pending(), // Memory benchmark - Prueba comparativa para medir rendimiento o calidad.
  "R05.02.06": pending(), // Accuracy benchmark - Prueba comparativa para medir rendimiento o calidad.
  "R05.02.07": pending(), // Statistical comparison - Fundamento y uso practico de Statistical comparison.

  // R06 - Investigacion original y publicacion

  // R06.01 - Investigacion original
  "R06.01.01": pending(), // Literature gap - Fundamento y uso practico de Literature gap.
  "R06.01.02": pending(), // Novel hypothesis - Fundamento y uso practico de Novel hypothesis.
  "R06.01.03": pending(), // Novel architecture - Diseño estructural de componentes y sus relaciones.
  "R06.01.04": pending(), // Novel training method - Proceso de ajuste de un modelo con datos.
  "R06.01.05": pending(), // Novel dataset - Conjunto de datos usado para entrenamiento, prueba o analisis.
  "R06.01.06": pending(), // Novel evaluation method - Medicion sistematica del rendimiento de un sistema.
  "R06.01.07": pending(), // Experimental validation - Fundamento y uso practico de Experimental validation.
  "R06.01.08": pending(), // Ablation - Fundamento y uso practico de Ablation.
  "R06.01.09": pending(), // Error analysis - Fallo o desviacion que debe detectarse, entenderse y corregirse.
  "R06.01.10": pending(), // Limitations - Fundamento y uso practico de Limitations.

  // R06.02 - Technical writing
  "R06.02.01": pending(), // Paper structure - Fundamento y uso practico de Paper structure.
  "R06.02.02": pending(), // Technical abstract - Fundamento y uso practico de Technical abstract.
  "R06.02.03": pending(), // Method description - Fundamento y uso practico de Method description.
  "R06.02.04": pending(), // Experimental description - Fundamento y uso practico de Experimental description.
  "R06.02.05": pending(), // Results - Fundamento y uso practico de Results.
  "R06.02.06": pending(), // Tables - Fundamento y uso practico de Tables.
  "R06.02.07": pending(), // Figures - Fundamento y uso practico de Figures.
  "R06.02.08": pending(), // References - Fundamento y uso practico de References.
  "R06.02.09": pending(), // Limitations - Fundamento y uso practico de Limitations.
  "R06.02.10": pending(), // Reproducibility statement - Concepto clave: Reproducibility statement.

  // R06.03 - Publicacion
  "R06.03.01": pending(), // Technical report - Fundamento y uso practico de Technical report.
  "R06.03.02": pending(), // Preprint - Fundamento y uso practico de Preprint.
  "R06.03.03": pending(), // arXiv - Fundamento y uso practico de arXiv.
  "R06.03.04": pending(), // Conference submission - Fundamento y uso practico de Conference submission.
  "R06.03.05": pending(), // Peer review - Fundamento y uso practico de Peer review.
  "R06.03.06": pending(), // Open-source release - Fundamento y uso practico de Open-source release.
  "R06.03.07": pending(), // Model release - Fundamento y uso practico de Model release.
  "R06.03.08": pending(), // Dataset release - Conjunto de datos usado para entrenamiento, prueba o analisis.

};
