// Central agency configuration - easily customizable in one place
export const agencyInfo = {
  name: 'Frame & Function',
  wordmark: 'Frame & Function',
  tagline: 'BRANDS THAT MOVE.',
  headlineFirst: 'BRANDS',
  headlineMiddle: 'THAT',
  headlineAccent: 'MOVE',
  subtagline: 'Websites, Social Media, Video Editing, Branding & Graphic Design',
  badge: 'CREATIVE DIGITAL AGENCY',
  
  // Contact details
  contact: {
    email: 'framefunctionsupp@gmail.com',
    phone: '+91 6203487580',
    phone2: '+91 7999131081',
    phones: ['+91 6203487580', '+91 7999131081'],
    phoneDisplay: '+91 6203487580 / +91 7999131081',
    whatsappNumber: '916203487580',
    whatsappMessage: encodeURIComponent("Hello Frame & Function! I'd like to discuss a new creative project."),
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${this.whatsappMessage}`
    },
    location: 'Gunjan, Vapi, Gujarat',
    address: 'Gunjan, Vapi, Gujarat, India',
    formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  },

  // Social Links matching footer
  socials: [
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'WhatsApp', url: 'https://wa.me/916203487580', icon: 'MessageCircle' },
  ],

  // Process (4 Steps matching reference image Section 5)
  processSteps: [
    {
      step: '01',
      title: 'Discover',
      description: 'Understanding your brand context, target audience, competitive landscape, and key goals.',
      image: '/images/process_discover.webp',
      iconName: 'Search',
    },
    {
      step: '02',
      title: 'Strategize',
      description: 'Developing the creative direction, moodboards, user journeys, project milestones, and roadmap.',
      image: '/images/process_strategize.webp',
      iconName: 'Target',
    },
    {
      step: '03',
      title: 'Create',
      description: 'Designing interactive interfaces, writing clean frontend code, editing high-retention video assets.',
      image: '/images/process_create.webp',
      iconName: 'Lightbulb',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Delivering production assets, deploying fast infrastructure, and providing dedicated launch support.',
      image: '/images/process_launch.webp',
      iconName: 'Rocket',
    },
  ],
}
