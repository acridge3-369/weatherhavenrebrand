import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)

  return (
    <primitive 
      object={scene} 
      scale={1} 
      position={[0, -1, 0]}
      rotation={[0, 0.314, 0]}
    />
  )
}

function ModelViewer() {
  // GLB model path
  const modelPath = '/models/Greenopenmodel.glb'

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

