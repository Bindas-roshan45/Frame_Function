import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, Share2, PlayCircle, Palette, Sparkles, ArrowUpRight } from 'lucide-react'

// Icon mapping helper
const iconMap = {
  Globe,
  Share2,
  PlayCircle,
  Palette,
  Sparkles,
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.iconName] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div
        className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-15 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none"
        style={{ backgroundColor: service.accentColor }}
      />

      <div>
        {/* Top Header: Number & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundColor: `${service.accentColor}15`,
                color: service.accentColor,
              }}
            >
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs font-semibold text-[#A1A1AA] tracking-widest">
              {service.number}
            </span>
          </div>

          <span
            className="text-xs px-2.5 py-1 rounded-full font-mono border border-white/10 text-white/70"
            style={{ borderColor: `${service.accentColor}30` }}
          >
            {service.tags[0]}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Visual Mockup Preview */}
        <div className="my-6 rounded-xl border border-white/10 bg-[#08090D]/80 p-4 overflow-hidden relative select-none">
          {service.visualType === 'browser-window' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 text-center bg-white/5 py-1 px-3 rounded-md text-[10px] text-[#A1A1AA] truncate">
                  frameandfunction.agency/preview
                </div>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/5 space-y-2">
                <div className="h-3 w-1/3 bg-[#38BDF8]/30 rounded" />
                <div className="h-2 w-3/4 bg-white/15 rounded" />
                <div className="flex items-center justify-between pt-2 text-[10px] text-[#A1A1AA]">
                  <span className="text-[#38BDF8]">Responsive Viewport</span>
                  <span className="text-[#C7F36B] font-semibold">99 Lighthouse Score</span>
                </div>
              </div>
            </div>
          )}

          {service.visualType === 'social-feed' && (
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#38BDF8]" />
                  <span className="text-[11px] text-white font-medium">@frame.function</span>
                </div>
                <span className="text-[10px] text-[#C7F36B]">Audience Growth</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="aspect-square rounded bg-[#171923] border border-white/10 p-1.5 flex flex-col justify-end text-[9px] text-[#8B5CF6]">
                  Story
                </div>
                <div className="aspect-square rounded bg-gradient-to-br from-[#8B5CF6]/30 to-[#38BDF8]/20 border border-white/10 p-1.5 flex flex-col justify-end text-[9px] text-white">
                  Carousel
                </div>
                <div className="aspect-square rounded bg-[#171923] border border-white/10 p-1.5 flex flex-col justify-end text-[9px] text-[#C7F36B]">
                  Reel
                </div>
              </div>
            </div>
          )}

          {service.visualType === 'video-timeline' && (
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] pb-1 border-b border-white/5">
                <span className="text-[#C7F36B]">Timeline: 60 FPS</span>
                <span>00:15:24</span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="h-3 rounded bg-[#8B5CF6]/40 flex items-center px-2 text-[9px] text-white font-semibold">
                  Video: 9:16 Vertical Hook
                </div>
                <div className="h-2.5 rounded bg-[#38BDF8]/40 flex items-center px-2 text-[8px] text-white">
                  Kinetic Titles &amp; Motion
                </div>
                <div className="h-2 rounded bg-[#C7F36B]/50 flex items-center px-2 text-[8px] text-[#08090D] font-bold">
                  Ambient SFX &amp; Beats
                </div>
              </div>
            </div>
          )}

          {service.visualType === 'brand-board' && (
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <span className="text-[10px] text-[#A1A1AA]">Design System</span>
                <span className="text-[10px] text-[#8B5CF6]">Tokens &amp; Type</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <div className="w-6 h-6 rounded-md bg-[#08090D] border border-white/20" title="Dark 08090D" />
                <div className="w-6 h-6 rounded-md bg-[#171923] border border-white/20" title="Card 171923" />
                <div className="w-6 h-6 rounded-md bg-[#8B5CF6]" title="Electric Purple" />
                <div className="w-6 h-6 rounded-md bg-[#38BDF8]" title="Neon Blue" />
                <div className="w-6 h-6 rounded-md bg-[#C7F36B]" title="Lime Accent" />
              </div>
              <div className="flex justify-between items-center text-[10px] text-[#A1A1AA] pt-1">
                <span>Space Grotesk</span>
                <span className="text-white">+ Inter Core</span>
              </div>
            </div>
          )}

          {service.visualType === 'editorial-composition' && (
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <span className="text-[10px] text-[#38BDF8]">Editorial Deck</span>
                <span className="text-[10px] text-[#A1A1AA]">Vol. 01</span>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-[11px] font-bold text-white font-heading">
                  THE NEW DIGITAL IMPACT
                </div>
                <div className="h-1.5 w-4/5 bg-white/20 rounded" />
                <div className="h-1.5 w-2/3 bg-white/10 rounded" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Explore Service Link */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-sm font-heading font-medium transition-colors hover:text-white"
          style={{ color: service.accentColor }}
        >
          <span>Explore Service</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <span className="text-xs font-mono text-[#A1A1AA]">
          {service.deliverables.length} Deliverables
        </span>
      </div>
    </motion.div>
  )
}
