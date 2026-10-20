# Frame & Function — Premium Digital Creative Agency Website

> **“Ideas Into Impact. Creativity Without Limits.”**

Frame & Function is an award-winning digital creative agency frontend designed and engineered for ambitious startups, SMBs, coaching institutes, personal brands, and creators looking to build standout digital authority.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **Three.js**, and **Lucide React**.

---

## ✦ Key Highlights & Visual Architecture

- **Futuristic Brand Visual Identity**:
  - Deep atmospheric dark-theme palette: `#08090D`, `#11131A`, `#171923`.
  - Electric accents: Electric Purple (`#8B5CF6`), Neon Blue (`#38BDF8`), and Lime Accent (`#C7F36B`).
  - Space Grotesk for bold editorial typography + Inter for body text.
  - Interactive desktop cursor follower with spring physics.
  - Responsive glassmorphism cards and fine grid lines.

- **Interactive 3D Hero Element (`Hero3D.jsx`)**:
  - Lightweight Three.js geometric polyhedron and gyroscopic rings with reflective physical materials and dynamic mouse parallax.
  - Full fallback for prefers-reduced-motion and non-WebGL environments.

- **Complete Multi-Page Experience**:
  - **`/` (Home)**: Hero with 3D canvas, Services Overview, Selected Work with working filters, Why Choose Us benefit cards, 4-step horizontal/vertical process timeline, Collaboration philosophy, and Final atmospheric CTA.
  - **`/services`**: In-depth specifications, deliverables checklist, target audience, and direct project scoping CTAs for all 5 core disciplines.
  - **`/work`**: Filterable portfolio archive (Websites, Branding, Social Media, Video) with concept exploration indicators and interactive project modal.
  - **`/about`**: Studio mission, vision, creative philosophy ("The Frame & The Function"), and collaboration standards without fabricated personnel or fake stats.
  - **`/contact`**: Validated project inquiry form (Name, Email, Business Name, Service, Budget, Project Details, Consent), celebration confetti, pre-filled mail client fallback, and instant direct WhatsApp chat.
  - **`*` (404 Not Found)**: Branded 404 page with navigation redirects.

---

## ✦ Project Structure

```
├── public/
│   ├── favicon.svg          # Branded SVG monogram favicon
│   ├── robots.txt           # SEO robots configuration
│   └── sitemap.xml          # XML sitemap for search indexing
├── src/
│   ├── components/
│   │   ├── Button.jsx         # Universal interactive button (variants: primary, secondary, outline, lime, whatsapp)
│   │   ├── ContactForm.jsx    # Validated contact form with Formspree / mailto / WhatsApp handling
│   │   ├── CustomCursor.jsx   # Desktop pointer tracker & hover ring
│   │   ├── Footer.jsx         # Configurable agency footer with back-to-top
│   │   ├── Hero3D.jsx         # Three.js 3D hero scene with mouse parallax & fallback
│   │   ├── Navbar.jsx         # Responsive navigation bar with glass scroll effect & mobile drawer
│   │   ├── ProjectCard.jsx    # Concept preview card with interactive visual mockup
│   │   ├── ProjectModal.jsx   # Project detail modal with scope and inquiry link
│   │   ├── SectionHeading.jsx # Standardized editorial section typography
│   │   └── ServiceCard.jsx    # Service cards with custom visual preview mockups
│   ├── data/
│   │   ├── agencyInfo.js      # Central agency data (name, email, WhatsApp, socials, benefits, process)
│   │   ├── navigation.js      # Global navigation links and CTA
│   │   ├── projects.js        # 6 demonstration concept projects across all categories
│   │   └── services.js        # 5 core services with deliverables and visual specs
│   ├── pages/
│   │   ├── About.jsx          # Agency philosophy, mission, vision, collaboration
│   │   ├── Contact.jsx        # Contact & discovery consultation page
│   │   ├── Home.jsx           # Full homepage experience
│   │   ├── NotFound.jsx       # 404 Error page
│   │   ├── Services.jsx       # Detailed services catalog
│   │   └── Work.jsx           # Filterable portfolio showcase
│   ├── App.jsx              # Routing, animated transitions, layout wrapper
│   ├── index.css            # Tailwind v4 design tokens, glassmorphism, utilities
│   └── main.jsx             # React entrypoint
├── index.html               # Semantic HTML, Google Fonts, Open Graph, SEO tags
├── package.json
└── vite.config.js           # Vite configuration with @tailwindcss/vite plugin
```

---

## ✦ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ✦ Central Configuration

All contact details, social links, and form endpoints are centralized in:
`src/data/agencyInfo.js`

To connect a remote contact form provider such as Formspree, add the following to a `.env.local` file:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```
If left unset, the form automatically offers seamless one-click **Email Client (Prefilled)** and **WhatsApp (Instant)** submission modes without faking delivery.
