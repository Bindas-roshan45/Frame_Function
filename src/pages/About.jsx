import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, Eye, Sparkles } from 'lucide-react'
import { agencyInfo } from '../data/agencyInfo'

export default function About() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#646875] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
          <span>ABOUT THE STUDIO</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-[#0F1015]">
          BRANDS THAT <span className="text-[#FF5A0A]">MOVE.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555965] leading-relaxed">
          Frame &amp; Function is a digital creative agency engineered to help ambitious startups, modern businesses, and personal brands stand out through exceptional websites, compelling content, powerful branding, and creative digital experiences.
        </p>
      </div>

      {/* Origin & Philosophy: The Frame & The Function */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0F1015] tracking-tight">
            The Frame &amp; The Function
          </h2>
          <p className="text-base text-[#555965] leading-relaxed">
            Every memorable digital experience requires the harmony of two foundational elements:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
              <h3 className="font-heading font-bold text-lg text-[#0F1015] mb-1.5 flex items-center gap-2">
                <span className="text-[#FF5A0A]">01 / The Frame</span> — Visual Identity &amp; Emotion
              </h3>
              <p className="text-sm text-[#555965] leading-relaxed">
                How your brand appears, communicates, and resonates. It encompasses bold typography, color balance, video pacing, and storytelling that captivate audience attention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
              <h3 className="font-heading font-bold text-lg text-[#0F1015] mb-1.5 flex items-center gap-2">
                <span className="text-[#0F1015]">02 / The Function</span> — Usability &amp; Architecture
              </h3>
              <p className="text-sm text-[#555965] leading-relaxed">
                How smoothly your digital assets operate. It encompasses sub-second load times, clean responsive layouts, frictionless navigation, and conversion optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Right Studio Banner Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0A0B0E] text-white p-8 rounded-3xl border border-white/10 space-y-5 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A0A] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Studio Standard</span>
            </div>

            <blockquote className="text-2xl font-black font-heading leading-snug">
              “Ideas Into Impact. Creativity Without Limits.”
            </blockquote>

            <p className="text-xs text-[#A0A5B5] leading-relaxed">
              We eliminate bloated account bureaucracy and generic templates. Every client collaborates directly with the creative and technical specialists building their product.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#A0A5B5]">
              <div className="flex justify-between">
                <span>Core Stack</span>
                <span className="text-white">React, Vite, 3D, Motion</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Model</span>
                <span className="text-white">Sprint-based &amp; Direct</span>
              </div>
              <div className="flex justify-between">
                <span>Asset Ownership</span>
                <span className="text-white">100% Client Owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#FF5A0A]/10 text-[#FF5A0A] flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-black font-heading text-[#0F1015]">Our Mission</h3>
          <p className="text-sm sm:text-base text-[#555965] leading-relaxed">
            To build standout digital assets for ambitious brands — websites, branding, high-retention video, and creative content — that inspire customer trust, accelerate brand growth, and generate measurable impact.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-black/5 text-[#0F1015] flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-black font-heading text-[#0F1015]">Our Vision</h3>
          <p className="text-sm sm:text-base text-[#555965] leading-relaxed">
            To redefine digital creative partnerships by combining the visual caliber of top design studios with the technical precision of modern software engineering.
          </p>
        </div>
      </div>

      {/* Leadership & Creative Direction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <div className="bg-[#0A0B0E] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Subtle ambient lighting glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#FF5A0A]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FF5A0A]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Frame accent glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FF5A0A] via-white/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity blur-xs" />
                <div className="relative rounded-2xl overflow-hidden bg-[#16181F] border border-white/15 aspect-[3/4] shadow-2xl">
                  <img
                    src="/images/founder_portrait.webp"
                    alt="Roshan Kumar - Founder & Creative Director"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle bottom vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent opacity-60" />

                  {/* Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0A0B0E]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm sm:text-base font-heading">Roshan Kumar</p>
                        <p className="text-[#FF5A0A] text-xs font-semibold">Founder &amp; Creative Director</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#FF5A0A] animate-pulse" />
                    </div>
                    <p className="text-[11px] text-[#A0A5B5] mt-2 pt-2 border-t border-white/10 italic leading-snug">
                      “Turning creative ideas into meaningful digital experiences.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A0A] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                <span>LEADERSHIP &amp; CREATIVE DIRECTION</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
                  Building Digital Experiences That Make Brands <span className="text-[#FF5A0A]">Unforgettable.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#A0A5B5] leading-relaxed">
                  We combine creative vision, thoughtful design, and modern technology to help ambitious brands stand out. From powerful websites and compelling visuals to engaging social media and high-impact videos, we turn ideas into digital experiences that inspire action.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#FF5A0A] text-base font-black font-heading">Direct Collaboration</p>
                  <p className="text-xs text-[#A0A5B5] mt-1.5 leading-relaxed">
                    Work directly with our creative team, ensuring your vision stays at the heart of every decision—from the first idea to the final launch.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#FF5A0A] text-base font-black font-heading">Creative to Complete</p>
                  <p className="text-xs text-[#A0A5B5] mt-1.5 leading-relaxed">
                    From brand identity and engaging reels to high-performance websites, we bring every piece of your digital presence together under one cohesive vision.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5A0A] hover:bg-[#ff6a1f] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md cursor-pointer"
                >
                  <span>Let's Build Something</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${agencyInfo.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Meet Our Founders — Ayush (Co-Founder) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <div className="bg-[#0A0B0E] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Subtle ambient lighting glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#FF5A0A]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF5A0A]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Founder information and text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A0A] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                <span>MEET OUR FOUNDERS</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
                  Building Our Vision, <span className="text-[#FF5A0A]">Together.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#A0A5B5] leading-relaxed">
                  Great ideas deserve great execution. At Frame &amp; Function, we combine creativity, technology, and strategy to build meaningful digital experiences. As co-founders, we share one vision: helping brands grow through thoughtful design and innovative digital solutions.
                </p>
              </div>

              {/* Highlight callout text */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF5A0A] to-[#FF732E]" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A0A] mb-1">
                  Guiding Philosophy
                </p>
                <p className="text-sm sm:text-base font-extrabold font-heading text-white tracking-wide">
                  Creative Thinking. Digital Innovation. Shared Vision.
                </p>
              </div>

              {/* Equal Co-Founder Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#FF5A0A] text-base font-black font-heading">Thoughtful Design</p>
                  <p className="text-xs text-[#A0A5B5] mt-1.5 leading-relaxed">
                    Crafting intuitive digital architectures and aesthetic identities that set industry standards.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#FF5A0A] text-base font-black font-heading">Digital Solutions</p>
                  <p className="text-xs text-[#A0A5B5] mt-1.5 leading-relaxed">
                    Transforming complex brand requirements into fast, scalable, and high-impact digital products.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5A0A] hover:bg-[#ff6a1f] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-[0_0_24px_rgba(255,90,10,0.4)] cursor-pointer group"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${agencyInfo.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Ayush's photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Frame accent glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FF5A0A] via-white/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity blur-xs" />

                {/* Premium Frame with subtle rounded corners and hover animation */}
                <div className="relative rounded-2xl overflow-hidden bg-[#16181F] border border-white/15 aspect-[3/4] shadow-2xl transition-all duration-500 group-hover:border-[#FF5A0A]/40">
                  <img
                    src="/images/ayush.png"
                    alt="Ayush - Co-Founder of Frame & Function"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle bottom vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0A0B0E]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm sm:text-base font-heading">Ayush</p>
                        <p className="text-[#FF5A0A] text-xs font-semibold">Co-Founder of Frame &amp; Function</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#FF5A0A] animate-pulse" />
                    </div>
                    <p className="text-[11px] text-[#A0A5B5] mt-2 pt-2 border-t border-white/10 italic leading-snug">
                      “Creative Thinking. Digital Innovation. Shared Vision.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4-Step Process Section with 3D Render Cards */}
      <div className="mb-24">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#646875] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>HOW WE DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0F1015]">
            HOW IT <span className="text-[#FF5A0A]">WORKS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyInfo.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-5 border border-black/5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading font-black text-xl text-[#0F1015]">
                    {step.step}
                  </span>
                  <span className="font-heading font-bold text-lg text-[#0F1015]">
                    {step.title}
                  </span>
                </div>

                <div className="w-full aspect-square rounded-xl bg-[#FAF8F5] p-3 flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="text-xs text-[#555965] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reasons to Collaborate */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0B0E] text-white text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-black font-heading">
          Let’s Build Something <span className="text-[#FF5A0A]">Great</span>
        </h3>
        <p className="text-sm text-[#A0A5B5] max-w-lg mx-auto leading-relaxed">
          Ready to elevate your online authority and stand out from the competition? Let's discuss your project.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm hover:bg-[#ff6a1f] transition-all shadow-md"
          >
            <span>Start a Project ↗</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
