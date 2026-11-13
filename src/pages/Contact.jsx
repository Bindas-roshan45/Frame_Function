import { useSearchParams } from 'react-router-dom'
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react'
import { Github, Youtube, Linkedin } from '../components/SocialIcons'
import { agencyInfo } from '../data/agencyInfo'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service') || ''
  const initialProjectRef = searchParams.get('projectRef') || ''

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
          <span>LET'S CONNECT</span>
        </div>
        <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-[#111111]">
          HAVE AN IDEA? LET'S BUILD SOMETHING <span className="text-[#FF5A0A]">TOGETHER.</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#666666] leading-relaxed">
          I’m always interested in learning, collaborating and building meaningful technology projects.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Profiles & Collaboration Values */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct Profiles Card */}
          <div className="bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-8 border border-black/5 shadow-sm space-y-6">
            <h2 className="font-heading font-black text-2xl text-[#111111]">
              Profiles &amp; Connect
            </h2>

            <div className="space-y-4 text-sm">
              {/* Card 1: GITHUB */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-1">
                <div className="text-xs uppercase font-bold text-[#FF5A0A] tracking-wider flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </div>
                <a
                  href={agencyInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] font-bold hover:text-[#FF5A0A] block break-all text-base transition-colors"
                >
                  github.com/{agencyInfo.contact.githubUsername}
                </a>
                <div className="text-xs text-[#666666]">Open source repositories and project code</div>
              </div>

              {/* Card 2: YOUTUBE */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-1">
                <div className="text-xs uppercase font-bold text-[#111111] tracking-wider flex items-center gap-1.5">
                  <Youtube className="w-3.5 h-3.5 text-red-600" />
                  <span>YouTube Channel</span>
                </div>
                <a
                  href={agencyInfo.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] font-bold hover:text-[#FF5A0A] block text-base transition-colors"
                >
                  {agencyInfo.contact.youtubeChannel}
                </a>
                <div className="text-xs text-[#666666]">Coding tutorials, tech explorations, and developer content</div>
              </div>

              {/* Card 3: LINKEDIN */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-1">
                <div className="text-xs uppercase font-bold text-[#0077B5] tracking-wider flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </div>
                <a
                  href={agencyInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] font-bold hover:text-[#FF5A0A] block text-base transition-colors"
                >
                  Roshan Raj on LinkedIn
                </a>
                <div className="text-xs text-[#666666]">Professional network and technical connections</div>
              </div>

              {/* Card 4: LOCATION */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-1">
                <div className="text-xs uppercase font-bold text-[#666666] tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </div>
                <div className="text-[#111111] font-bold text-base">{agencyInfo.details.location}</div>
                <div className="text-xs text-[#666666]">Gujarat, India (IST Timezone)</div>
              </div>
            </div>

            {/* Direct GitHub Button */}
            <a
              href={agencyInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-black/85 transition-all shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
            </a>
          </div>

          {/* Collaboration Principles Card */}
          <div className="bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-7 border border-black/5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF5A0A]" />
              <span>Collaboration Approach</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-[#666666]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                <span><strong className="text-[#111111]">Clean Architecture:</strong> Writing modular, readable, and maintainable code across Python, React, and SQL.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                <span><strong className="text-[#111111]">Practical Problem Solving:</strong> Grounded in building functional solutions that address real-world workflows.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                <span><strong className="text-[#111111]">Continuous Learning:</strong> Constantly expanding technical horizons in AI, automation, and robotics.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact & Collaboration Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-10 border border-black/5 shadow-sm">
          <div className="mb-6 pb-6 border-b border-black/5">
            <h2 className="text-xl sm:text-3xl font-black font-heading text-[#111111]">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-1">
              Drop a message to discuss a project, collaborate, or connect.
            </p>
          </div>

          <ContactForm
            initialService={initialService}
            initialProjectRef={initialProjectRef}
          />
        </div>
      </div>
    </div>
  )
}
