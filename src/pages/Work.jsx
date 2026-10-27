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
            <span>PORTFOLIO ARCHIVE</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-white">
            OUR <span className="text-[#FF5A0A]">WORK</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#A0A5B5] leading-relaxed">
            Explore our curated showcase of websites, high-retention video reels, social media campaigns, and brand identities.
          </p>
        </div>

        {/* Concept Work Disclosure Banner */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#A0A5B5] mb-8 sm:mb-10">
          <ShieldCheck className="w-5 h-5 text-[#FF5A0A] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-white">Transparency Notice:</strong> All projects displayed below are in-house demonstration showcases developed by Frame &amp; Function to illustrate our technical frontend, visual identity, and motion capabilities without fabricating client claims.
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
                  maxTilt={7}
                  scaleOnHover={1.03}
                  glare={true}
                  onClick={() => setSelectedProject(project)}
                  data-cursor="view"
                  className="h-full bg-[#161822] rounded-3xl p-4 border border-white/10 hover:border-[#FF5A0A]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg group"
                >
                  {/* Project Mockup Image */}
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/40 relative mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Title & Circular Action Button */}
                  <div className="flex items-center justify-between p-1">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#FF5A0A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#A0A5B5] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

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
            Have a project in mind?
          </h3>
          <p className="text-sm text-[#A0A5B5] max-w-md mx-auto">
            Let's discuss how we can build a tailored digital experience for your brand.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5500] text-white font-semibold text-sm hover:bg-[#ff6a1f] transition-all shadow-md"
            >
              <span>Start a Project</span>
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
