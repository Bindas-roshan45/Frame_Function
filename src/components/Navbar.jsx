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
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 left-0 right-0 z-40 transition-all duration-300 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`pointer-events-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 rounded-full border transition-all ${
          scrolled ? 'bg-[#FAF8F5]/95 border-black/15 shadow-md' : 'bg-[#FAF8F5]/90 border-black/10 shadow-sm'
        } backdrop-blur-md`}>
          {/* Logo on Left */}
          <Logo />

          {/* Center Navigation Links (Rounded pill menu matching reference) */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full border border-black/5 bg-[#F0EEEA]/80 shadow-xs backdrop-blur-xs">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 select-none ${
                    isActive
                      ? 'text-[#111111]'
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
                        className="absolute inset-0 rounded-full bg-white border border-black/5 shadow-xs"
                        transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right: Black "Let's Talk ↗" Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <NavLink
                to="/contact"
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs lg:text-sm font-semibold hover:bg-black/85 transition-all shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Actions: Compact CTA + Hamburger */}
          <div className="flex items-center gap-1.5 md:hidden">
            <NavLink
              to="/contact"
              className="px-3 py-1.5 rounded-full bg-[#111111] text-white text-[11px] font-bold tracking-tight active:scale-95 transition-transform"
            >
              Talk ↗
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#111111] cursor-pointer active:scale-95 transition-transform"
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
                      `flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                        isActive
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
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </NavLink>

                <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold text-[#666666]">
                  <a
                    href="tel:+916203487580"
                    className="hover:text-[#FF5A0A] transition-colors py-1"
                  >
                    Call: +91 6203487580
                  </a>
                  <span>•</span>
                  <a
                    href="https://wa.me/916203487580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors py-1"
                  >
                    WhatsApp
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
