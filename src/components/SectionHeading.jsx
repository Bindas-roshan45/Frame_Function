import { motion } from 'framer-motion'

export default function SectionHeading({
  badge,
  badgeAccent = '#8B5CF6',
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-4 border border-white/10 glass-panel ${
            isCenter ? 'justify-center' : ''
          }`}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-ping"
            style={{ backgroundColor: badgeAccent }}
          />
          <span style={{ color: badgeAccent }}>{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.12] text-[#F5F5F7]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
