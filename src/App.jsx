import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelViewer from './components/ModelViewer'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <section className="home-section">
        <div className="title-container">
          <h1 className="title">weatherhaven</h1>
          <p className="slogan">Rapidly Deploying Mobile Infrastructure Anywhere in the World</p>
        </div>
      </section>
      <section className="showcase-section">
        <div className="showcase-content">
          <div className="canvas-container">
            <Canvas
              camera={{ position: [0, 0.5, 7], fov: 50 }}
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
        </div>
      </section>
    </div>
  )
}

export default App

