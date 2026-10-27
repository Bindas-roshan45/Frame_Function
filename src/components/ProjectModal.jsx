import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24, rotate: -1.2 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15, rotate: 1 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12141A] text-white p-5 sm:p-8 border border-white/15 shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF5A0A]/15 text-[#FF5A0A] border border-[#FF5A0A]/30 mb-3">
            <span>{project.category}</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-black font-heading text-white pr-8">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A5B5] mt-1">
            {project.subtitle}
          </p>

          {/* Project Preview Image */}
          <div className="my-4 sm:my-5 rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[16/9] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              decoding="async"
            />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-base text-[#D0D4E0] leading-relaxed mb-5 sm:mb-6">
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Deliverables */}
          <div className="space-y-3 mb-5 sm:mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Deliverables &amp; Scope:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables?.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#A0A5B5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A0A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice on concept work */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-[#A0A5B5] mb-5 sm:mb-6">
            <ShieldCheck className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs">
              This showcase piece represents in-house concept exploration to demonstrate our design and engineering standards.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <span className="text-xs text-[#A0A5B5] text-center sm:text-left">
              Interested in a similar build?
            </span>
            <Link
              to={`/contact?service=${encodeURIComponent(project.category)}&projectRef=${encodeURIComponent(project.title)}`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5A0A] text-white text-xs font-semibold hover:bg-[#ff732e] transition-all active:scale-98"
            >
              <span>Inquire For This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
