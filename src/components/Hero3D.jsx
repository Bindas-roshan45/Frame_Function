import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function Hero3D() {
  const mountRef = useRef(null)
  const [hasWebGL] = useState(() => {
    if (typeof window === 'undefined') return true
    try {
      const testCanvas = document.createElement('canvas')
      return !!(testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
    } catch {
      return false
    }
  })
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (isReducedMotion || !hasWebGL) return

    // Three.js Scene Setup
    const scene = new THREE.Scene()

    const width = container.clientWidth || 400
    const height = container.clientHeight || 400
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 5.2

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      container.appendChild(renderer.domElement)
    } catch {
      setHasWebGL(false)
      return
    }

    // Geometry Group
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // 1. Core Polyhedron / Torus Knot with glossy reflective finish
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 3)
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x11131a,
      emissive: 0x1a0f35,
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false,
    })
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    mainGroup.add(coreMesh)

    // 2. Futuristic Outer Wireframe Cage (Electric Purple & Neon Blue accents)
    const wireGeometry = new THREE.IcosahedronGeometry(1.75, 1)
    const wireMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.3,
    })
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial)
    mainGroup.add(wireMesh)

    // 3. Orbiting Geometric Rings (Gyroscopic Frame representing "Frame & Function")
    const ring1Geometry = new THREE.TorusGeometry(2.1, 0.015, 16, 100)
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    })
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material)
    ring1.rotation.x = Math.PI / 3
    mainGroup.add(ring1)

    const ring2Geometry = new THREE.TorusGeometry(2.35, 0.012, 16, 100)
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0xc7f36b,
      transparent: true,
      opacity: 0.5,
    })
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material)
    ring2.rotation.y = Math.PI / 4
    mainGroup.add(ring2)

    // 4. Subtle Ambient Floating Particle Cloud
    const particleCount = 70
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xc7f36b,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    mainGroup.add(particles)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const purpleLight = new THREE.PointLight(0x8b5cf6, 4.5, 20)
    purpleLight.position.set(4, 3, 4)
    scene.add(purpleLight)

    const blueLight = new THREE.PointLight(0x38bdf8, 4.0, 20)
    blueLight.position.set(-4, -2, 3)
    scene.add(blueLight)

    const limeLight = new THREE.PointLight(0xc7f36b, 2.5, 15)
    limeLight.position.set(0, 4, -2)
    scene.add(limeLight)

    // Mouse Interaction
    let targetRotationX = 0
    let targetRotationY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      mouseX = x
      mouseY = y
      targetRotationY = mouseX * 0.7
      targetRotationX = -mouseY * 0.7
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Continuous gentle motion
      coreMesh.rotation.y = elapsedTime * 0.15
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2

      wireMesh.rotation.y = -elapsedTime * 0.22
      wireMesh.rotation.z = Math.cos(elapsedTime * 0.15) * 0.2

      ring1.rotation.z = elapsedTime * 0.18
      ring2.rotation.x = -elapsedTime * 0.14
      particles.rotation.y = elapsedTime * 0.05

      // Breathing scale
      const breathe = 1 + Math.sin(elapsedTime * 1.2) * 0.03
      coreMesh.scale.set(breathe, breathe, breathe)

      // Smooth mouse lerp
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)

      if (renderer) {
        renderer.dispose()
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
        }
      }

      coreGeometry.dispose()
      coreMaterial.dispose()
      wireGeometry.dispose()
      wireMaterial.dispose()
      ring1Geometry.dispose()
      ring1Material.dispose()
      ring2Geometry.dispose()
      ring2Material.dispose()
      particleGeo.dispose()
      particleMat.dispose()
    }
  }, [isReducedMotion, hasWebGL])

  // Fallback if reduced motion is requested or WebGL fails
  if (isReducedMotion || !hasWebGL) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#8B5CF6]/30 via-[#38BDF8]/20 to-[#C7F36B]/20 blur-2xl animate-pulse" />
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-3xl border border-white/10 glass-panel flex items-center justify-center rotate-12">
          <div className="w-32 h-32 rounded-2xl border border-[#38BDF8]/40 bg-[#171923]/80 flex items-center justify-center -rotate-6">
            <span className="text-3xl font-heading font-bold text-gradient-vibrant">F&F</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center select-none"
      aria-label="Interactive 3D Abstract Geometry representing Frame & Function"
    >
      {/* Background radial glow behind the 3D element */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#8B5CF6]/20 via-[#38BDF8]/15 to-transparent blur-3xl" />
      </div>
    </div>
  )
}
