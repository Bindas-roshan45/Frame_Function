import {
  Mail,
  Bot,
  Users,
  GraduationCap,
  Code2,
  Sparkles,
  Layers,
} from 'lucide-react'

// Icon registry for projects
const iconMap = {
  Mail,
  Bot,
  Users,
  GraduationCap,
  Code2,
  Sparkles,
  Layers,
}

export default function ProjectImage({
  project,
  className = '',
  isModal = false,
}) {
  const IconComponent = iconMap[project?.iconName] || Layers

  // Display actual project image
  if (project?.image) {
    return (
      <div className={`relative w-full h-full bg-[#0D0F14] overflow-hidden ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  // Clean, design-consistent placeholder with project name
  return (
    <div
      className={`relative w-full h-full bg-[#0D0F14] border border-white/5 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none group/placeholder ${className}`}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-15 group-hover/placeholder:opacity-25 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, #FF5A0A 0%, transparent 75%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Top Bar: macOS / Terminal 3 dots & Tech Identifier */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-[#A0A5B5]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <span className="truncate max-w-[140px] text-white/70 font-medium">
          {project?.techBadge || project?.technologies?.[0] || 'Technical Build'}
        </span>
      </div>

      {/* Center: Glowing Icon + Project Name */}
      <div className="relative z-10 my-auto py-2 text-center flex flex-col items-center justify-center">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 text-[#FF5A0A] flex items-center justify-center mb-2 shadow-inner group-hover/placeholder:scale-110 transition-transform duration-300">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h4 className={`font-heading font-black tracking-tight text-white line-clamp-1 ${isModal ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'}`}>
          {project?.title}
        </h4>
        <p className="text-[10px] sm:text-xs text-[#A0A5B5] font-mono mt-0.5 line-clamp-1 max-w-[90%]">
          {project?.subtitle || project?.category}
        </p>
      </div>

      {/* Bottom Bar: Category & Architectural Tag */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-white/50">
        <span className="truncate max-w-[120px]">{project?.category}</span>
        <span className="text-[#FF5A0A] font-semibold">
          {project?.status ? project.status : 'Roshan Raj'}
        </span>
      </div>
    </div>
  )
}

