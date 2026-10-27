import { motion } from 'framer-motion'

// Gyroscopic 3D Orbital Ring with neon orange glow
export function OrbitalRing({
  size = 280,
  tiltX = 65,
  tiltY = 25,
  duration = 18,
  reverse = false,
  className = '',
}) {
  return (
    <div
      style={{
        '--ring-size': `${size}px`,
        perspective: 800,
      }}
      className={`pointer-events-none absolute flex items-center justify-center max-w-[85vw] max-h-[85vw] aspect-square w-[min(var(--ring-size),85vw)] h-[min(var(--ring-size),85vw)] ${className}`}
    >
      <motion.div
        animate={{
          rotateZ: reverse ? [360, 0] : [0, 360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
        className="rounded-full border border-[#FF5A0A]/35 shadow-[0_0_20px_rgba(255,90,10,0.35)] relative"
      >
        {/* Orbiting celestial bead */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FF5A0A] shadow-[0_0_12px_#FF5A0A]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF732E] shadow-[0_0_8px_#FF732E]" />
      </motion.div>
    </div>
  )
}

// Circular Orbital Path containing floating geometric sphere
export function OrbitalSphere({
  radius = 90,
  duration = 14,
  direction = 'clockwise',
  size = 14,
  color = '#FF5A0A',
  className = '',
}) {
  const isClockwise = direction === 'clockwise'

  return (
    <div
      className={`pointer-events-none absolute flex items-center justify-center max-w-[85vw] max-h-[85vw] aspect-square ${className}`}
      style={{
        '--track-size': `${radius * 2}px`,
        width: 'min(var(--track-size), 85vw)',
        height: 'min(var(--track-size), 85vw)',
      }}
    >
      {/* Faint orbit track */}
      <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/5" />

      {/* Orbiting body container */}
      <motion.div
        animate={{
          rotate: isClockwise ? 360 : -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="w-full h-full relative"
      >
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            boxShadow: `0 0 16px ${color}88`,
          }}
          className="rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </div>
  )
}

// Ambient Floating Dust / Stars Particle Field
export function FloatingParticles({ count = 15, className = '', color = '#FF5A0A' }) {
  // Pre-calculated deterministic particle offsets
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 19) % 94 + 3}%`,
    top: `${(i * 29) % 90 + 5}%`,
    size: (i % 3) + 2,
    duration: 3.5 + (i % 5) * 1.2,
    delay: (i * 0.4) % 2.5,
    yDelta: -15 - (i % 4) * 8,
  }))

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          animate={{
            y: [0, p.yDelta, 0],
            opacity: [0.2, 0.85, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  )
}

// Animated Connecting Line with traveling orange energy pulse for Process Steps
export function AnimatedProcessConnector({ className = '' }) {
  return (
    <div className={`hidden lg:flex items-center absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 pointer-events-none ${className}`}>
      {/* Background dashed line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#FF5A0A]/20 via-[#FF5A0A]/40 to-[#FF5A0A]/20 relative overflow-hidden">
        {/* Traveling energy beam */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#FF5A0A] to-transparent shadow-[0_0_8px_#FF5A0A]"
        />
      </div>

      {/* Pulsing arrow icon */}
      <motion.div
        animate={{
          x: [0, 3, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-[#FF5A0A] text-sm -ml-1 font-bold select-none"
      >
        ➔
      </motion.div>
    </div>
  )
}
