import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import { agencyInfo } from '../data/agencyInfo'
import { services } from '../data/services'
import { projects, projectCategories } from '../data/projects'
import ProjectModal from '../components/ProjectModal'
import TiltCard from '../components/TiltCard'
import {
  OrbitalRing,
  OrbitalSphere,
  FloatingParticles,
  AnimatedProcessConnector,
} from '../components/OrbitalElements'

// Advantages data for Section 4
const advantages = [
  {
    id: 'strategy',
    step: '01',
    title: 'Strategy Before Design',
    description:
      'We diagnose your brand context, audience, and market positioning before touching a single pixel or line of code.',
    image: '/images/process_strategize.webp',
  },
  {
    id: 'creative',
    step: '02',
    title: 'Creative Execution',
    description:
      'Every interaction, visual motif, and motion sequence serves to communicate clarity and inspire genuine user connection.',
    image: '/images/process_create.webp',
  },
  {
    id: 'goals',
    step: '03',
    title: 'Built Around Your Goals',
    description:
      'Whether you aim for conversions, investor attention, or audience retention, our work directly aligns with your business goals.',
    image: '/images/process_launch.webp',
  },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  // Top scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Hero section scroll & mouse parallax
  const heroRef = useRef(null)
  const heroMouseX = useMotionValue(0)
  const heroMouseY = useMotionValue(0)
  const heroTiltX = useSpring(heroMouseY, { stiffness: 220, damping: 25 })
  const heroTiltY = useSpring(heroMouseX, { stiffness: 220, damping: 25 })

  const handleHeroMouseMove = (e) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    heroMouseX.set(xPct * 12)
    heroMouseY.set(-yPct * 12)
  }

  const handleHeroMouseLeave = () => {
    heroMouseX.set(0)
    heroMouseY.set(0)
  }

  // Scroll away transforms for Hero 3D Composition
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScrollRotateZ = useTransform(heroScroll, [0, 1], [0, -8])
  const heroScrollTranslateX = useTransform(heroScroll, [0, 1], [0, 45])
  const heroScrollScale = useTransform(heroScroll, [0, 1], [1, 0.92])
  const heroScrollOpacity = useTransform(heroScroll, [0, 0.85], [1, 0.25])

  // CTA Section scroll parallax
  const ctaRef = useRef(null)
  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })
  const ctaAstronautRotate = useTransform(ctaScroll, [0, 1], [-5, 6])
  const ctaAstronautY = useTransform(ctaScroll, [0, 1], [30, -30])

  // Filter projects by category
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())

  const scrollToWork = () => {
    const el = document.getElementById('our-work')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className="relative bg-[#F5F3EF]">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A0A] via-[#FF732E] to-[#FF5A0A] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(255,90,10,0.5)]"
      />

      {/* -------------------------------------------------------------------------
          SECTION 1 — HERO (Split Layout with 3D Orbital Showcases)
      -------------------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Small Label Pill */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white shadow-xs text-xs font-semibold tracking-wider text-[#111111]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5A0A] animate-ping" />
              <span>{agencyInfo.badge}</span>
            </motion.div>

            {/* Main Headline: Animated Word-by-Word with Highlighted Accent */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black font-heading tracking-tight text-[#111111] leading-[0.95]">
              <motion.span
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {agencyInfo.headlineFirst}
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {agencyInfo.headlineMiddle}
              </motion.span>
              <br />
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0, scale: 0.92, rotate: -2, y: shouldReduceMotion ? 0 : 25 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#FF5A0A] inline-flex items-baseline"
                >
                  {agencyInfo.headlineAccent}
                  <span className="text-xl sm:text-2xl font-bold ml-1 text-[#FF5A0A] -translate-y-6 sm:-translate-y-10">
                    &reg;
                  </span>
                </motion.span>

                {/* Animated glowing orange underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1 sm:h-1.5 w-full bg-gradient-to-r from-[#FF5A0A] via-[#FF732E] to-transparent rounded-full origin-left mt-1 shadow-[0_0_12px_rgba(255,90,10,0.4)]"
                />
              </span>
            </h1>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed max-w-md"
            >
              Websites, Social Media, Video Editing,
              <br className="hidden sm:inline" /> Branding &amp; Graphic Design
            </motion.p>

            {/* Buttons with magnetic micro-interaction */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-black/85 transition-all shadow-md"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

              <motion.button
                type="button"
                onClick={scrollToWork}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-black/10 bg-white text-[#111111] text-sm font-semibold hover:bg-black/5 hover:border-black/25 transition-all cursor-pointer"
              >
                <span>Explore Work</span>
                <span className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#FF5A0A] group-hover:text-white transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
              </motion.button>
            </motion.div>

            {/* Avatar Social Proof Stack */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 flex items-center gap-3.5"
            >
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                  alt="Client avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
                  alt="Client avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces"
                  alt="Client avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces"
                  alt="Client avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <div className="w-8 h-8 rounded-full bg-[#FF5A0A] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  +
                </div>
              </div>
              <p className="text-xs text-[#666666] leading-tight">
                Ready to create something amazing?
                <br />
                <span className="font-semibold text-[#111111]">Let's build it together.</span>
              </p>
            </motion.div>
          </div>

          {/* Right Column: 3D Composition with Rotating Orbital Rings, Particles & Mouse Parallax */}
          <div
            className="lg:col-span-7 relative"
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
          >
            {/* Rotating 3D Neon Rings around the composition */}
            <OrbitalRing
              size={460}
              tiltX={70}
              tiltY={20}
              duration={24}
              className="-top-12 -left-12 -z-10 opacity-70"
            />
            <OrbitalRing
              size={360}
              tiltX={55}
              tiltY={-25}
              duration={18}
              reverse
              className="-bottom-8 -right-8 -z-10 opacity-60"
            />

            {/* Ambient Floating Orange Particles */}
            <FloatingParticles count={14} className="-inset-8" />

            {/* Scroll-Linked and Mouse-Tilt 3D Wrapper */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      rotateX: heroTiltX,
                      rotateY: heroTiltY,
                      rotateZ: heroScrollRotateZ,
                      x: heroScrollTranslateX,
                      scale: heroScrollScale,
                      opacity: heroScrollOpacity,
                      transformStyle: 'preserve-3d',
                    }
              }
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, y: shouldReduceMotion ? 0 : 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full perspective-[1200px]"
            >
              {/* Floating Container */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.55 }}
                className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5"
              >
                {/* Primary 3D Composition Render */}
                <img
                  src="/images/hero_composition.webp"
                  alt="Frame & Function 3D Hero Scene with floating laptop, tablets, and devices"
                  className="w-full h-auto object-cover select-none"
                  fetchPriority="high"
                  decoding="async"
                />

                {/* Hand-Drawn Annotations in Caveat Font matching the reference */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-4 left-6 hidden sm:block pointer-events-none select-none"
                >
                  <span className="font-hand text-xl font-bold text-[#111111] rotate-[-6deg] inline-block">
                    Website<br />Development ➔
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.85, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-4 right-6 hidden sm:block pointer-events-none select-none text-right"
                >
                  <span className="font-hand text-xl font-bold text-[#111111] rotate-[4deg] inline-block">
                    Video Editing<br />&amp; Reels ➔
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-28 right-4 hidden sm:block pointer-events-none select-none text-right"
                >
                  <span className="font-hand text-xl font-bold text-[#111111] rotate-[-5deg] inline-block">
                    Social Media<br />Management ➔
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-6 right-20 hidden sm:block pointer-events-none select-none text-right"
                >
                  <span className="font-hand text-lg font-bold text-[#111111] rotate-[2deg] inline-block">
                    Branding &amp;<br />Graphic Design ➔
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </section>

      {/* -------------------------------------------------------------------------
          INFINITE SCROLLING TICKER MARQUEE
      -------------------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.7 }}
        className="py-4 border-y border-black/10 bg-[#FAF8F5] overflow-hidden select-none relative"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#111111]/80">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span>Website Development</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>Social Media Management</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>Video Editing &amp; Reels</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>Branding &amp; Graphic Design</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>Creative Content</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span className="text-[#FF5A0A] font-black">Ideas Into Impact</span>
              <span className="text-[#FF5A0A]">✦</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* -------------------------------------------------------------------------
          SECTION 2 — SERVICES ("WHAT WE DO") - 3D INTERACTIVE TILT CARDS
      -------------------------------------------------------------------------- */}
      <section id="what-we-do" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorative Orbital Accent */}
        <OrbitalRing
          size={360}
          tiltX={75}
          tiltY={15}
          duration={28}
          className="-top-16 -right-16 -z-10 opacity-35"
        />

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#111111]">
              WHAT WE <span className="text-[#FF5A0A]">DO</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-[#111111] hover:bg-black/5 hover:border-black/25 transition-all self-start sm:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 5 Service Cards Grid with 3D Tilt - 2 per row on phone, 5 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 35,
                rotateY: shouldReduceMotion ? 0 : -6,
              }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard
                maxTilt={8}
                scaleOnHover={1.03}
                glare={true}
                className="h-full bg-white rounded-2xl p-2.5 sm:p-3 border border-black/5 shadow-xs hover:shadow-2xl hover:border-[#FF5A0A]/40 transition-shadow duration-300 flex flex-col justify-between group"
              >
                {/* Top Image area */}
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#F0EEEA] relative mb-2 sm:mb-3">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Title and Circular Arrow Button */}
                <div className="flex items-center justify-between p-1 pt-0 gap-1.5">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-[#111111] leading-tight group-hover:text-[#FF5A0A] transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <Link
                    to={`/services#${service.id}`}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FF5A0A] group-hover:rotate-45 transition-all duration-300"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 3 — SELECTED WORK ("OUR WORK" - FULL-WIDTH DARK SECTION: #171717)
      -------------------------------------------------------------------------- */}
      <section id="our-work" className="bg-[#171717] text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle orange ambient glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF5A0A]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Ambient floating dust particles across dark canvas */}
        <FloatingParticles count={24} color="#FF5A0A" className="opacity-35" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Row */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A0A5B5] uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                <span>SELECTED WORK</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white">
                OUR <span className="text-[#FF5A0A]">WORK</span>
              </h2>
            </div>

            {/* Filter Pills matching reference screenshot */}
            <div className="flex flex-wrap items-center gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#FF5A0A] text-white font-semibold shadow-md shadow-[#FF5A0A]/30 scale-105'
                      : 'border border-white/10 text-[#A0A5B5] hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* 5 Visual Project Cards Grid with 3D Tilt - 2 per row on phone, 5 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={7}
                    scaleOnHover={1.03}
                    glare={true}
                    onClick={() => setSelectedProject(project)}
                    data-cursor="view"
                    className="h-full bg-[#222222] rounded-2xl p-2.5 sm:p-3 border border-white/10 hover:border-[#FF5A0A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  >
                    {/* Top Mockup Image */}
                    <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/40 relative mb-2 sm:mb-3">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>

                    {/* Title and White Circular Arrow Button */}
                    <div className="flex items-center justify-between p-1 pt-0 gap-1.5">
                      <h3 className="font-heading font-bold text-xs sm:text-sm text-white leading-tight group-hover:text-[#FF5A0A] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#111111] flex items-center justify-center shrink-0 group-hover:bg-[#FF5A0A] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Concept Work Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-xs font-mono text-[#888888]"
          >
            * Demonstrating concept explorations developed in-house to showcase our engineering &amp; design standards.
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 4 — OUR ADVANTAGES ("CREATIVITY WITH PURPOSE") - ORBITAL BODIES
      -------------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/5 relative">
        {/* Orbital Spheres moving in circular tracks */}
        <OrbitalSphere
          radius={110}
          duration={16}
          direction="clockwise"
          size={14}
          color="#FF5A0A"
          className="-top-10 -left-10 opacity-60"
        />
        <OrbitalSphere
          radius={80}
          duration={12}
          direction="counterclockwise"
          size={10}
          color="#FF732E"
          className="-bottom-8 -right-8 opacity-50"
        />

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>OUR ADVANTAGES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#111111]">
            CREATIVITY WITH <span className="text-[#FF5A0A]">PURPOSE</span>
          </h2>
          <p className="mt-3 text-base text-[#666666] max-w-xl">
            We don't create generic templates. Every asset is strategically aligned with your growth.
          </p>
        </motion.div>

        {/* 3 Advantage Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 35,
                x: shouldReduceMotion ? 0 : idx % 2 === 0 ? -15 : 15,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.75,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard
                maxTilt={6}
                scaleOnHover={1.02}
                glare={true}
                className="h-full bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-2xl text-[#FF5A0A]">
                      {item.step}
                    </span>
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 6 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="w-14 h-14 rounded-2xl bg-[#F0EEEA] p-2 overflow-hidden flex items-center justify-center shadow-xs"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#111111] mb-2 group-hover:text-[#FF5A0A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A0A]" />
                  <span>Engineered for real impact</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 5 — OUR PROCESS ("HOW IT WORKS") - CONNECTED TRAVELING ENERGY PULSE
      -------------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/5 relative">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>OUR PROCESS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#111111]">
            HOW IT <span className="text-[#FF5A0A]">WORKS</span>
          </h2>
        </motion.div>

        {/* 4 Connected Cards Grid - 2 per row on phone, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative">
          {agencyInfo.processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-full"
            >
              <TiltCard
                maxTilt={6}
                scaleOnHover={1.03}
                glare={true}
                className="h-full bg-white rounded-2xl p-3 sm:p-5 border border-black/5 shadow-xs flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div>
                  {/* Step Number & Title */}
                  <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="font-heading font-black text-sm sm:text-xl text-[#111111]">
                      {step.step}
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-lg text-[#111111] truncate">
                      {step.title}
                    </span>
                  </div>

                  {/* 3D Illustration Area with Step-Specific Micro Animations */}
                  <div className="w-full aspect-square rounded-xl bg-[#F0EEEA] p-2 sm:p-3 flex items-center justify-center overflow-hidden mb-2 sm:mb-4 relative">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      animate={
                        shouldReduceMotion
                          ? {}
                          : idx === 0
                          ? { rotate: [-2, 2, -2] }
                          : idx === 1
                          ? { scale: [1, 1.04, 1] }
                          : idx === 2
                          ? { filter: ['drop-shadow(0 0 2px rgba(255,90,10,0.2))', 'drop-shadow(0 0 10px rgba(255,90,10,0.5))', 'drop-shadow(0 0 2px rgba(255,90,10,0.2))'] }
                          : { y: [0, -6, 0] }
                      }
                      transition={{
                        duration: idx === 0 ? 4 : idx === 1 ? 3 : idx === 2 ? 2.5 : 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                      className="w-full h-full object-contain transition-transform duration-500"
                    />
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-[#666666] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {step.description}
                </p>
              </TiltCard>

              {/* Connected Line with Traveling Orange Energy Pulse on Desktop */}
              {idx < agencyInfo.processSteps.length - 1 && (
                <AnimatedProcessConnector />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 6 — FINAL CTA ("LET'S BUILD SOMETHING GREAT" - DARK BACKGROUND: #171717)
      -------------------------------------------------------------------------- */}
      <section
        ref={ctaRef}
        className="bg-[#171717] text-white pt-16 pb-12 lg:pt-20 lg:pb-14 relative overflow-hidden"
      >
        {/* Glow behind astronaut */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A0A]/15 rounded-full blur-[180px] pointer-events-none" />

        {/* Ambient floating stars/particles */}
        <FloatingParticles count={20} color="#FF5A0A" className="opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and CTAs */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-wider text-[#A0A5B5] uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                <span>LET'S WORK TOGETHER</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl xl:text-7xl font-black font-heading tracking-tight text-white leading-[1.0]"
              >
                LET’S BUILD
                <br />
                SOMETHING <span className="text-[#FF5A0A]">GREAT.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-base text-[#A0A5B5] max-w-md"
              >
                Tell us what you're building. We'll help turn your vision into an unforgettable digital experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm hover:bg-[#ff732e] transition-all shadow-lg shadow-[#FF5A0A]/25"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>

                <motion.a
                  href={agencyInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Cinematic Astronaut Render with Rotating Orbital Rings & Scroll Parallax */}
            <div className="lg:col-span-6 relative">
              {/* Concentric Gyroscopic 3D Rings */}
              <OrbitalRing
                size={480}
                tiltX={70}
                tiltY={25}
                duration={22}
                className="-top-14 -left-14 -z-10 opacity-70"
              />
              <OrbitalRing
                size={380}
                tiltX={58}
                tiltY={-28}
                duration={16}
                reverse
                className="-bottom-10 -right-10 -z-10 opacity-60"
              />

              <motion.div
                style={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotateZ: ctaAstronautRotate,
                        y: ctaAstronautY,
                      }
                }
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full"
              >
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src="/images/cta_astronaut.webp"
                    alt="3D Space Explorer with glowing neon orange rings"
                    className="w-full h-auto object-cover select-none"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
