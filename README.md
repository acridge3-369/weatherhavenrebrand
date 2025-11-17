# Weatherhaven - Rebrand Website

A modern, responsive website showcasing Weatherhaven's deployable infrastructure solutions including soft shelters, expanding shelters, and accessories.

## Description

This project is a comprehensive website for Weatherhaven featuring:
- **Home Page**: Hero section with 3D model showcase
- **Military Page**: Showcases military applications and deployment locations
- **Products Page**: Overview of product categories
- **Product Detail Pages**: 
  - Soft Shelters (Modular Tent System, Series 4, Series 8, MEX-26, Polar Shelters, RDMSS)
  - Expanding Shelters (MECC, EHMECC, TRECC, HERCon, ATEPS)
  - Accessories (Solar Shades, Interconnectors and Corridors)

Built with React, React Router, Three.js, and React Three Fiber for interactive 3D model viewing.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rebrand
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Place GLB model files in the `public/models/` directory

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Features

- **Multi-page Navigation**: Home, Military, Products, and product detail pages
- **3D Model Viewer**: Interactive GLB model viewing with customizable controls
- **Responsive Design**: Mobile and desktop optimized
- **Product Showcases**: Grid layouts for product categories with images and descriptions
- **Location Modal**: Interactive map showing military deployment locations
- **Modern UI**: Clean design with consistent styling across all pages

## Project Structure

```
├── public/
│   ├── models/          # GLB 3D model files
│   └── *.jpg, *.png     # Image assets
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── ModelViewer.jsx      # 3D model viewer component
│   │   └── LocationsModal.jsx   # Military locations modal
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── Military.jsx         # Military applications page
│   │   ├── Products.jsx         # Products overview page
│   │   ├── SoftShelters.jsx     # Soft shelters detail page
│   │   ├── ExpandingShelters.jsx # Expanding shelters detail page
│   │   └── Accessories.jsx      # Accessories detail page
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Entry point
└── package.json
```

## Pages

### Home
- Hero section with 3D model showcase
- Non-zoomable model viewer

### Military
- Military applications list
- Image showcases for various applications
- Military locations button with interactive modal
- Deployment locations around the world

### Products
- Overview of three main categories:
  - Soft Shelters
  - Expanding Shelters
  - Accessories
- Links to detailed product pages

### Product Detail Pages
Each product category page includes:
- Hero section
- Product description
- Grid layout of individual products with:
  - Product titles
  - Image placeholders
  - Descriptions

## Customization

### Adding New Models
1. Place your `.glb` file in `public/models/`
2. Update the `modelPath` prop in the component using `ModelViewer`

### Styling
- Main styles: `src/App.css`
- Page-specific styles: `src/pages/*.css`
- Component styles: `src/components/*.css`

## Technologies Used

- React
- React Router
- Three.js
- React Three Fiber
- @react-three/drei
- Vite

## License

Specify your license here.
