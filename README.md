# Weatherhaven - 3D Showcase

A modern 3D model showcase application featuring a clean, minimalist design with interactive GLB model viewing.

## Description

This project displays a 3D model showcase with a prominent "weatherhaven" title and an interactive 3D viewer below. Built with React, Three.js, and React Three Fiber for smooth 3D rendering.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Place your GLB model file in the `public/models/` directory and name it `model.glb`, or update the path in `src/components/ModelViewer.jsx`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

- The home section displays "weatherhaven" in large, clean white letters
- The 3D showcase below allows you to:
  - Rotate the model by clicking and dragging
  - Zoom in/out with the mouse wheel
  - Pan by right-clicking and dragging (or middle mouse button)

## Features

- Clean, modern UI with large typography
- Interactive 3D model viewer with OrbitControls
- Smooth animations and lighting
- Responsive design for mobile and desktop
- GLB/GLTF model support

## Project Structure

```
├── public/
│   └── models/          # Place your GLB files here
├── src/
│   ├── components/
│   │   └── ModelViewer.jsx  # 3D model viewer component
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## Customization

To use your own GLB model:
1. Place your `.glb` file in `public/models/`
2. Update the `modelPath` variable in `src/components/ModelViewer.jsx` to match your filename

## License

Specify your license here.

