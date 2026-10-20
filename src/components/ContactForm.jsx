import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, MessageSquare, Mail, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'
import { agencyInfo } from '../data/agencyInfo'

const SERVICE_OPTIONS = [
  'Website Development',
  'Social Media Management',
  'Video Editing & Reels',
  'Branding & Graphic Design',
  'Creative Content',
  'Full Brand Overhaul',
]

const BUDGET_OPTIONS = [
  'Under ₹4,000',
  '₹4,000 – ₹7,000',
  '₹7,000 – ₹15,000',
  '₹15,000+',
  'Flexible Budget',
]

export default function ContactForm({ initialService = '', initialProjectRef = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    service: initialService
      ? (SERVICE_OPTIONS.find((s) => s.toLowerCase().includes(initialService.toLowerCase())) || SERVICE_OPTIONS[0])
      : SERVICE_OPTIONS[0],
    budget: '₹4,000 – ₹7,000',
    projectDetails: initialProjectRef ? `Inquiring about project reference: ${initialProjectRef}. ` : '',
    consent: false,
  })

  const [prevInitialService, setPrevInitialService] = useState(initialService)
  if (prevInitialService !== initialService) {
    setPrevInitialService(initialService)
    if (initialService) {
      const match = SERVICE_OPTIONS.find((s) => s.toLowerCase().includes(initialService.toLowerCase()))
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }))
      }
    }
  }

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.'
    }
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide a brief summary of what you are looking to build (at least 10 characters).'
    }
    if (!formData.budget || !BUDGET_OPTIONS.includes(formData.budget)) {
      newErrors.budget = 'Please select a target budget.'
    }
    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding your inquiry.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF5A0A', '#111111', '#FFAA00'],
      })
    } catch {
      // safe fallback
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    setErrorMessage('')

    const endpoint = agencyInfo.contact.formEndpoint

    if (!endpoint) {
      setStatus('endpoint_notice')
      triggerCelebration()
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        triggerCelebration()
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMessage(data?.error || 'Unable to submit the form. Please reach out to us via email or WhatsApp.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network connection error. Please try again or reach out directly via WhatsApp or email.')
    }
  }

  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`)
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.businessName || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.projectDetails}`
  )
  const mailtoUrl = `mailto:${agencyInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`

  const waCustomMessage = encodeURIComponent(
    `Hi Frame & Function! My name is ${formData.name || 'there'}. I'm inquiring about ${formData.service} (Budget: ${formData.budget}). Project Overview: ${formData.projectDetails || "Let's talk!"}`
  )
  const dynamicWhatsAppUrl = `https://wa.me/${agencyInfo.contact.whatsappNumber}?text=${waCustomMessage}`

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 sm:p-10 rounded-2xl bg-white border border-[#FF5A0A]/40 text-center space-y-4 shadow-xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#FF5A0A]/15 text-[#FF5A0A] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#111111]">
              Inquiry Received!
            </h3>
            <p className="text-[#666666] max-w-md mx-auto text-sm leading-relaxed">
              Thank you for reaching out to Frame &amp; Function. We have received your project details and will review them promptly within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Follow Up on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle')
                  setFormData({
                    name: '',
                    email: '',
                    businessName: '',
                    service: SERVICE_OPTIONS[0],
                    budget: '₹4,000 – ₹7,000',
                    projectDetails: '',
                    consent: false,
                  })
                }}
                className="px-6 py-3 rounded-full border border-black/10 bg-black/5 text-[#111111] text-xs font-bold hover:bg-black/10 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        )}

        {status === 'endpoint_notice' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 rounded-2xl bg-white border border-[#FF5A0A]/30 space-y-5 shadow-lg"
          >
            <div className="flex items-center gap-3 text-[#FF5A0A]">
              <Sparkles className="w-6 h-6 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-black font-heading text-[#111111]">
                Inquiry Formatted &amp; Ready
              </h3>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed">
              Your project inquiry has been formatted. Send it directly to our team via WhatsApp or your email client:
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-black/5 space-y-1.5 text-xs text-[#111111]">
              <div><strong>Client:</strong> {formData.name} ({formData.email})</div>
              <div><strong>Service:</strong> {formData.service}</div>
              <div><strong>Budget:</strong> {formData.budget}</div>
              <div><strong>Summary:</strong> {formData.projectDetails}</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp (Instant)</span>
              </a>
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-black/85 transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-xs text-[#666666] hover:text-[#111111] underline sm:ml-auto cursor-pointer"
              >
                Edit Form
              </button>
            </div>
          </motion.div>
        )}

        {status !== 'success' && status !== 'endpoint_notice' && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Submission Alert</p>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  className={`w-full rounded-xl bg-white border px-4 py-3.5 text-sm text-[#111111] focus:outline-none transition-all ${
                    errors.name ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-400' : 'border-black/10 focus:border-[#FF5A0A] focus:ring-1 focus:ring-[#FF5A0A]'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  className={`w-full rounded-xl bg-white border px-4 py-3.5 text-sm text-[#111111] focus:outline-none transition-all ${
                    errors.email ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-400' : 'border-black/10 focus:border-[#FF5A0A] focus:ring-1 focus:ring-[#FF5A0A]'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
              </div>
            </div>

            {/* Row 2: Business & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="businessName" className="block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider">
                  Business / Brand <span className="text-[#666666] font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full rounded-xl bg-white border border-black/10 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FF5A0A] focus:ring-1 focus:ring-[#FF5A0A] transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider">
                  Service of Interest <span className="text-rose-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-black/10 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FF5A0A] focus:ring-1 focus:ring-[#FF5A0A] transition-all cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Budget Range */}
            <div>
              <label htmlFor="budget" className="block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider">
                Target Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {BUDGET_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, budget: option }))
                      if (errors.budget) {
                        setErrors((prev) => {
                          const next = { ...prev }
                          delete next.budget
                          return next
                        })
                      }
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      formData.budget === option
                        ? 'border-[#FF5A0A] bg-[#FF5A0A] text-white shadow-xs'
                        : 'border-black/10 bg-white text-[#666666] hover:border-black/25 hover:text-[#111111]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p className="mt-1.5 text-xs text-rose-500">{errors.budget}</p>
              )}
            </div>

            {/* Row 4: Project Details */}
            <div>
              <label htmlFor="projectDetails" className="block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider">
                Project Overview &amp; Goals <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder=""
                className={`w-full rounded-xl bg-white border px-4 py-3.5 text-sm text-[#111111] focus:outline-none transition-all ${
                  errors.projectDetails ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-400' : 'border-black/10 focus:border-[#FF5A0A] focus:ring-1 focus:ring-[#FF5A0A]'
                }`}
              />
              {errors.projectDetails && (
                <p className="mt-1 text-xs text-rose-500">{errors.projectDetails}</p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div>
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded border-black/20 text-[#FF5A0A] focus:ring-[#FF5A0A]"
                />
                <span className="text-xs text-[#666666] leading-snug">
                  I consent to sharing this project information with Frame &amp; Function for consultation and scoping.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-rose-500 pl-6 mt-1">{errors.consent}</p>
              )}
            </div>

            {/* Bottom Actions: Orange Submit + White Outlined WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5A0A] text-white font-bold text-sm hover:bg-[#e04f08] transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}</span>
              </button>

              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-black/15 bg-white text-[#111111] font-bold text-sm hover:bg-black/5 transition-all shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
