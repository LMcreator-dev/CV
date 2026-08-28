# Portfolio CV - Luis Galindo

Portfolio profesional construido con Astro y desplegado en GitHub Pages:

https://lmcreator-dev.github.io/CV/

## Stack

- Astro 6
- TypeScript
- CSS global sin framework externo
- GitHub Pages mediante GitHub Actions

## Desarrollo local

```sh
npm ci
npm run dev
```

La ruta local usa el `base` configurado para GitHub Pages:

```text
http://localhost:4321/CV/
```

## Build

```sh
npm run build
```

El sitio estático se genera en `dist/`.

## Estructura Principal

- `src/pages/index.astro`: composición de secciones del portfolio.
- `src/data/cv.ts`: datos editables del CV, proyectos, certificaciones y conocimientos.
- `src/data/horus/`: currículo HORUS y registro de progreso.
- `src/components/`: secciones principales.
- `src/components/ui/`: tarjetas y componentes reutilizables.
- `src/styles/global.css`: estilos globales, navegación horizontal y responsive.
- `public/`: imágenes y assets públicos.

## HORUS

HORUS es el índice de formación en IA, programación, sistemas, matemáticas e investigación.

El currículo vive en `src/data/horus/` y el progreso se registra en:

```text
src/data/horus/progress.ts
```

Formato habitual:

```ts
"G01.01.01": pending(),
"G01.01.02": pending(2),
"G01.01.03": done(4, "17/08/2026"),
"G01.01.04": done(4, "17/08/2026", 1.5),
```

`done(nivel, fecha, horas)` usa la misma fecha como inicio y fin. Para casos especiales se puede usar `custom(...)`.

Los niveles de maestría son:

- `0`: no conocido
- `1`: familiaridad
- `2`: comprensión
- `3`: implementación
- `4`: dominio
- `5`: investigación

## Conocimientos

La sección `Conocimientos` combina:

- Conocimientos manuales definidos en `src/data/cv.ts`.
- Conocimientos conectados con HORUS para reflejar aprendizaje real dentro del portfolio.

Así, al actualizar `progress.ts`, los temas estudiados aparecen también en el portfolio sin duplicar datos.

## Despliegue

El despliegue se ejecuta automáticamente al hacer push a `main`.

GitHub Pages debe estar configurado en:

```text
Settings > Pages > Build and deployment > GitHub Actions
```
