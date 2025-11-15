import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)
  const meshRef = useRef()

  // Optional: Add rotation animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={1} 
      position={[0, 0, 0]}
    />
  )
}

function ModelViewer() {
  // Default to a placeholder path - user should replace with their GLB file path
  const modelPath = '/models/model.glb'

  return (
    <>
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
      />
      <Environment preset="city" />
      <Model url={modelPath} />
    </>
  )
}

export default ModelViewer

