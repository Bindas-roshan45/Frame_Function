import { useSearchParams } from 'react-router-dom'
import { MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react'
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
          <span>START A PROJECT</span>
        </div>
        <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-[#111111]">
          LET'S BUILD SOMETHING <span className="text-[#FF5A0A]">GREAT.</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#666666] leading-relaxed">
          Tell us about your brand, current challenges, and project goals. We'll review your scope and respond within 24 hours.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Info & Discovery Standard */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Direct Inquiries Card */}
          <div className="bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-8 border border-black/5 shadow-sm space-y-6">
            <h2 className="font-heading font-black text-2xl text-[#111111]">
              Direct Inquiries
            </h2>

            <div className="space-y-4 text-sm">
              {/* Card 1: EMAIL CONTACT */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-1">
                <div className="text-xs uppercase font-bold text-[#FF5A0A] tracking-wider">
                  Email Contact
                </div>
                <a
                  href={`mailto:${agencyInfo.contact.email}`}
                  className="text-[#111111] font-bold hover:text-[#FF5A0A] block break-all text-base transition-colors"
                >
                  {agencyInfo.contact.email}
                </a>
                <div className="text-xs text-[#666666]">Replies within 24 business hours</div>
              </div>

              {/* Card 2: PHONE & WHATSAPP */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-2">
                <div className="text-xs uppercase font-bold text-[#111111] tracking-wider">
                  Phone &amp; WhatsApp
                </div>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:+916203487580"
                    className="text-[#111111] font-bold hover:text-[#FF5A0A] text-base transition-colors"
                  >
                    +91 6203487580
                  </a>
                  <a
                    href="tel:+917999131081"
                    className="text-[#111111] font-bold hover:text-[#FF5A0A] text-base transition-colors"
                  >
                    +91 7999131081
                  </a>
                </div>
                <div className="text-xs text-[#666666]">Available for direct calls &amp; WhatsApp scoping</div>
              </div>

              {/* Card 3: STUDIO ADDRESS */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0EEEA]/80 border border-black/5 space-y-1">
                <div className="text-xs uppercase font-bold text-[#666666] tracking-wider">
                  Studio Address
                </div>
                <div className="text-[#111111] font-bold text-base">Gunjan, Vapi, Gujarat</div>
                <div className="text-xs text-[#666666]">Vapi, Gujarat, India</div>
              </div>
            </div>

            {/* Direct WhatsApp Wide Pill */}
            <a
              href={agencyInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp Directly</span>
            </a>
          </div>

          {/* Consultation Promise Card: OUR DISCOVERY STANDARD */}
          <div className="bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-7 border border-black/5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF5A0A]" />
              <span>Our Discovery Standard</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-[#666666]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                <span><strong className="text-[#111111]">No Sales Pressure:</strong> Focused discovery to understand technical fit and goals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                <span><strong className="text-[#111111]">NDA Ready:</strong> Total confidentiality for startups and unreleased concepts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                <span><strong className="text-[#111111]">Clear Quotes:</strong> Transparent deliverables with no hidden costs.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Project Scope Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-[24px] p-5 sm:p-10 border border-black/5 shadow-sm">
          <div className="mb-6 pb-6 border-b border-black/5">
            <h2 className="text-xl sm:text-3xl font-black font-heading text-[#111111]">
              Project Scope Form
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-1">
              Provide your details below to receive a tailored proposal.
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
