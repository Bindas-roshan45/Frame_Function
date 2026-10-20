import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const { scrollYProgress } = useScroll()

  // Smooth spring for scroll progress ring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      setPathLength(latest)
    })
    return () => unsubscribe()
  }, [smoothProgress])

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-[#FF5A0A]/20 transition-all cursor-pointer group"
          aria-label="Scroll back to top"
        >
          {/* Circular SVG Scroll Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="#FF5A0A"
              strokeWidth="2.5"
              strokeDasharray="120"
              strokeDashoffset={120 - pathLength * 120}
              strokeLinecap="round"
            />
          </svg>

          {/* Upward Arrow with micro-rotation */}
          <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 group-hover:rotate-[-8deg] transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
