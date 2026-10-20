import { motion } from 'framer-motion'
import { Eye, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, onSelect, index = 0 }) {
  const { title, category, conceptBadge, subtitle, shortDescription, accentColor, tags } = project

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative rounded-2xl glass-panel overflow-hidden flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70"
    >
      {/* Top Visual Preview Area */}
      <div className="relative aspect-[16/10] w-full bg-[#0E1017] overflow-hidden border-b border-white/5 flex items-center justify-center p-6 select-none">
        {/* Subtle Ambient Gradient Glow */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 blur-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accentColor} 0%, transparent 70%)`,
          }}
        />

        {/* Fine background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Concept Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide border border-white/10 bg-[#08090D]/80 backdrop-blur-md text-[#A1A1AA]">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span>{conceptBadge}</span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[11px] font-mono border border-white/10 bg-white/5 text-white/90">
          {category}
        </div>

        {/* Dynamic Project Mockup Artwork */}
        <div className="relative w-full h-full max-w-sm rounded-xl border border-white/10 bg-[#171923]/90 shadow-2xl p-4 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.03]">
          {/* Mockup Topbar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[10px] text-[#A1A1AA] truncate max-w-[160px]">
              {project.previewDetails?.siteName || title}
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
          </div>

          {/* Mockup Core Visual */}
          <div className="my-auto py-2 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded text-[9px] font-mono font-semibold text-white/80" style={{ backgroundColor: `${accentColor}25` }}>
              {project.previewDetails?.mockupUi?.tag || 'Design Exploration'}
            </div>
            <div className="text-base sm:text-lg font-bold font-heading text-white tracking-tight leading-snug">
              {project.previewDetails?.tagline || title}
            </div>
            <div className="text-[11px] font-mono text-[#A1A1AA] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{project.previewDetails?.mockupUi?.stat || subtitle}</span>
            </div>
          </div>

          {/* Mockup Footer Tags */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-[#A1A1AA]">
            <span>{project.previewDetails?.metrics?.[0] || 'Modular UI'}</span>
            <span style={{ color: accentColor }}>View Concept</span>
          </div>
        </div>

        {/* Overlay Action Button on Hover */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="px-4 py-2.5 rounded-full font-heading text-xs font-semibold text-[#08090D] bg-[#C7F36B] hover:bg-[#b8eb58] shadow-lg flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Project</span>
          </button>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA] mb-2">
            <span>{subtitle}</span>
            <span style={{ color: accentColor }}>{category}</span>
          </div>

          <h3 className="text-xl font-bold font-heading text-[#F5F5F7] group-hover:text-white transition-colors">
            {title}
          </h3>

          <p className="mt-2.5 text-sm text-[#A1A1AA] leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        </div>

        {/* Tags & Action Link */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#A1A1AA] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 text-xs font-heading font-medium transition-colors hover:text-white"
            style={{ color: accentColor }}
          >
            <span>Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
