import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, GraduationCap, MapPin, Sparkles, Terminal, Code2, Database, Wrench, Cpu } from 'lucide-react'
import { agencyInfo } from '../data/agencyInfo'

export default function About() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#646875] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
          <span>ABOUT ME</span>
        </div>
        <h1 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-[#0F1015]">
          TURNING IDEAS INTO REAL-WORLD <span className="text-[#FF5A0A]">TECHNOLOGY.</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#555965] leading-relaxed">
          I’m a BCA student at Veer Narmad South Gujarat University, passionate about web development, artificial intelligence, machine learning and robotics.
        </p>
        <p className="mt-2 text-sm sm:text-base text-[#555965] leading-relaxed">
          I enjoy solving real-world problems through technology and continuously improving my development skills by building practical projects.
        </p>
      </div>

      {/* Origin & Philosophy: Personal Details & Developer Standards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-[#0F1015] tracking-tight">
            Personal Details &amp; Background
          </h2>
          <p className="text-base text-[#555965] leading-relaxed">
            Combining academic computer application foundations with practical hands-on building:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A0A] uppercase tracking-wider mb-1">
                <Code2 className="w-4 h-4" />
                <span>Full Name</span>
              </div>
              <p className="font-heading font-black text-lg text-[#0F1015]">{agencyInfo.details.name}</p>
              <p className="text-xs text-[#646875] mt-1">Developer &amp; Tech Enthusiast</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A0A] uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <p className="font-heading font-black text-base text-[#0F1015]">{agencyInfo.details.education}</p>
              <p className="text-xs text-[#646875] mt-1">{agencyInfo.details.university}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A0A] uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <p className="font-heading font-black text-base text-[#0F1015]">{agencyInfo.details.location}</p>
              <p className="text-xs text-[#646875] mt-1">Gujarat, India (IST Timezone)</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF5A0A] uppercase tracking-wider mb-1">
                <Cpu className="w-4 h-4" />
                <span>Interests</span>
              </div>
              <p className="font-heading font-bold text-sm text-[#0F1015] leading-snug">{agencyInfo.details.interests}</p>
              <p className="text-xs text-[#646875] mt-1">Continuous Real-World Exploration</p>
            </div>
          </div>
        </div>

        {/* Right Studio Banner Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0A0B0E] text-white p-8 rounded-3xl border border-white/10 space-y-5 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A0A] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Developer Mindset</span>
            </div>

            <blockquote className="text-2xl font-black font-heading leading-snug">
              “Turning Ideas Into Real-World Technology.”
            </blockquote>

            <p className="text-xs text-[#A0A5B5] leading-relaxed">
              Every project is an opportunity to learn, optimize, and build robust software. From backend APIs in Python and FastAPI to clean interactive user interfaces in React.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#A0A5B5]">
              <div className="flex justify-between">
                <span>Current Degree</span>
                <span className="text-white">BCA (VNSGU)</span>
              </div>
              <div className="flex justify-between">
                <span>Core Engineering</span>
                <span className="text-white">Python, FastAPI, React, SQL</span>
              </div>
              <div className="flex justify-between">
                <span>Focus Areas</span>
                <span className="text-white">Web Apps, AI/ML &amp; Robotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Spotlight: Roshan Raj */}
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
                    alt="Roshan Raj - Developer"
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
                        <p className="text-white font-bold text-sm sm:text-base font-heading">Roshan Raj</p>
                        <p className="text-[#FF5A0A] text-xs font-semibold">Full Stack Developer | AI Enthusiast</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#FF5A0A] animate-pulse" />
                    </div>
                    <p className="text-[11px] text-[#A0A5B5] mt-2 pt-2 border-t border-white/10 italic leading-snug">
                      “Turning ideas into real-world technology through practical development.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A0A] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                <span>DEVELOPER PROFILE</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
                  Building Practical Solutions with <span className="text-[#FF5A0A]">Modern Code.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#A0A5B5] leading-relaxed">
                  I combine curiosity with deliberate practice to build reliable applications. From crafting user interfaces with React and Tailwind to orchestrating server-side logic in Python and automating workflows with AI integrations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#FF5A0A] text-base font-black font-heading">Web &amp; Systems Engineering</p>
                  <p className="text-xs text-[#A0A5B5] mt-1.5 leading-relaxed">
                    Developing clean, performant full-stack web applications with Python, FastAPI, React, and relational SQL databases.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-[#FF5A0A] text-base font-black font-heading">AI, Automation &amp; Robotics</p>
                  <p className="text-xs text-[#A0A5B5] mt-1.5 leading-relaxed">
                    Building intelligent assistants, workflow automation pipelines, and studying microcontroller interfaces for future robotics.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5A0A] hover:bg-[#ff6a1f] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={agencyInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Explore GitHub Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section: Technical Skills */}
      <div className="mb-24">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#646875] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0F1015]">
            TECHNICAL <span className="text-[#FF5A0A]">SKILLS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555965] max-w-xl">
            My development stack across frontend, backend, databases, developer tooling, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FF5A0A]/10 text-[#FF5A0A] flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0F1015] mb-2">Frontend</h3>
            <p className="text-xs text-[#646875] mb-4">Building responsive, accessible, and fast user interfaces.</p>
            <div className="flex flex-wrap gap-2">
              {agencyInfo.skills.frontend.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF8F5] border border-black/5 text-[#0F1015]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FF5A0A]/10 text-[#FF5A0A] flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0F1015] mb-2">Backend</h3>
            <p className="text-xs text-[#646875] mb-4">Architecting APIs, business logic, and server services.</p>
            <div className="flex flex-wrap gap-2">
              {agencyInfo.skills.backend.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF8F5] border border-black/5 text-[#0F1015]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FF5A0A]/10 text-[#FF5A0A] flex items-center justify-center mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0F1015] mb-2">Database</h3>
            <p className="text-xs text-[#646875] mb-4">Relational data modeling, queries, and structured storage.</p>
            <div className="flex flex-wrap gap-2">
              {agencyInfo.skills.database.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF8F5] border border-black/5 text-[#0F1015]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#FF5A0A]/10 text-[#FF5A0A] flex items-center justify-center mb-4">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0F1015] mb-2">Tools &amp; Environment</h3>
            <p className="text-xs text-[#646875] mb-4">Version control, containerization, local AI runtime, and IDEs.</p>
            <div className="flex flex-wrap gap-2">
              {agencyInfo.skills.tools.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF8F5] border border-black/5 text-[#0F1015]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Other Interests */}
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-[#FF5A0A]/10 text-[#FF5A0A] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#0F1015] mb-2">Specializations &amp; Other Interests</h3>
            <p className="text-xs text-[#646875] mb-4">Key passion areas driving my active projects and long-term development aspirations.</p>
            <div className="flex flex-wrap gap-2">
              {agencyInfo.skills.otherInterests.map((interest) => (
                <span key={interest} className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF5A0A]/10 border border-[#FF5A0A]/30 text-[#FF5A0A]">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Journey / Experience Section */}
      <div className="mb-24">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#646875] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
            <span>CAREER &amp; EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-[#0F1015]">
            PROFESSIONAL <span className="text-[#FF5A0A]">JOURNEY</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555965] max-w-xl">
            My experience in web development, enterprise systems, and undergraduate computing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyInfo.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-black/8 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex items-start gap-2.5 mb-2.5">
                  <span className="shrink-0 bg-[#FF5A0A] text-white font-black text-xs sm:text-sm px-2.5 py-1 rounded-lg flex items-center justify-center shadow-xs">
                    {step.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-black text-sm sm:text-base text-[#111111] leading-tight truncate">
                      {step.title}
                    </h3>
                    {step.step === '02' && (
                      <p className="text-[11px] text-[#666666] font-medium leading-tight mt-0.5 truncate">
                        Web Developer • Oct 2025 – Apr 2026
                      </p>
                    )}
                    {step.step === '03' && (
                      <p className="text-[11px] text-[#666666] font-medium leading-tight mt-0.5 truncate">
                        SAP Operator / Associate • Oct 2026 – Present
                      </p>
                    )}
                    {step.step === '04' && (
                      <p className="text-[11px] text-[#FF5A0A] font-semibold leading-tight mt-0.5 flex items-center gap-1 truncate">
                        <span>📖</span> Personal Learning Journey
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F0EEEA] my-3 relative border border-black/5 shadow-inner">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <p className="text-xs text-[#555555] leading-relaxed mt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reasons to Collaborate CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0B0E] text-white text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-black font-heading">
          Have an Idea? Let’s Build Something <span className="text-[#FF5A0A]">Together.</span>
        </h3>
        <p className="text-sm text-[#A0A5B5] max-w-lg mx-auto leading-relaxed">
          I’m always interested in learning, collaborating and building meaningful technology projects.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5A0A] text-white font-semibold text-sm hover:bg-[#ff6a1f] transition-all shadow-md"
          >
            <span>Let's Connect ↗</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
