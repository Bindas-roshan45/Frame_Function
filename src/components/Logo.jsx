import { Link } from 'react-router-dom'

export default function Logo({ light = false, className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 select-none group ${className}`}
      aria-label="Frame &amp; Function Home"
    >
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
        <img
          src={light ? '/images/logo_mark_white.png' : '/images/logo_mark_dark.png'}
          alt="Frame &amp; Function Logo"
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <span
        className={`font-heading font-extrabold text-base sm:text-xl tracking-tight transition-colors ${
          light ? 'text-white' : 'text-[#111111]'
        }`}
      >
        Frame <span className="text-[#BA9E79]">&amp;</span> Function
      </span>
    </Link>
  )
}
