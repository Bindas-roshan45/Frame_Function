import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, projectCategories } from '../data/projects'
import ProjectModal from '../components/ProjectModal'
import TiltCard from '../components/TiltCard'

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="bg-[#0A0B0E] text-white min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Orange ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF5A0A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A0A5B5] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>PORTFOLIO PROJECTS</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-white">
            MY <span className="text-[#FF5A0A]">PROJECTS</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#A0A5B5] leading-relaxed">
            A curated showcase of my software applications, AI assistants, web platforms, and engineering builds.
          </p>
        </div>

        {/* Project Transparency / Architecture Banner */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#A0A5B5] mb-8 sm:mb-10">
          <ShieldCheck className="w-5 h-5 text-[#FF5A0A] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-white">Authentic Portfolio:</strong> Showcasing personal projects, academic applications, and active technical initiatives developed by Roshan Raj. Accurate statuses maintained across every build.
          </p>
        </div>

        {/* Filter Navigation with Mobile Swipeable Overflow */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 scrollbar-none sm:flex-wrap mb-8 sm:mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF5A0A] text-white font-semibold shadow-lg shadow-[#FF5A0A]/30 scale-105'
                  : 'border border-white/10 text-[#A0A5B5] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={6}
                  scaleOnHover={1.02}
                  glare={true}
                  onClick={() => setSelectedProject(project)}
                  data-cursor="view"
                  className="h-full bg-[#161822] rounded-3xl p-4 border border-white/10 hover:border-[#FF5A0A]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg group"
                >
                  {/* 1. Project image at the top */}
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/40 relative mb-3.5 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#FF5A0A] transition-colors leading-snug mb-1.5 line-clamp-1">
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
                    <div className="w-8 h-8 rounded-full bg-white text-[#0F1015] flex items-center justify-center shrink-0 group-hover:bg-[#FF5A0A] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Have an Idea? Let's Build Something <span className="text-[#FF5A0A]">Together.</span>
          </h3>
          <p className="text-sm text-[#A0A5B5] max-w-md mx-auto">
            I’m always interested in learning, collaborating and building meaningful technology projects.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm hover:bg-[#ff732e] transition-all shadow-md"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
