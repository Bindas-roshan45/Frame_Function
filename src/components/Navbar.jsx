import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/navigation'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Adapt to dark hero on homepage when at the top
  const isDarkHero = location.pathname === '/' && !scrolled

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 left-0 right-0 z-40 transition-all duration-300 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`pointer-events-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${isDarkHero
            ? 'bg-black/85 border-white/15 text-white shadow-2xl backdrop-blur-md'
            : scrolled
              ? 'bg-[#FAF8F5]/95 border-black/15 shadow-md backdrop-blur-md text-[#111111]'
              : 'bg-[#FAF8F5]/90 border-black/10 shadow-sm backdrop-blur-md text-[#111111]'
            }`}
        >
          {/* Logo on Left */}
          <Logo light={isDarkHero} />

          {/* Center Navigation Links (Rounded pill menu matching reference) */}
          <div
            className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-full border shadow-xs backdrop-blur-xs transition-colors duration-300 ${isDarkHero ? 'border-white/10 bg-white/5' : 'border-black/5 bg-[#F0EEEA]/80'
              }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 select-none ${isActive
                    ? isDarkHero
                      ? 'text-white'
                      : 'text-[#111111]'
                    : isDarkHero
                      ? 'text-white/70 hover:text-white'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activePillTab"
                        className={`absolute inset-0 rounded-full border shadow-xs ${isDarkHero ? 'bg-white/15 border-white/15' : 'bg-white border-black/5'
                          }`}
                        transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right: CTA Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <NavLink
                to="/contact"
                className={`group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold transition-all shadow-sm ${isDarkHero
                  ? 'bg-[#FF5A0A] hover:bg-[#FF732E] text-white shadow-md shadow-[#FF5A0A]/20'
                  : 'bg-[#111111] hover:bg-black/85 text-white'
                  }`}
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Actions: Compact CTA + Hamburger */}
          <div className="flex items-center gap-1.5 md:hidden">
            <NavLink
              to="/contact"
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-tight active:scale-95 transition-transform ${isDarkHero ? 'bg-[#FF5A0A] text-white' : 'bg-[#111111] text-white'
                }`}
            >
              Connect ↗
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer active:scale-95 transition-transform ${isDarkHero ? 'border-white/20 bg-white/10 text-white' : 'border-black/10 bg-white text-[#111111]'
                }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="pointer-events-auto fixed inset-0 top-[65px] bg-black/40 backdrop-blur-xs z-30 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto fixed top-[68px] left-3 right-3 z-40 bg-[#FAF8F5] border border-black/10 rounded-3xl p-5 shadow-2xl md:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-all ${isActive
                        ? 'bg-[#FF5A0A]/10 text-[#FF5A0A]'
                        : 'text-[#111111] hover:bg-black/5 active:bg-black/5'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-black/10 space-y-2">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FF5A0A] text-white font-bold text-sm shadow-md active:scale-98 transition-transform"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </NavLink>

                <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold text-[#666666]">
                  <a
                    href="https://github.com/Bindas-roshan45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF5A0A] transition-colors py-1"
                  >
                    GitHub: Bindas-roshan45
                  </a>
                  <span>•</span>
                  <a
                    href="https://youtube.com/@roshan_raj45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF5A0A] transition-colors py-1"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
