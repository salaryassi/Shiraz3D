# Interactive 3D Portfolio

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
# Project Report: Real-Time Interactive 3D Environments on the Web

**Project Title:** An In-Depth Study of a WebGL-based Interactive 3D Scene
**Author:** Zohreh Sabouri
**Foundation:** Based on analysis and extension of Bruno Simon’s open-source project [*my-room-in-3d*](https://github.com/brunosimon/my-room-in-3d), this project serves as a practical case study in modern web-based computer graphics.

---

## 1. Project Overview

### 1.1 Introduction

This project explores the creation of an interactive, high-fidelity 3D environment rendered directly in the browser. It demonstrates the entire graphics pipeline: from **3D modeling in Blender**, **baking lighting for performance**, and **asset export in glTF**, to **interactive rendering with Three.js** and **custom GPU shaders**.

### 1.2 Objectives

* Develop fluency in **Three.js** as an abstraction of WebGL.
* Establish a **digital asset pipeline**: modeling, UV mapping, texturing, baking, and optimization.
* Architect a **modular, maintainable JavaScript codebase**.
* Implement **GLSL shaders** for effects like glowing screens.
* Apply **performance optimizations** for real-time rendering across desktop and mobile.

---

## 2. Core Technologies

* **Three.js** – High-level library that simplifies WebGL.
* **WebGL** – Browser API providing GPU acceleration.
* **GLSL Shaders** – Custom GPU programs for vertex and fragment manipulation.
* **Blender** – Asset creation, UV unwrapping, and baking.
* **glTF / .glb** – Optimized format for 3D assets on the web.
* **Webpack** – Module bundler for modern JavaScript projects.

---

## 3. The Digital Asset Pipeline

1. **Modeling in Blender** – Low-polygon meshes were created for performance.
2. **UV Unwrapping** – Flattening meshes into 2D space for texture mapping.
3. **Lighting & Baking** – Shadows and ambient occlusion precomputed in Blender, reducing real-time GPU load.
4. **Export to glTF (.glb)** – Compact format containing geometry, materials, and textures.
5. **Asynchronous Loading** – Managed via Three.js `GLTFLoader` to integrate models into the scene.

---

## 4. Software Architecture

The codebase follows **object-oriented modular design**, making it scalable and easy to debug.

* **Experience.js** – Core singleton orchestrating the app.
* **Sizes.js** – Handles viewport resizing.
* **Time.js** – Manages delta time and animation loop.
* **Camera.js** – Configures perspective view and user controls.
* **Renderer.js** – Sets up WebGL renderer and draws frames.
* **Resources.js** – Loads and manages assets asynchronously.
* **World.js** – Constructs the scene, applies environments, and custom materials.

---

## 5. Custom Shaders with GLSL

To create dynamic effects (e.g., glowing computer screens), custom shaders were written.

* **Vertex Shader** – Calculates position of each vertex.
* **Fragment Shader** – Defines per-pixel color and glow.
* **Uniforms** – Variables like `uTime` (animated glow), `uColor`, and `uIntensity` passed from JavaScript allow interactive, real-time updates.

---

## 6. Performance Optimizations

* **Matcap Materials** – Fake lighting via textures instead of costly real-time lights.
* **Baked Shadows** – Precomputed in Blender to save GPU cycles.
* **Reduced Poly Count** – Lightweight meshes for efficiency.
* **Mobile Adaptation** – Lower pixel ratio, disabled blur effects, and touch-based UI controls.

---

## 7. Project Directory Structure

The project is organized into a **clean and professional folder structure**, separating source code, assets, and build configuration. This approach ensures scalability and maintainability.

```
/
├── dist/                   # Generated production build files (do not edit directly)
├── bundler/                # Webpack configuration files
│   ├── webpack.common.js   # Base config for both dev and prod
│   ├── webpack.dev.js      # Config for the development server
│   └── webpack.prod.js     # Config for the production build (e.g., minification)
├── static/                 # Static assets copied directly to the build
│   └── baked.glb           # The main 3D model of the room
│   └── ...                 # Other assets like textures or environment maps
├── src/                    # Source code of the application
│   ├── Experience/         # Core Three.js logic, organized into classes
│   │   ├── Utils/          # Helper classes (Time, Sizes, etc.)
│   │   ├── shaders/        # GLSL shader code for custom materials
│   │   ├── Camera.js
│   │   ├── Renderer.js
│   │   ├── Resources.js
│   │   └── World.js
│   ├── index.html          # Main HTML template, includes <canvas>
│   ├── style.css           # CSS for loading screen, UI, credits, etc.
│   └── script.js           # Entry point, instantiates Experience class
├── .gitignore              # Specifies files/folders to ignore in Git
├── package.json            # Lists dependencies & npm scripts
└── README.md               # Project documentation
```

### Explanation of Key Directories and Files

* **dist/** – Final optimized output after `npm run build`. Do not edit manually.
* **bundler/** – Webpack configs for dev, prod, and shared. Enables optimized builds.
* **static/** – Stores assets (models, textures, fonts). Copied directly to `dist/`.
* **src/index.html** – Base HTML template containing the `<canvas>` for rendering.
* **src/style.css** – Styles for UI, loading screen, and overlay text.
* **src/script.js** – Main JS entry, sets up the 3D scene via `Experience`.
* **src/Experience/** – Core Three.js logic (camera, renderer, resources, shaders, world).

---

## 8. Results

The final application demonstrates:

* Efficient **real-time rendering** of a complex 3D scene.
* A balanced mix of **prebaked lighting** and **interactive shaders**.
* A **clean, modular architecture** suitable for extension.

---

## 9. Future Enhancements

* **Interactive Objects** – Click-based raycasting to trigger animations.
* **Physics Integration** – Add Cannon.js for realistic interactions.
* **Post-Processing Effects** – Bloom, depth of field, cinematic glow.
* **Dynamic Asset Loading** – Progressive streaming for larger environments.

---

## 10. Conclusion

This project demonstrates how **modern web technologies (WebGL + Three.js)**, combined with a solid **asset pipeline (Blender + glTF)**, enable immersive, interactive 3D experiences in the browser. The combination of **software engineering**, **shader programming**, and **3D artistry** results in a professional, optimized, and scalable application.

