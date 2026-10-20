import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { agencyInfo } from '../data/agencyInfo'
import Logo from './Logo'

// Direct SVG brand icons matching reference
function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#0A0B0E] text-white pt-8 pb-6 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top / Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 pb-6 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-6 space-y-3">
            <Logo light={true} />
            <p className="text-xs sm:text-sm text-[#A0A5B5] leading-relaxed max-w-sm">
              Ideas into impact. We design and build award-winning websites, high-retention video reels, dynamic social campaigns, and iconic brand identities.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1 text-[#A0A5B5]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={agencyInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
              <span>Contact Information</span>
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#A0A5B5]">
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A0A] mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Email</div>
                  <a
                    href={`mailto:${agencyInfo.contact.email}`}
                    className="text-white hover:text-[#FF5A0A] transition-colors break-all font-medium text-xs sm:text-sm"
                  >
                    {agencyInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A0A] mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Phone</div>
                  <div className="flex flex-col gap-0.5 pt-0.5">
                    <a
                      href="tel:+916203487580"
                      className="text-white hover:text-[#FF5A0A] transition-colors font-medium text-xs sm:text-sm"
                    >
                      +91 6203487580
                    </a>
                    <a
                      href="tel:+917999131081"
                      className="text-white hover:text-[#FF5A0A] transition-colors font-medium text-xs sm:text-sm"
                    >
                      +91 7999131081
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#A0A5B5] mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Studio Location</div>
                  <p className="text-white font-medium text-xs sm:text-sm">Gunjan, Vapi, Gujarat</p>
                  <p className="text-[11px] text-white/50">Vapi, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-4 flex items-center justify-center text-center text-[11px] text-[#646875]">
          <p>© {CURRENT_YEAR} Frame &amp; Function. All rights reserved. Creative Digital Agency.</p>
        </div>
      </div>
    </footer>
  )
}
