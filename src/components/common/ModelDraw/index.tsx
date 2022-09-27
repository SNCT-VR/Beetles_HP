import React, { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Scene = () => {
  const fbx = useLoader(FBXLoader, '/assets/bee/bee.fbx')

  return <primitive object={fbx} scale={0.05} />
}

const ModelDraw: FC = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default ModelDraw
