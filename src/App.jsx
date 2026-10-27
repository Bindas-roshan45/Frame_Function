import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'

// Dynamic lazy imports for non-landing routes
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Minimal, elegant route loading fallback matching Frame & Function brand aesthetic
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A0A] animate-ping" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#666666]">Loading...</span>
      </div>
    </div>
  )
}

// Scroll restoration component
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F5F3EF] text-[#111111] font-sans antialiased relative selection:bg-[#FF5A0A]/20 selection:text-[#FF5A0A] overflow-x-clip w-full max-w-full">
        {/* Floating circular scroll progress back-to-top button */}
        <BackToTop />

        {/* Global Navigation */}
        <Navbar />

        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Page Content */}
        <main className="flex-1">
          <AnimatedRoutes />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}
