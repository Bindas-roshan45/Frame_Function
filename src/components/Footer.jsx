import { MapPin, Send } from 'lucide-react'
import { Github, Youtube, Linkedin } from './SocialIcons'
import { Link } from 'react-router-dom'
import { agencyInfo } from '../data/agencyInfo'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#0A0B0E] text-white pt-8 pb-6 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top / Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 pb-6 border-b border-white/10">
          {/* Brand & Personal Introduction */}
          <div className="lg:col-span-6 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 select-none group"
              aria-label="Roshan Raj Portfolio Home"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-black border border-white/15 flex items-center justify-center p-1 shadow-md group-hover:scale-105 group-hover:border-[#FF5A0A]/50 transition-all duration-300 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Roshan Raj Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-black text-lg sm:text-2xl text-white tracking-tight block">
                  Roshan <span className="text-[#FF5A0A]">Raj</span>
                </span>
                <span className="text-[11px] text-[#A0A5B5] font-medium block">
                  Full Stack Developer &amp; AI/ML Enthusiast
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#A0A5B5] leading-relaxed max-w-sm">
              {agencyInfo.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1 text-[#A0A5B5]">
              <a
                href={agencyInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={agencyInfo.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={agencyInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
              <span>Connect &amp; Collaborate</span>
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#A0A5B5]">
              {/* GitHub */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A0A] mt-0.5">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">GitHub</div>
                  <a
                    href={agencyInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF5A0A] transition-colors font-medium text-xs sm:text-sm"
                  >
                    {agencyInfo.contact.githubUsername}
                  </a>
                </div>
              </div>

              {/* YouTube */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A0A] mt-0.5">
                  <Youtube className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">YouTube</div>
                  <a
                    href={agencyInfo.contact.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF5A0A] transition-colors font-medium text-xs sm:text-sm"
                  >
                    {agencyInfo.contact.youtubeChannel}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#A0A5B5] mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Location</div>
                  <p className="text-white font-medium text-xs sm:text-sm">{agencyInfo.details.location}</p>
                </div>
              </div>

              {/* Direct Message Link */}
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5A0A] hover:underline"
                >
                  <Send className="w-3 h-3" />
                  <span>Send a message via Contact Form ↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-[#646875]">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="w-4 h-4 object-contain rounded-xs opacity-75" />
            <p>© {CURRENT_YEAR} Roshan Raj. All rights reserved. Personal Developer Portfolio.</p>
          </div>
          <p className="text-[10px] text-[#A0A5B5]/60">Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
