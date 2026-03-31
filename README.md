# Proyecto: e-Portafolio de Leonard Cuenca 🚀

Este proyecto es la modernización del portafolio estático heredado hacia una arquitectura moderna, escalable y mantenible basada en componentes de React, construida sobre el ecosistema de Vite y estilizada mediante Tailwind CSS. 

Todo este proceso está diseñado para poder operar puramente como un entorno de páginas estáticas hospedables gratuitamente en GitHub Pages.

## 🏗️ Estrategia de Migración Iterativa (Filosofía Kaizen)

El enfoque principal del proyecto es realizar mejoras continuas (Kaizen) bloque por bloque, sin paralizar la aplicación.

**Flujo de Trabajo Acordado:**
1. Desarrollar y ensayar en una rama de `desarrollo` (development branch).
2. Aislar un elemento visual del antiguo código heredado (Bootstrap/jQuery).
3. Transformar su maqueta a variables y utilidades de **Tailwind CSS**.
4. Convertir la estructura aislada en un componente modular funcional de **React** (`.jsx`).
5. Migrar progresivamente los antiguos efectos Javascript / CSS complejos al nuevo sistema globalizado de enrutamiento y módulos de React (`src/utils/` o `src/assets/`).

---

## 📂 Arquitectura Contemporánea de Directorios

La estructura del código busca una separación holística de preocupaciones para que el proyecto sea monolítico, pero altamente ordenado:

```text
leosan.github.com/
├── legacy_backup/      # 📦 Backup sagrado e intocable de la versión anterior cruda (HTML/JS/CSS puros).
├── public/             # 📂 Archivos estáticos crudos que NO se compilan (imágenes base, CV).
├── src/                # 💻 Entorno principal del código fuente React/Vite.
│   ├── assets/         # CSS y recursos que requieren compilación (Aquí vive effects.css).
│   ├── components/     # Piezas maestras de UI modular y responsiva (ej: Header.jsx).
│   ├── data/           # Repositorio estático (Constantes o JSONs con metadata o experiencia).
│   ├── hooks/          # Hooks lógicos reutilizables.
│   ├── layouts/        # Envolturas de diseño estructural transversal.
│   ├── pages/          # Vistas únicas o páginas de anclaje integrales (ej: Home, About).
│   ├── utils/          # Herramientas puente para correr efectos .js heredados.
│   ├── App.jsx         # Orquestador del Layout.
│   └── main.jsx        # Entry-point al DOM renderizado de React.
├── index.html          # HTML Único de compilación (Punto de anclaje React).
└── tailwind.config.js  # Reglas de utilidad y override sobre clases base.
```

---

## ✅ Trazabilidad de Tareas y Componentes Migrados

Actualmente nos encontramos en pleno proceso inicial de refactorización hacia un ecosistema en React.

### Fase 1: Arquitectura y Header (DONE)
- [x] Limpieza del entorno de construcción Vite (Supresión de carpetas fantasma `t-vite`).
- [x] Establecimiento de estructura de carpetas modular (`src/*`).
- [x] Inserción de un puente lógico para migrar la antigua manipulación del DOM y los estilos heredados (`utils/effects.js` y `assets/effects.css`).
- [x] **Componente Creado:** `Header.jsx`. El encabezado principal ahora es modular. Contiene la animación de rotación del Logo y la carga iterativa y personalizada de las "Hero Words" del portafolio orientadas hacia el Análisis de Datos y Desarrollo de Software.

### Fase 2: Componentización del Cuerpo (IN PROGRESS)
- [ ] **NEXT UP:** Sliders de imágenes `MainSlider.jsx`. Extraer los assets estáticos y emular/mejorar la funcionalidad usando lógica reactiva en lugar de viejos plug-ins acoplados (jQuery FW slider).
- [ ] Grilla de Habilidades (Main Grid).
- [ ] Sección de Efectos de Paralaje (Parallax Capture).
- [ ] Componentización del Footer Modular.

---

> *"Change is the end result of all true learning."*
> — Leo Buscaglia
