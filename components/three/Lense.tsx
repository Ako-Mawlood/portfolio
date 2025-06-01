"use client"

import { useRef, FC } from "react"
import * as THREE from "three"
import { Circle, useTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

export const Lense: FC = () => {
  const ref = useRef<THREE.Mesh>(null)
  const texture = useTexture("/assets/textures/lense.png")
  const { aspect } = useThree(({ viewport }) => viewport)

  const target = new THREE.Vector3()
  useFrame(({ mouse }) => {
    target.set(mouse.x, mouse.y, 0.01)
    ref.current!.position.lerp(target, 0.1)
  })

  return (
    <Circle
      ref={ref}
      args={[0.23, 50]}
      position-z={0.01}
      scale={[1 / aspect, 1, 1]}
    >
      <meshBasicMaterial map={texture} transparent />
    </Circle>
  )
}
