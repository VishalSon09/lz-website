import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import scene from '/models/prism.glb'

const Prism = ({ onRayOver, onRayOut, onRayMove, ...props }) => {
  const { nodes } = useGLTF(scene)

  const geometry = useMemo(() => nodes?.Cone?.geometry, [nodes])

  if (!geometry) {
    console.error("GLTF model does not contain expected geometry 'Cone'.")
    return null
  }

  return (
    <group {...props}>
      {/* A low-res, invisible representation of the prism that gets hit by the raycaster */}
      <mesh visible={false} scale={1.9} rotation={[Math.PI / 2, Math.PI, 0]} onRayOver={onRayOver} onRayOut={onRayOut} onRayMove={onRayMove}>
        <cylinderGeometry args={[1, 1, 1, 3, 1]} />
      </mesh>
      {/* The visible hi-res prism */}
      <mesh position={[0, 0, 0.6]} renderOrder={10} scale={2} dispose={null} geometry={geometry}>
        <MeshTransmissionMaterial clearcoat={1} transmission={1} thickness={0.9} roughness={0} anisotropy={0.1} chromaticAberration={1} toneMapped={false} />
      </mesh>
    </group>
  )
}

export default Prism
