/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/suru3d/suru_universal_madeira_2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Suru(props) {
  const { nodes, materials } = useGLTF('./suru3d/suru_universal_madeira.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_1_Madeira_.geometry} material={materials.Madeira_Image_Texture} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('./suru3d/suru_universal_madeira.gltf')