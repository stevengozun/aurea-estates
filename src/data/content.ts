// Imagery: Unsplash architecture (graceful gradient fallback in the UI).
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const VALUES = ['Prime Locations', 'Structured Process', 'Precise Delivery']

export const STATS = [
  { value: 18, suffix: '+', label: 'Years of experience' },
  { value: 246, suffix: '+', label: 'Residences delivered' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
]

export type Project = {
  id: string
  name: string
  location: string
  image: string
}

export const PROJECTS: Project[] = [
  { id: 'p1', name: 'Modern Urban Home', location: 'San Francisco, CA', image: img('1600585154340-be6161a56a0c') },
  { id: 'p2', name: 'Beachfront Residence', location: 'Sunnyvale, CA', image: img('1613490493576-7fde63acd811') },
  { id: 'p3', name: 'Natural Urban Home', location: 'Mountain View, CA', image: img('1512917774080-9991f1c4c750') },
  { id: 'p4', name: 'Hillside Urban Home', location: 'Palo Alto, CA', image: img('1600596542815-ffad4c1539a9') },
]

export type Service = {
  id: string
  title: string
  body: string
  image: string
}

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Residential Design',
    body: 'Bespoke homes shaped around how you live — proportion, light, and material in balance.',
    image: img('1600607687939-ce8a6c25118c', 900),
  },
  {
    id: 's2',
    title: 'Commercial Spaces',
    body: 'Workplaces and retail environments engineered for flow, brand, and longevity.',
    image: img('1497366216548-37526070297c', 900),
  },
  {
    id: 's3',
    title: 'Landscape Design',
    body: 'Grounds, courtyards, and pools that extend the architecture into the open air.',
    image: img('1600566753190-17f0baa2a6c3', 900),
  },
  {
    id: 's4',
    title: 'Interior Design',
    body: 'Considered interiors — finishes, furniture, and detailing curated end to end.',
    image: img('1616486338812-3dadae4b4ace', 900),
  },
  {
    id: 's5',
    title: 'Sustainable Build',
    body: 'Low-impact construction, passive systems, and materials that age gracefully.',
    image: img('1582268611958-ebfd161ef9cf', 900),
  },
]

export type Work = {
  id: string
  name: string
  area: string
  image: string
}

export const WORKS: Work[] = [
  { id: 'w1', name: 'Dining Pavilion', area: '180 m²', image: img('1600210492493-0946911123ea') },
  { id: 'w2', name: 'Serenity Residence', area: '400 m²', image: img('1600585154526-990dced4db0d') },
  { id: 'w3', name: 'Aura Living Space', area: '320 m²', image: img('1600607687920-4e2a09cf159d') },
]

export const PROCESS = [
  { step: '01', title: 'Consultation & Brief', body: 'We listen first — site, lifestyle, budget, and ambition become the brief.' },
  { step: '02', title: 'Concept Design', body: 'Early massing and spatial concepts explored through sketch and 3D.' },
  { step: '03', title: 'Design Development', body: 'Plans, materials, and details resolved into a coherent, buildable scheme.' },
  { step: '04', title: 'Refinement & Review', body: 'Iteration with you until every room and transition feels right.' },
  { step: '05', title: 'Delivery', body: 'Documentation, coordination, and handover — built precisely as designed.' },
]

export const REVIEWS = [
  {
    id: 'r1',
    name: 'Daniel Hofmann',
    role: 'Homeowner, Palo Alto',
    rating: '4.9',
    body: 'Aurea turned a difficult sloping site into a home that feels effortless. The process was calm, clear, and exact from first sketch to keys.',
  },
  {
    id: 'r2',
    name: 'Priya Nair',
    role: 'Developer, San Francisco',
    rating: '5.0',
    body: 'A rare studio that holds design quality and delivery discipline at once. Every milestone landed on time and on brief.',
  },
  {
    id: 'r3',
    name: 'Marcus Bell',
    role: 'Investor, Sunnyvale',
    rating: '4.9',
    body: 'The 3D walkthroughs made decisions obvious. We signed off faster and the finished residence matched the renders exactly.',
  },
]

export type Article = {
  id: string
  title: string
  date: string
  category: string
  image: string
}

export const ARTICLES: Article[] = [
  { id: 'a1', title: 'Real estate market trends for 2026', date: 'Apr 28, 2026', category: 'Market', image: img('1486406146926-c627a92ad1ab', 900) },
  { id: 'a2', title: 'Functional interiors: the quiet secret', date: 'Apr 14, 2026', category: 'Interiors', image: img('1505691938895-1758d7feb511', 900) },
  { id: 'a3', title: 'Designing homes that age gracefully', date: 'Mar 30, 2026', category: 'Architecture', image: img('1600573472550-8090b5e0745e', 900) },
]

export const FAQS = [
  { q: 'Do you provide 3D visualization before construction?', a: 'Yes. Every project includes interactive 3D models and rendered walkthroughs so you can experience the design before a single wall is built.' },
  { q: 'How long does a typical project take?', a: 'Residential schemes usually run 8–16 months from brief to handover, depending on scale, site, and permitting. We share a milestone timeline at kickoff.' },
  { q: 'What types of clients do you work with?', a: 'Private homeowners, developers, and investors — from single residences to multi-unit and commercial work.' },
  { q: 'Can you work with my existing site or property?', a: 'Absolutely. We begin with a site and feasibility study and design around its constraints and opportunities.' },
  { q: 'What do you need from me to start?', a: 'A short brief on your goals, budget range, and site details. We handle the rest in the consultation phase.' },
  { q: 'Do you manage delivery and contractors?', a: 'We offer full documentation and construction coordination, or design-only engagements — whichever suits your project.' },
]
