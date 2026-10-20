import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  maxTilt = 7,
  scaleOnHover = 1.02,
  glare = true,
  onClick,
  ...props
}) {
  const cardRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for tilt angles
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for buttery-smooth rotation and auto-reset
  const rotateX = useSpring(y, { stiffness: 260, damping: 24 })
  const rotateY = useSpring(x, { stiffness: 260, damping: 24 })

  // Glare position
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Normalize from -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5

    // Set rotation (rotateX tilts along horizontal axis based on Y movement)
    x.set(xPct * maxTilt * 2)
    y.set(-yPct * maxTilt * 2)

    glareX.set((mouseX / width) * 100)
    glareY.set((mouseY / height) * 100)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        shouldReduceMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      whileHover={shouldReduceMotion ? {} : { scale: scaleOnHover }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative perspective-[1000px] ${className}`}
      {...props}
    >
      {children}

      {/* Subtle Orange Glare / Light Sweep on hover */}
      {glare && !shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-20"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-full h-full opacity-35"
            style={{
              background: `radial-gradient(circle 240px at ${glareX.get()}% ${glareY.get()}%, rgba(255, 90, 10, 0.4), transparent 70%)`,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}
