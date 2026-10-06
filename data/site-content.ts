export type ProgramStatus = 'Active pilot' | 'In development' | 'Planned'

export const approachSteps = [
  { title: 'Learn', description: 'Beginner-friendly programming and practical digital skills.' },
  { title: 'Practice', description: 'Short, hands-on exercises designed for low-friction learning.' },
  { title: 'Build', description: 'Useful projects that turn concepts into visible outcomes.' },
  { title: 'Collaborate', description: 'Peer, mentor, and community workflows introduced at the right time.' },
  { title: 'Contribute', description: 'Portfolio-building work and gradual participation in open source.' },
]

export const learnerLevels = [
  {
    level: 'Level 0',
    title: 'Digital Foundations',
    description: 'Computer basics, files and folders, internet fundamentals, digital safety, and problem-solving.',
  },
  {
    level: 'Level 1',
    title: 'Programming Fundamentals',
    description: 'Logic, variables, conditions, loops, and functions explained through practical examples.',
  },
  {
    level: 'Level 2',
    title: 'Web Fundamentals',
    description: 'HTML, CSS, and JavaScript for building accessible, responsive web pages.',
  },
  {
    level: 'Level 3',
    title: 'Build Projects',
    description: 'Personal, school, small-business, and community information projects.',
  },
  {
    level: 'Level 4',
    title: 'Collaboration',
    description: 'Git basics, GitHub, team projects, feedback, and code review.',
  },
  {
    level: 'Level 5',
    title: 'Open Source',
    description: 'Issues, pull requests, documentation, and responsible contributor workflows.',
  },
]

export const programs: Array<{
  slug: string
  title: string
  subtitle?: string
  status: ProgramStatus
  objective: string
  learners: string
  duration: string
  delivery: string
  requirements: string
  mentors: string
  output: string
  metrics: string
  partnership: string
  href?: string
}> = [
  {
    slug: 'digital-foundations',
    title: 'Digital Foundations Program',
    status: 'Planned',
    objective: 'Build the digital confidence needed before formal programming study.',
    learners: 'First-time computer users and learners who need a stronger digital foundation.',
    duration: 'To be validated through a pilot',
    delivery: 'Designed for online or facilitated community delivery.',
    requirements: 'A basic computer or shared device; low-bandwidth materials are planned.',
    mentors: 'Facilitators who can support foundational digital tasks.',
    output: 'A practical digital-skills checklist and small information task.',
    metrics: 'Participation, task completion, and learner confidence signals.',
    partnership: 'Pilot host sites, devices, connectivity, and facilitator support.',
  },
  {
    slug: 'programming-foundations',
    title: 'Programming Foundations',
    status: 'Active pilot',
    objective: 'Help beginners complete a first structured web-learning pathway.',
    learners: 'Secondary-school learners, first-time programmers, and independent beginners.',
    duration: 'Self-paced first module; an 8–12 week facilitated model is in development.',
    delivery: 'Online now, with hybrid delivery planned for institutional pilots.',
    requirements: 'A browser and basic internet connection; lessons are text-first.',
    mentors: 'Optional for self-paced learning; recommended for cohort delivery.',
    output: 'One completed personal webpage with downloadable starter files.',
    metrics: 'Track starts, lesson completion, project completion, and feedback—only with consent.',
    partnership: 'Pilot cohorts, curriculum review, learner access, and mentor support.',
    href: 'https://belajar.programinglive.com',
  },
  {
    slug: 'project-based-learning',
    title: 'Project-Based Learning',
    status: 'In development',
    objective: 'Move learners from guided lessons into practical, portfolio-ready work.',
    learners: 'Learners who have completed foundational programming or web lessons.',
    duration: 'Project-dependent; initial briefs are being designed.',
    delivery: 'Guided online projects with optional local facilitation.',
    requirements: 'A browser, code editor where appropriate, and access to project briefs.',
    mentors: 'Project feedback and review support.',
    output: 'A practical project such as a school site, catalog, or community information page.',
    metrics: 'Projects started, projects completed, review cycles, and portfolio publication.',
    partnership: 'Real project briefs, subject experts, reviewers, and pilot sponsorship.',
  },
  {
    slug: 'open-source-pathway',
    title: 'Open Source Pathway',
    status: 'In development',
    objective: 'Introduce contribution only after learners are ready for collaborative workflows.',
    learners: 'Intermediate learners with project experience and basic Git knowledge.',
    duration: 'Milestone-based',
    delivery: 'Public repositories, contribution guides, and supported tasks.',
    requirements: 'Git, GitHub, and the technical requirements of each project.',
    mentors: 'Active maintainers and reviewers.',
    output: 'Documentation, bug fixes, features, or community project contributions.',
    metrics: 'First contributions, merged work, repeat contributors, and maintainer feedback.',
    partnership: 'Maintainers, developer tooling, cloud credits, and contributor mentorship.',
    href: '/open-source',
  },
  {
    slug: 'mentor-development',
    title: 'Mentor Development Program',
    status: 'Planned',
    objective: 'Help advanced learners develop the skills to support peers responsibly.',
    learners: 'Advanced learners, educators, and technology professionals.',
    duration: 'To be defined with pilot partners',
    delivery: 'Facilitated workshops, observation, and supported mentoring practice.',
    requirements: 'Relevant technical foundation and commitment to safeguarding principles.',
    mentors: 'Experienced educators and technical reviewers.',
    output: 'A mentored support session and documented feedback practice.',
    metrics: 'Mentors prepared, sessions supported, and learner feedback.',
    partnership: 'Educator expertise, volunteer time, and safeguarding review.',
  },
  {
    slug: 'indonesia-emas-2045',
    title: 'Indonesia Emas 2045',
    subtitle: 'Preparing the Next Generation of Digital Talent',
    status: 'Planned',
    objective: 'Expand access to digital skills and technology education across underserved regions of Indonesia.',
    learners: 'Learners in underserved, remote, rural, and low-access communities.',
    duration: 'Long-term initiative; the first concrete pilot is being scoped.',
    delivery: 'Local partnerships supported by reusable open learning materials.',
    requirements: 'Defined per pilot, with low-bandwidth access as a core constraint.',
    mentors: 'Local facilitators supported by educators and technology professionals.',
    output: 'A documented pilot tied to a real community learning or project need.',
    metrics: 'Pilot participation, progression, project outcomes, and access constraints learned.',
    partnership: 'Pilot locations, program funding, local implementation, devices, and connectivity.',
    href: 'https://programinglive.my.id',
  },
]

export const partnerCategories = [
  { title: 'Education Institutions', description: 'Schools, universities, and vocational institutions piloting structured learning pathways.' },
  { title: 'Corporate & CSR Partners', description: 'Support for program funding, devices, connectivity, scholarships, and employee mentors.' },
  { title: 'Foundations & NGOs', description: 'Program funding, local implementation expertise, and independent learning-model review.' },
  { title: 'Technology Partners', description: 'Accessible infrastructure, developer tools, cloud support, and technical enablement.' },
  { title: 'Community Partners', description: 'Trusted local organizations connecting learning programs with community priorities.' },
  { title: 'Mentors', description: 'Industry professionals offering scoped guidance, project review, and contributor support.' },
]

export const impactFunnel = [
  'Learning pathway started',
  'Fundamentals completed',
  'First project completed',
  'Collaborative project completed',
  'Open-source contribution',
  'Mentor or advanced contributor',
]
