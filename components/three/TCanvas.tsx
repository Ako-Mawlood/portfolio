"use client"

import { useEffect, useState, useMemo } from "react"
import * as THREE from "three"

import { Canvas, useThree } from "@react-three/fiber"
import Background from "@/components/three/Background"

const ResponsiveCamera = () => {
  const { size } = useThree()
  const camera = useMemo(() => {
    const aspect = size.width / size.height
    return new THREE.OrthographicCamera(-1 * aspect, 1 * aspect, 1, -1, -10, 10)
  }, [size])

  useEffect(() => {
    camera.position.set(0, 0, 10)
    camera.updateProjectionMatrix()
  }, [camera, size])

  return <primitive object={camera} />
}

export default function TCanvas() {
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    setDpr(typeof window !== "undefined" ? window.devicePixelRatio : 1)
  }, [])

  return (
    <Canvas dpr={dpr}>
      <ResponsiveCamera />
      <Background />
    </Canvas>
  )
}
