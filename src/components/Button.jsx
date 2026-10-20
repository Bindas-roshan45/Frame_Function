import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium font-heading transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] select-none'

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 tracking-wide',
  }

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#38BDF8] text-white shadow-lg shadow-[#8B5CF6]/25 hover:shadow-[#38BDF8]/40 hover:brightness-110 active:scale-[0.98]',
    secondary: 'glass-panel text-[#F5F5F7] hover:bg-[#171923] hover:border-[#8B5CF6]/40 hover:text-white',
    outline: 'border border-white/15 text-[#F5F5F7] hover:border-[#C7F36B] hover:text-[#C7F36B] hover:bg-[#C7F36B]/5',
    lime: 'bg-[#C7F36B] text-[#08090D] font-semibold hover:bg-[#b8eb58] shadow-lg shadow-[#C7F36B]/20 hover:shadow-[#C7F36B]/40',
    whatsapp: 'bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-900/30 hover:shadow-emerald-500/30',
    ghost: 'text-[#A1A1AA] hover:text-white hover:bg-white/5',
  }

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClass}`} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') || href.startsWith('mailto') || href.startsWith('https://wa.me') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`group ${combinedClass}`}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`group ${combinedClass}`}
      {...props}
    >
      {content}
    </motion.button>
  )
}
