import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { Github } from '../components/SocialIcons'
import { agencyInfo } from '../data/agencyInfo'
import { services } from '../data/services'
import { projects, projectCategories } from '../data/projects'
import ProjectModal from '../components/ProjectModal'
import ProjectImage from '../components/ProjectImage'
import TiltCard from '../components/TiltCard'
import {
  OrbitalRing,
  OrbitalSphere,
  FloatingParticles,
} from '../components/OrbitalElements'

// Technical Skills data for Section 4
const technicalSkillDomains = [
  {
    id: 'frontend',
    step: '01',
    title: 'Frontend Development',
    description: 'HTML5, CSS3, JavaScript, React.js, Tailwind CSS.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    image: '/images/process_strategize.webp',
  },
  {
    id: 'backend-databases',
    step: '02',
    title: 'Backend & Databases',
    description: 'Python, Flask, FastAPI, PHP | PostgreSQL, MySQL, SQLite.',
    skills: ['Python', 'Flask', 'FastAPI', 'PHP', 'PostgreSQL', 'MySQL', 'SQLite'],
    image: '/images/process_create.webp',
  },
  {
    id: 'tools-interests',
    step: '03',
    title: 'Tools & Specializations',
    description: 'Git, GitHub, VS Code, Docker, Ollama | AI/ML, Automation, Robotics.',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Ollama', 'AI/ML', 'Robotics'],
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

  // Hero section reference
  const heroRef = useRef(null)

  // Full-body introduction video state & ref
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const toggleAudio = (e) => {
    e?.stopPropagation()
    if (videoRef.current) {
      const nextMuted = !isMuted
      videoRef.current.muted = nextMuted
      if (!nextMuted) {
        videoRef.current.volume = 1.0
        videoRef.current.play().catch(() => {})
      }
      setIsMuted(nextMuted)
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay handled by browser or video error
      })
    }
  }, [])

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

  return (
    <div className="relative bg-[#F5F3EF]">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A0A] via-[#FF732E] to-[#FF5A0A] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(255,90,10,0.5)]"
      />

      {/* -------------------------------------------------------------------------
          SECTION 1 — HERO (Cinematic Dark Studio Stage Seamlessly Matching Video)
      -------------------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative w-full bg-[#000000] text-white pt-28 sm:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 lg:pb-28 overflow-hidden"
      >
        {/* Ambient Dark Atmospheric Stage Lighting */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {/* Studio Overhead Spotlight Glow */}
          <div
            className="absolute top-0 right-1/4 -translate-y-1/3 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 90, 10, 0.14) 0%, rgba(255, 115, 46, 0.04) 45%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          {/* Subtle Left Accent Ambient Glow */}
          <div
            className="absolute bottom-10 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 90, 10, 0.08) 0%, transparent 65%)',
              filter: 'blur(60px)',
            }}
          />
          {/* Seamless bottom fade into light section */}
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#F5F3EF] pointer-events-none z-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column (Desktop) / Bottom Content (Mobile): Oversized Name & Details */}
            <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Small Label Pill */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md shadow-lg text-[11px] sm:text-xs font-semibold tracking-wider text-white"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A] animate-ping" />
                <span className="tracking-widest uppercase">ROSHAN RAJ • DEVELOPER PORTFOLIO</span>
              </motion.div>

              {/* Oversized Name: "ROSHAN RAJ" */}
              <h1 className="font-heading font-black tracking-tighter text-white leading-[0.88] select-none text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                <motion.span
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white"
                >
                  ROSHAN
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#FF5A0A]"
                >
                  RAJ
                </motion.span>
              </h1>

              {/* Short Professional Tagline Below Name */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1"
              >
                <span className="hidden sm:inline-block h-0.5 w-6 sm:w-8 bg-[#FF5A0A] rounded-full shrink-0" />
                <p className="text-xs sm:text-sm lg:text-base font-bold font-heading tracking-[0.14em] sm:tracking-[0.18em] text-[#FF5A0A] uppercase">
                  FULL STACK DEVELOPER | AI/ML ENTHUSIAST
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left pt-1"
              >
                {agencyInfo.description}
              </motion.p>
            </div>

            {/* Right Column (Desktop) / Top Intro (Mobile): Full-Body Video Seamlessly Merged (No Frame, No Floating Animation) */}
            <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 relative w-full flex items-center justify-center py-2 lg:py-0 overflow-visible">
              {/* Static Vertical Container for Full-Body Person */}
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] h-[460px] sm:h-[540px] md:h-[600px] lg:h-[660px] xl:h-[720px] flex items-center justify-center select-none">
                {/* Overhead Spotlight Beam (Matching Video Studio Lighting) */}
                <div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 sm:w-80 lg:w-96 h-80 sm:h-[450px] pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 200, 140, 0.28) 0%, rgba(255, 90, 10, 0.12) 40%, transparent 75%)',
                    filter: 'blur(24px)',
                  }}
                />

                {/* Ground Spotlight Pool under shoes (Matching Reference) */}
                <div
                  className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-56 sm:w-72 lg:w-80 h-10 sm:h-14 rounded-[100%] pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 180, 100, 0.35) 0%, rgba(255, 90, 10, 0.15) 35%, transparent 75%)',
                    filter: 'blur(10px)',
                  }}
                />

                {/* HTML5 Video with Object Contain, Edge-Feathering Mask & Seamless Blending (No Frame / No Border) */}
                <div
                  className="relative w-full h-full flex items-center justify-center group/video cursor-pointer"
                  onClick={toggleAudio}
                  title={isMuted ? 'Tap to enable voice' : 'Tap to mute voice'}
                >
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/roshan1.jpeg"
                    onLoadedData={() => {
                      setVideoLoaded(true)
                      setVideoError(false)
                    }}
                    onPlaying={() => {
                      setVideoLoaded(true)
                      setVideoError(false)
                    }}
                    onError={() => setVideoError(true)}
                    className={`w-full h-full object-contain select-none transition-opacity duration-500 ${
                      videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      maskImage: 'radial-gradient(ellipse 75% 88% at 50% 50%, black 48%, transparent 86%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 75% 88% at 50% 50%, black 48%, transparent 86%)',
                    }}
                  >
                    <source src="/videos/intro.mp4" type="video/mp4" />
                    <source src="/videos/intro1.mp4" type="video/mp4" />
                  </video>

                  {/* Graceful Fallback: Shows Full-Body Picture if Video Fails or While Loading */}
                  {(!videoLoaded || videoError) && (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                      <picture className="w-full h-full flex items-center justify-center">
                        <source srcSet="/images/roshan1.webp" type="image/webp" />
                        <img
                          src="/images/roshan1.jpeg"
                          alt="Roshan Raj - Full Body Introduction"
                          className="w-full h-full object-contain select-none"
                          style={{
                            maskImage: 'radial-gradient(ellipse 75% 88% at 50% 50%, black 48%, transparent 86%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 75% 88% at 50% 50%, black 48%, transparent 86%)',
                          }}
                          loading="eager"
                          fetchPriority="high"
                        />
                      </picture>
                    </div>
                  )}

                  {/* Minimal Floating Audio / Voice Toggle */}
                  <button
                    type="button"
                    onClick={toggleAudio}
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-black/85 hover:bg-black text-white text-xs font-semibold backdrop-blur-md shadow-xl border border-white/20 transition-all cursor-pointer select-none"
                    aria-label={isMuted ? 'Enable video audio' : 'Mute video audio'}
                  >
                    {isMuted ? (
                      <>
                        <div className="w-5 h-5 rounded-full bg-[#FF5A0A] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <VolumeX className="w-3 h-3" />
                        </div>
                        <span className="font-mono text-xs font-medium tracking-wide">
                          Sound OFF
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Volume2 className="w-3 h-3" />
                        </div>
                        <span className="font-mono text-xs font-medium tracking-wide text-emerald-400">
                          Sound ON
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
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
              <span>Full Stack Web Development</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>AI &amp; Machine Learning</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>Python &amp; FastAPI</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>React.js &amp; Modern UI</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span>Automation &amp; Robotics</span>
              <span className="text-[#FF5A0A]">✦</span>
              <span className="text-[#FF5A0A] font-black">Turning Ideas Into Technology</span>
              <span className="text-[#FF5A0A]">✦</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* -------------------------------------------------------------------------
          SECTION 2 — SERVICES ("WHAT I DO") - 3D INTERACTIVE TILT CARDS
      -------------------------------------------------------------------------- */}
      <section id="what-we-do" className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden sm:overflow-visible">
        {/* Background Decorative Orbital Accent */}
        <OrbitalRing
          size={340}
          tiltX={75}
          tiltY={15}
          duration={28}
          className="-top-8 sm:-top-16 -right-8 sm:-right-16 -z-10 opacity-30 scale-75 sm:scale-100 origin-center"
        />

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#111111]">
              WHAT I <span className="text-[#FF5A0A]">DO</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-[#111111] hover:bg-black/5 hover:border-black/25 transition-all self-start sm:self-auto"
          >
            <span>View All Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* 5 Service Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
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
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <TiltCard
                maxTilt={8}
                scaleOnHover={1.03}
                glare={true}
                className="h-full bg-white rounded-2xl p-2.5 sm:p-3 border border-black/5 shadow-xs hover:shadow-2xl hover:border-[#FF5A0A]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Image area */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#F0EEEA] mb-2 sm:mb-3 relative shrink-0">
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
                <div className="flex-1 flex items-center justify-between p-1 pt-0 gap-1.5 w-full">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-[#111111] leading-tight group-hover:text-[#FF5A0A] transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <Link
                    to={`/services#${service.id}`}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FF5A0A] group-hover:rotate-45 transition-all duration-300 active:scale-95"
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
          SECTION 3 — SELECTED WORK ("MY PROJECTS" - FULL-WIDTH DARK SECTION: #171717)
      -------------------------------------------------------------------------- */}
      <section id="our-work" className="bg-[#171717] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
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
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A0A5B5] uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                <span>PORTFOLIO SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white">
                MY <span className="text-[#FF5A0A]">PROJECTS</span>
              </h2>
            </div>

            {/* Filter Pills with phone horizontal scroll */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 scrollbar-none sm:flex-wrap">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer ${
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

          {/* 6 Visual Project Cards Grid with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                    maxTilt={6}
                    scaleOnHover={1.02}
                    glare={true}
                    onClick={() => setSelectedProject(project)}
                    data-cursor="view"
                    className="h-full bg-[#202022] rounded-2xl p-3.5 sm:p-4 border border-white/10 hover:border-[#FF5A0A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  >
                    {/* 1. Project image at the top */}
                    <div className="rounded-xl overflow-hidden bg-black/40 relative aspect-[16/10] w-full mb-3 shrink-0">
                      <ProjectImage
                        project={project}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    </div>

                    {/* 2. Project status badge (In Progress / Completed) */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                          project.status === 'Completed'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                          }`}
                        />
                        <span>{project.status}</span>
                      </span>
                      <span className="text-[11px] font-mono text-[#888888]">{project.category}</span>
                    </div>

                    {/* 3. Project name */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#FF5A0A] transition-colors leading-snug mb-1.5 line-clamp-1">
                      {project.title}
                    </h3>

                    {/* 4. Short project description */}
                    <p className="text-xs text-[#A0A5B5] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* 5. Existing arrow button/link at the bottom */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between w-full mt-auto">
                      <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                        View Details
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#111111] flex items-center justify-center shrink-0 group-hover:bg-[#FF5A0A] group-hover:text-white group-hover:rotate-45 transition-all duration-300 active:scale-95 shadow-sm">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Genuine Project Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-xs font-mono text-[#888888]"
          >
            * Personal projects and technical builds by Roshan Raj. Click any card to inspect architecture and deliverables.
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 4 — TECHNICAL SKILLS ("STACK & CAPABILITIES") - ORBITAL BODIES
      -------------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/5 relative overflow-hidden sm:overflow-visible">
        {/* Orbital Spheres moving in circular tracks */}
        <OrbitalSphere
          radius={110}
          duration={16}
          direction="clockwise"
          size={14}
          color="#FF5A0A"
          className="-top-6 sm:-top-10 -left-6 sm:-left-10 opacity-50 scale-75 sm:scale-100 origin-center"
        />
        <OrbitalSphere
          radius={80}
          duration={12}
          direction="counterclockwise"
          size={10}
          color="#FF732E"
          className="-bottom-6 sm:-bottom-8 -right-6 sm:-right-8 opacity-40 scale-75 sm:scale-100 origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#111111]">
            TECHNICAL <span className="text-[#FF5A0A]">SKILLS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] max-w-xl">
            My development stack across frontend interfaces, server-side frameworks, databases, and emerging AI technologies.
          </p>
        </motion.div>

        {/* 3 Skill Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {technicalSkillDomains.map((item, idx) => (
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

                  <p className="text-sm text-[#666666] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#FAF8F5] border border-black/5 text-[#111111]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A0A]" />
                  <span>Production &amp; practical application tested</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 5 — PROFESSIONAL JOURNEY ("CAREER & EDUCATION") - HORIZONTAL TIMELINE
      -------------------------------------------------------------------------- */}
      <section
        id="career-journey"
        className="pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/5 relative scroll-mt-28 lg:scroll-mt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>CAREER &amp; EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#111111]">
            PROFESSIONAL <span className="text-[#FF5A0A]">JOURNEY</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#666666] max-w-2xl leading-relaxed">
            My journey through undergraduate computing, frontend web engineering, and enterprise operations.
          </p>
        </motion.div>

        {/* Connected Journey Timeline - 1 column on phone, 2 on tablet, 4 connected cards on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative items-stretch">
          {agencyInfo.processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-full flex flex-col"
            >
              <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-black/8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div>
                  {/* Top Header Row: Orange Badge + Title + Subtitle */}
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <span className="shrink-0 bg-[#FF5A0A] text-white font-black text-xs sm:text-sm px-2.5 py-1 rounded-lg flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-black text-sm sm:text-base text-[#111111] leading-tight truncate">
                        {step.title}
                      </h3>
                      {step.step === '02' && (
                        <p className="text-[11px] text-[#666666] font-medium leading-tight mt-0.5 truncate">
                          Web Developer • Oct 2025 – Apr 2026
                        </p>
                      )}
                      {step.step === '03' && (
                        <p className="text-[11px] text-[#666666] font-medium leading-tight mt-0.5 truncate">
                          SAP Operator / Associate • Oct 2026 – Present
                        </p>
                      )}
                      {step.step === '04' && (
                        <p className="text-[11px] text-[#FF5A0A] font-semibold leading-tight mt-0.5 flex items-center gap-1 truncate">
                          <span>📖</span> Personal Learning Journey
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Clean Visual Preview with consistent 16:10 aspect ratio and rounded corners */}
                  <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F0EEEA] my-3 relative border border-black/5 shadow-inner">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Description below image */}
                <p className="text-xs text-[#555555] leading-relaxed mt-1">
                  {step.description}
                </p>
              </div>

              {/* Connecting Orange Circular Arrow between cards on desktop */}
              {idx < agencyInfo.processSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3.5 xl:-right-4 top-[50%] -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-[#FF5A0A] text-white flex items-center justify-center shadow-[0_2px_10px_rgba(255,90,10,0.4)] ring-4 ring-[#F5F3EF]">
                    <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 stroke-[2.5]" />
                  </div>
                </div>
              )}

              {/* Connecting Orange Circular Arrow for tablet 2x2 grid */}
              {(idx === 0 || idx === 2) && (
                <div className="hidden sm:flex lg:hidden items-center justify-center absolute -right-3.5 top-[50%] -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[#FF5A0A] text-white flex items-center justify-center shadow-md ring-4 ring-[#F5F3EF]">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------------------
          SECTION 6 — FINAL CTA ("HAVE AN IDEA? LET'S BUILD SOMETHING TOGETHER")
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
                <span>LET'S CONNECT</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl xl:text-7xl font-black font-heading tracking-tight text-white leading-[1.05] sm:leading-[1.0]"
              >
                HAVE AN IDEA?
                <br />
                LET’S BUILD <span className="text-[#FF5A0A]">TOGETHER.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-[#A0A5B5] max-w-md"
              >
                I’m always interested in learning, collaborating and building meaningful technology projects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/contact"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm hover:bg-[#ff732e] transition-all shadow-lg shadow-[#FF5A0A]/25 active:scale-98"
                  >
                    <span>Let's Connect</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>

                <motion.a
                  href={agencyInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all active:scale-98"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub: {agencyInfo.contact.githubUsername}</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Cinematic Astronaut Render with Rotating Orbital Rings & Scroll Parallax */}
            <div className="lg:col-span-6 relative w-full overflow-hidden sm:overflow-visible">
              {/* Concentric Gyroscopic 3D Rings */}
              <OrbitalRing
                size={440}
                tiltX={70}
                tiltY={25}
                duration={22}
                className="-top-6 sm:-top-14 -left-6 sm:-left-14 -z-10 opacity-60 scale-75 sm:scale-100 origin-center"
              />
              <OrbitalRing
                size={340}
                tiltX={58}
                tiltY={-28}
                duration={16}
                reverse
                className="-bottom-6 sm:-bottom-10 -right-6 sm:-right-10 -z-10 opacity-50 scale-75 sm:scale-100 origin-center"
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
