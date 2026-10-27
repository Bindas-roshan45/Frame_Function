import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { agencyInfo } from '../data/agencyInfo'

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.hash])

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#646875] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
          <span>OUR CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-[#0F1015]">
          WHAT WE <span className="text-[#FF5A0A]">DO</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#555965] leading-relaxed">
          We combine cutting-edge 3D visuals, high-conversion web development, dynamic video editing, and comprehensive brand identity systems to build brands that move.
        </p>
      </div>

      {/* Services List - Large Visual Sections */}
      <div className="space-y-10 sm:space-y-16">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 1

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24 sm:scroll-mt-28 bg-white rounded-3xl p-5 sm:p-10 lg:p-12 border border-black/5 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Image Render */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] border border-black/5 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Text Content & Scope */}
                <div className={`lg:col-span-7 space-y-5 sm:space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-lg sm:text-xl text-[#FF5A0A]">
                      {service.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#646875]">
                      {service.category} Discipline
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black font-heading text-[#0F1015] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#555965] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Included Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F1015]">
                      Core Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#555965]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F1015] text-white text-xs sm:text-sm font-semibold hover:bg-black/85 transition-all shadow-sm active:scale-98"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={agencyInfo.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-black/10 bg-white text-[#0F1015] text-xs sm:text-sm font-semibold hover:bg-black/5 transition-all active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp Scoping</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Bottom Consultation Banner */}
      <div className="mt-16 sm:mt-20 p-6 sm:p-12 rounded-3xl bg-[#0A0B0E] text-white text-center space-y-4">
        <h3 className="text-xl sm:text-3xl font-black font-heading">
          Need a Custom Multi-Discipline Package?
        </h3>
        <p className="text-xs sm:text-sm text-[#A0A5B5] max-w-lg mx-auto">
          We frequently partner with brands to handle full digital launches combining custom website engineering, video editing reels, and brand identity design.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm hover:bg-[#ff6a1f] transition-all shadow-lg active:scale-98"
          >
            <span>Start a Project ↗</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
