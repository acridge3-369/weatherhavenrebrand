import { useGLTF, OrbitControls, Environment } from '@react-three/drei'

function Model({ url, scale = 1.8, position = [1, 0, 0], rotation = [0, 0.3, 0] }) {
  const { scene } = useGLTF(url)

  return (
    <primitive 
      object={scene} 
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
}

function ModelViewer({ 
  enableInteractions = false, 
  modelPath = '/models/beige.glb',
  enableZoom = true,
  enablePan = true,
  enableRotate = true,
  restrictToHorizontal = false,
  target = [0, 0, 0],
  minDistance = null,
  maxDistance = null,
  modelScale = 1.8,
  modelPosition = [1, 0, 0],
  modelRotation = [0, 0.3, 0]
}) {
  const controlsProps = {
    enableZoom: enableInteractions && enableZoom,
    enablePan: enableInteractions && enablePan,
    enableRotate: enableInteractions && enableRotate,
    target: target,
    autoRotate: false,
    autoRotateSpeed: 0
  }

  if (restrictToHorizontal) {
    controlsProps.minPolarAngle = Math.PI / 2
    controlsProps.maxPolarAngle = Math.PI / 2
  }

  if (minDistance !== null) {
    controlsProps.minDistance = minDistance
  }
  if (maxDistance !== null) {
    controlsProps.maxDistance = maxDistance
  }

  return (
    <>
      <OrbitControls {...controlsProps} />
      <Environment preset="city" />
      <Model url={modelPath} scale={modelScale} position={modelPosition} rotation={modelRotation} />
    </>
  )
}

export default ModelViewer

