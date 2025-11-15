import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelViewer from './components/ModelViewer'
import Header from './components/Header'
import './App.css'

function App() {
  const [showMap, setShowMap] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    '/387_uk_RDMSS-Deployed-Behind-Barbed-Wire-1024x683.jpg',
    '/002_peru_weatherhaven-peru-home-military.jpg',
    '/384_uk_Union-Glacier-Camp-scaled-e1755698384522-1024x450.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="app">
      <Header />
      <section className="home-section">
        <div className="title-container">
          <h1 className="title">weatherhaven</h1>
          <p className="slogan">Rapidly Deploying Mobile Infrastructure Anywhere in the World</p>
        </div>
      </section>
      <section className="applications-section">
        <div className="applications-content">
          <h2 className="applications-title">Operating Where Others Can't</h2>
          <ul className="applications-list">
            <li>Sheltering Troops</li>
            <li>Mobile Centres and Field Hospitals</li>
            <li>Mining, Construction and Research/Exploration</li>
          </ul>
          <div className="slideshow-container">
            {slides.map((slide, index) => {
              const position = (index - currentSlide + slides.length) % slides.length
              return (
                <img
                  key={index}
                  src={slide}
                  alt={`Weatherhaven deployment ${index + 1}`}
                  className={`slideshow-image ${position === 0 ? 'active' : ''} position-${position}`}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <div className="showcase-content">
          <div className="canvas-container">
            <Canvas
              camera={{ position: [2.5, 3, 13], fov: 50 }}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />
              <Suspense fallback={null}>
                <ModelViewer />
              </Suspense>
            </Canvas>
          </div>
          <div className="bullet-points">
            <ul className="bullet-list">
              <li>Rapid & Redeployable</li>
              <li>Customized to Your Deployment Needs</li>
              <li>Built to LAST</li>
            </ul>
          </div>
          <h3 className="customize-title">Customize to Your Needs</h3>
          <a 
            href="https://configurator-ecru.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="configure-button"
          >
            Configure Shelter
          </a>
        </div>
      </section>
      <section className="global-reach-section">
        <div className="global-reach-content">
          <h2 className="global-reach-title">Global Reach</h2>
          <p className="global-reach-text">95 countries across all 7 continents. Founded in 1981.</p>
          <button className="deployment-map-button" onClick={() => setShowMap(!showMap)}>
            Deployment Map
          </button>
          {showMap && (
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1WjBWwEmcEb7M-4sl1pXu_b3MwyBTUm96&ehbc=2E312F" 
                width="100%" 
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default App

