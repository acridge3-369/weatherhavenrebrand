import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelViewer from './components/ModelViewer'
import './App.css'

function App() {
  return (
    <div className="app">
      <section className="home-section">
        <h1 className="title">weatherhaven</h1>
      </section>
      <section className="showcase-section">
        <div className="canvas-container">
          <Canvas
            camera={{ position: [0, 0.5, 5], fov: 50 }}
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
      </section>
    </div>
  )
}

export default App

