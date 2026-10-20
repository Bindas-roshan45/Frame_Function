import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-36 pb-20 flex items-center justify-center max-w-xl mx-auto px-4 text-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold border border-black/10 bg-white text-[#FF5500]">
          <span>ERROR 404</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black font-heading tracking-tight text-[#0F1015]">
          4<span className="text-[#FF5500]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#0F1015]">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base text-[#555965] leading-relaxed max-w-md mx-auto">
          The page or digital asset you requested could not be located. It may have been moved or renamed.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F1015] text-white text-xs font-semibold hover:bg-black/85 transition-all shadow-md"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 bg-white text-[#0F1015] text-xs font-semibold hover:bg-black/5 transition-all"
          >
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
