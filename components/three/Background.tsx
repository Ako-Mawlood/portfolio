"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import * as THREE from "three"
import { Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { fragmentShader } from "@/modules/glsl/fragmentShader"
import { vertexShader } from "@/modules/glsl/vertexShader"

export default function Background() {
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const [scroll, setScroll] = useState(0)
  const startedRef = useRef(false)

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        u_mouse: { value: new THREE.Vector2(0, 0) },
        u_resolution: { value: new THREE.Vector2(1920, 1080) },
        u_scroll: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setScroll(maxScroll > 0 ? scrollY / maxScroll : 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    shaderMaterial.uniforms.u_scroll.value = scroll * 3
  }, [scroll, shaderMaterial])

  useEffect(() => {
    const timer = setTimeout(() => {
      startedRef.current = true
    }, 5500)
    return () => clearTimeout(timer)
  }, [])

  useFrame(({ mouse }) => {
    if (!startedRef.current) return

    const targetX = (mouse.x + 1) * 0.8
    const targetY = (mouse.y + 1) * 0.8

    mouseRef.current.x += (targetX - mouseRef.current.x) * 0.05
    mouseRef.current.y += (targetY - mouseRef.current.y) * 0.05

    shaderMaterial.uniforms.u_mouse.value.copy(mouseRef.current)
  })

  return (
    <Plane args={[19, 12]}>
      <primitive object={shaderMaterial} />
    </Plane>
  )
}
