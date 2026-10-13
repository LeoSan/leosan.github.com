# 🚀 Proyecto: e-Portafolio Modernizado de Leonard Cuenca

Este proyecto representa la transformación integral de un portafolio estático (HTML/jQuery) hacia una **Single Page Application (SPA)** moderna, construida con **React 18**, **Vite** y **Tailwind CSS**. 

El sitio está optimizado para su despliegue automatizado en **GitHub Pages**.

---

## 🛠️ Stack Tecnológico

- **Core:** React 18.2 (Hooks, Functional Components)
- **Tooling:** Vite (Build tool de ultra-alta velocidad)
- **Estilos:** Tailwind CSS (Diseño utilitario y responsivo)
- **Iconos:** React Icons (FontAwesome, Fa-Icons)
- **Enrutamiento:** React Router DOM (usando `HashRouter` para compatibilidad con GH Pages)
- **Despliegue:** Kit de automatización `gh-pages`

---

## 📂 Arquitectura del Proyecto

El proyecto sigue una estructura modular donde el **contenido** está separado de la **presentación**:

```text
leosan.github.com/
├── public/             # 🖼️ Assets estáticos (Imágenes, Videos, PDFs)
├── src/
│   ├── components/     # 🧩 Componentes reutilizables (Timeline, ProjectCard, UX)
│   ├── data/           # 📊 Archivos JS que centralizan toda la información (Content-as-code)
│   ├── pages/          # 📄 Vistas principales (Home, Experience, Developing, Contact)
│   ├── App.jsx         # 🚦 Orquestador de rutas y Layout global
│   └── main.jsx        # 🏁 Punto de entrada
├── package.json        # 📦 Scripts de construcción y despliegue
└── vite.config.js      # ⚙️ Configuración base y de rutas relativas
```

---

## 🚀 Guía de Desarrollo y Despliegue

### Requisitos Previos
- Node.js instalado (v16+)
- Git configurado

### 1. Instalación y Ejecución Local
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 2. Guardar cambios en el Código Fuente
Es fundamental subir tus cambios a la rama `master` para proteger tu código:
```bash
git add .
git commit -m "Descripción de tus cambios"
git push origin master
```

### 3. Publicación automática (Despliegue)
Hemos configurado un comando que compila el proyecto y lo sube automáticamente a la rama de producción (`gh-pages`):
```bash
npm run deploy
```
> [!IMPORTANT]
> El comando `deploy` ejecuta automáticamente `npm run build` antes de subir los archivos, asegurando que tu sitio web esté siempre actualizado con tus últimos cambios.

---

## ✅ Hitos Alcanzados de la Migración

- [x] **Arquitectura Base:** Migración completa de HTML/jQuery a React SPA.
- [x] **Experiencia Laboral:** Implementación de un componente `Timeline.jsx` interactivo y responsivo.
- [x] **Portafolio de Proyectos:** Creación de `ProjectCard.jsx` y centralización de datos en `src/data/projects.js` para evitar duplicidad de código.
- [x] **Sección de Contacto:** Diseño moderno basado en tarjetas con integración de redes sociales.
- [x] **Navegación Inteligente:** Implementación de `HashRouter` para evitar errores 404 al refrescar URLs en GitHub Pages.
- [x] **Optimización de Assets:** Rutas de imágenes corregidas para despliegue en servidor estático.

---

> *"Code is like humor. When you have to explain it, it’s bad."*
> — Cory House
