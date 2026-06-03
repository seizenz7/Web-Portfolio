/**
 * Renders the persistent 3D "Digital Galaxy" background using @react-three/fiber.
 * A lightly rotating starfield responds subtly to cursor movement.
 */

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import type { Group } from 'three'

/**
 * Normalized pointer coordinates for galaxy parallax interaction.
 */
export interface GalaxyPointer {
  /** Horizontal movement normalized to [-1, 1]. */
  x: number
  /** Vertical movement normalized to [-1, 1]. */
  y: number
}

/**
 * Props for the GalaxyBackground component.
 */
export interface GalaxyBackgroundProps {
  /** Normalized pointer position driving subtle parallax rotation. */
  pointer: GalaxyPointer
}

/**
 * Internal starfield: a cloud of points that slowly rotates and reacts to pointer.
 */
const StarField: React.FC<{ pointer: GalaxyPointer }> = ({ pointer }) => {
  const groupRef = useRef<Group | null>(null)

  /**
   * Generate pseudo-random positions for stars once.
   */
  const positions = useMemo(() => {
    const count = 1500
    const positionsArray = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      const radius = 8 + Math.random() * 14
      const angle = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 8

      positionsArray[i] = Math.cos(angle) * radius
      positionsArray[i + 1] = y
      positionsArray[i + 2] = Math.sin(angle) * radius
    }

    return positionsArray
  }, [])

  /**
   * Animate slow rotation plus pointer-based parallax.
   */
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    const baseRotation = t * 0.02

    groupRef.current.rotation.y = baseRotation + pointer.x * 0.25
    groupRef.current.rotation.x = 0.12 + pointer.y * 0.15
  })

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          vertexColors={false}
          color="#2dd4bf"
        />
      </Points>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          size={0.04}
          sizeAttenuation
          depthWrite={false}
          vertexColors={false}
          color="#a855f7"
        />
      </Points>
    </group>
  )
}

/**
 * GalaxyBackground mounts a full-viewport Canvas behind all content, rendering
 * the interactive "Digital Galaxy" starfield.
 */
const GalaxyBackground: React.FC<GalaxyBackgroundProps> = ({ pointer }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#030712']} />
        <StarField pointer={pointer} />
      </Canvas>
    </div>
  )
}

export default GalaxyBackground
