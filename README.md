# Portfolio CV - Luis María Galindo García

Portfolio profesional construido con Astro y desplegado en GitHub Pages:

https://lmcreator-dev.github.io/CV/

## Desarrollo local

```sh
npm ci
npm run dev
```

## Build de producción

```sh
npm run build
```

El sitio se genera en `dist/`.

## Despliegue

El despliegue se ejecuta automáticamente con GitHub Actions al hacer push a `main`.

Para que GitHub Pages use el workflow:

1. Ve a `Settings > Pages`.
2. En `Build and deployment`, selecciona `GitHub Actions`.
3. Haz push a `main`.

## Estructura

- `src/data/cv.ts`: contenido editable del CV.
- `src/components/`: secciones del portfolio.
- `src/components/ui/`: componentes reutilizables.
- `src/styles/global.css`: estilos globales y responsive.
- `public/projects/`: assets visuales de proyectos.
