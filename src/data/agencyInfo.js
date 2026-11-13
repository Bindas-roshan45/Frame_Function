// Central configuration for Roshan Raj - Personal Developer Portfolio
export const agencyInfo = {
  name: 'Roshan Raj',
  wordmark: 'Roshan Raj',
  title: 'Full Stack Developer | AI/ML Enthusiast | Future Robotics Engineer',
  tagline: 'BUILDING DIGITAL EXPERIENCES & EXPLORING INTELLIGENT TECHNOLOGY.',
  headlineFirst: 'Building Digital',
  headlineMiddle: 'Experiences &',
  headlineAccent: 'Intelligent Tech.',
  mainHeading: 'Building Digital Experiences & Exploring Intelligent Technology.',
  subtagline: 'Full Stack Developer | AI/ML Enthusiast | Future Robotics Engineer',
  badge: 'FULL STACK DEVELOPER | AI/ML ENTHUSIAST | FUTURE ROBOTICS ENGINEER',
  description:
    'I’m Roshan Raj, a BCA student and developer passionate about building modern websites, AI-powered applications, automation systems and intelligent technologies.',

  // Personal details
  details: {
    name: 'Roshan Raj',
    education: 'Bachelor of Computer Applications (BCA)',
    university: 'Veer Narmad South Gujarat University (VNSGU)',
    location: 'Vapi, Gujarat, India',
    interests: 'Web Development, AI/ML, Automation and Robotics.',
  },

  // Experience and Journey
  experience: [
    {
      role: 'Web Developer',
      company: 'The Layout',
      period: 'October 2025 – April 2026',
      description: 'Built responsive web interfaces, modern layouts, and optimized frontend performance.',
    },
    {
      role: 'SAP Operator / Associate',
      company: 'Creative Textile Mill, GIDC',
      period: 'October 2026 – Present',
      description: 'Managing enterprise SAP operations, process workflows, and data integrity.',
    },
    {
      role: 'BCA Student & Developer',
      company: 'Veer Narmad South Gujarat University',
      period: 'Undergraduate',
      description: 'Focusing on computer science fundamentals, full-stack web engineering, and AI systems.',
    },
  ],

  // Technical Skills
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    backend: ['Python', 'Flask', 'FastAPI', 'PHP'],
    database: ['PostgreSQL', 'MySQL', 'SQLite'],
    tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Ollama'],
    otherInterests: ['AI/ML', 'Automation', 'Robotics'],
  },

  // Contact details
  contact: {
    location: 'Vapi, Gujarat, India',
    address: 'Vapi, Gujarat, India',
    github: 'https://github.com/Bindas-roshan45',
    githubUsername: 'Bindas-roshan45',
    youtube: 'https://youtube.com/@roshan_raj45',
    youtubeChannel: 'NextGen Coder (@roshan_raj45)',
    linkedin: 'https://linkedin.com',
    formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  },

  // Social Links matching footer
  socials: [
    { name: 'GitHub', url: 'https://github.com/Bindas-roshan45', icon: 'Github' },
    { name: 'YouTube', url: 'https://youtube.com/@roshan_raj45', icon: 'Youtube' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  ],

  // Professional Journey / Process Steps (matching 4 Connected Steps in Section 5)
  processSteps: [
    {
      step: '01',
      title: 'BCA Education',
      role: 'Bachelor of Computer Applications',
      duration: 'VNSGU • Active Study',
      category: 'Education & Computing',
      description: 'Studying Bachelor of Computer Applications at Veer Narmad South Gujarat University, building a strong foundation in computing and software development.',
      image: '/images/bca.png',
      iconName: 'GraduationCap',
      type: 'Education',
    },
    {
      step: '02',
      title: 'The Layout',
      role: 'Web Developer',
      duration: 'October 2025 – April 2026',
      category: 'Frontend Engineering',
      description: 'Worked on responsive user interfaces, modern website layouts, and interactive web experiences.',
      image: '/images/renponsive.png',
      iconName: 'Briefcase',
      type: 'Work Experience',
    },
    {
      step: '03',
      title: 'Creative Textile Mill',
      role: 'SAP Operator / Associate',
      duration: 'October 2026 – Present',
      category: 'Enterprise Operations',
      description: 'Working with enterprise systems, SAP operations, data management, and business workflows.',
      image: '/images/sap_textile.png',
      iconName: 'Building',
      type: 'Work Experience',
    },
    {
      step: '04',
      title: 'AI & Robotics',
      role: 'Personal Learning Journey',
      duration: 'Continuous Exploration',
      category: 'Personal Learning Journey',
      description: 'Exploring Artificial Intelligence, Machine Learning, automation, and robotics while developing projects like MailMind AI and JARVIS 3.0.',
      image: '/images/automation.png',
      iconName: 'Bot',
      type: 'Personal Learning Journey',
    },
  ],
}
