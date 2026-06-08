/**
 * Renders the persistent 3D "Digital Galaxy" background using @react-three/fiber.
 * Implements a "Connected Nodes / Constellation Network" style representing
 * DevOps infrastructure (Kubernetes nodes, microservices).
 */

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import type { Group } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      lineSegments: any
      bufferGeometry: any
      bufferAttribute: any
      lineBasicMaterial: any
    }
  }
}

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
 * Internal constellation: a network of nodes connected by lines that rotates.
 */
const NetworkConstellation: React.FC<{ pointer: GalaxyPointer }> = ({ pointer }) => {
  const groupRef = useRef<Group | null>(null)

  /**
   * Generate pseudo-random positions for nodes and their connections.
   */
  const { nodePositions, linePositions, dustPositions } = useMemo(() => {
    const nodeCount = 180
    const dustCount = 800
    
    // Arrays for nodes and dust
    const nodePosArray = new Float32Array(nodeCount * 3)
    const dustPosArray = new Float32Array(dustCount * 3)
    const points: [number, number, number][] = []

    // 1. Generate Main Nodes (Microservices / Servers)
    for (let i = 0; i < nodeCount; i++) {
      // Create a cylindrical/spherical distribution
      const radius = 5 + Math.random() * 12
      const theta = Math.random() * 2 * Math.PI
      const y = (Math.random() - 0.5) * 15

      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      nodePosArray[i * 3] = x
      nodePosArray[i * 3 + 1] = y
      nodePosArray[i * 3 + 2] = z
      
      points.push([x, y, z])
    }

    // 2. Generate Connections (Lines) between nearby nodes
    const lineArr: number[] = []
    const maxDistance = 3.5 // Connect nodes if they are within this distance

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = points[i][0] - points[j][0]
        const dy = points[i][1] - points[j][1]
        const dz = points[i][2] - points[j][2]
        const distSq = dx * dx + dy * dy + dz * dz

        if (distSq < maxDistance * maxDistance) {
          lineArr.push(points[i][0], points[i][1], points[i][2])
          lineArr.push(points[j][0], points[j][1], points[j][2])
        }
      }
    }

    // 3. Generate Ambient Dust (Cosmic background noise)
    for (let i = 0; i < dustCount * 3; i += 3) {
      const radius = 8 + Math.random() * 20
      const theta = Math.random() * 2 * Math.PI
      const y = (Math.random() - 0.5) * 20

      dustPosArray[i] = Math.cos(theta) * radius
      dustPosArray[i + 1] = y
      dustPosArray[i + 2] = Math.sin(theta) * radius
    }

    return { 
      nodePositions: nodePosArray, 
      linePositions: new Float32Array(lineArr),
      dustPositions: dustPosArray
    }
  }, [])

  /**
   * Animate slow rotation plus pointer-based parallax.
   */
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    
    // Slow continuous rotation
    const baseRotationY = t * 0.03
    const baseRotationX = Math.sin(t * 0.05) * 0.1

    // Add pointer interaction (parallax)
    groupRef.current.rotation.y = baseRotationY + pointer.x * 0.3
    groupRef.current.rotation.x = baseRotationX + pointer.y * 0.2
  })

  return (
    <group ref={groupRef}>
      {/* Connected Network Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          attach="material" 
          color="#06b6d4" // Cyan-500
          transparent 
          opacity={0.15} 
          depthWrite={false}
        />
      </lineSegments>

      {/* Main Network Nodes */}
      <Points positions={nodePositions} stride={3}>
        <PointMaterial
          transparent
          size={0.12}
          sizeAttenuation
          depthWrite={false}
          vertexColors={false}
          color="#22d3ee" // Cyan-400
        />
      </Points>

      {/* Ambient Cosmic Dust */}
      <Points positions={dustPositions} stride={3}>
        <PointMaterial
          transparent
          size={0.04}
          sizeAttenuation
          depthWrite={false}
          vertexColors={false}
          color="#a855f7" // Purple-500
          opacity={0.4}
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
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#030712']} />
        <NetworkConstellation pointer={pointer} />
      </Canvas>
    </div>
  )
}

export default GalaxyBackground
