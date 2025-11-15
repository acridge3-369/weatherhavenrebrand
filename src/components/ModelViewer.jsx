import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)

  return (
    <primitive 
      object={scene} 
      scale={1.8}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

function ModelViewer() {
  // GLB model path
  const modelPath = '/models/beige.glb'

  return (
    <>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <Environment preset="city" />
      <Model url={modelPath} />
    </>
  )
}

export default ModelViewer

