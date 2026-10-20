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
        <nav className={`pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all ${
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

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <NavLink
              to="/contact"
              className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-semibold"
            >
              Talk ↗
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#111111] cursor-pointer"
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
              className="pointer-events-auto fixed inset-0 top-[70px] bg-black/40 backdrop-blur-xs z-30 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto fixed top-[75px] left-4 right-4 z-40 bg-[#FAF8F5] border border-black/10 rounded-3xl px-6 py-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-black/5 text-[#FF5A0A]'
                          : 'text-[#111111] hover:bg-black/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-black/10">
                <NavLink
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm shadow-md"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
