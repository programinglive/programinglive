export type ProgramStatus =
  | 'Active pilot'
  | 'In development'
  | 'Planned'
  | 'Pilot aktif'
  | 'Sedang dikembangkan'
  | 'Direncanakan'

export const approachSteps = [
  { title: 'Learn', description: 'Beginner-friendly programming and practical digital skills.' },
  { title: 'Practice', description: 'Short, hands-on exercises designed for low-friction learning.' },
  { title: 'Build', description: 'Useful projects that turn concepts into visible outcomes.' },
  { title: 'Collaborate', description: 'Peer, mentor, and community workflows introduced at the right time.' },
  { title: 'Contribute', description: 'Portfolio-building work and gradual participation in open source.' },
]

export const approachStepsId = [
  { title: 'Belajar', description: 'Materi pemrograman dan keterampilan digital praktis yang ramah pemula.' },
  { title: 'Berlatih', description: 'Latihan mandiri yang terfokus untuk membiasakan pemahaman konsep.' },
  { title: 'Membangun', description: 'Proyek nyata yang mengubah konsep teknis menjadi hasil nyata.' },
  { title: 'Berkolaborasi', description: 'Alur kerja bersama rekan, mentor, dan komunitas di waktu yang tepat.' },
  { title: 'Berkontribusi', description: 'Membangun portofolio karya dan berpartisipasi dalam open source secara bertahap.' },
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

export const learnerLevelsId = [
  {
    level: 'Level 0',
    title: 'Fondasi Digital',
    description: 'Dasar komputer, berkas dan folder, fundamental internet, keamanan digital, dan pemecahan masalah.',
  },
  {
    level: 'Level 1',
    title: 'Fundamental Pemrograman',
    description: 'Logika, variabel, kondisi, perulangan, dan fungsi yang dijelaskan melalui contoh praktis.',
  },
  {
    level: 'Level 2',
    title: 'Fundamental Web',
    description: 'HTML, CSS, dan JavaScript untuk membangun halaman web yang responsif dan mudah diakses.',
  },
  {
    level: 'Level 3',
    title: 'Membangun Proyek',
    description: 'Proyek informasi personal, sekolah, usaha kecil, dan layanan masyarakat.',
  },
  {
    level: 'Level 4',
    title: 'Kolaborasi',
    description: 'Dasar Git, GitHub, proyek tim, umpan balik tim, dan penelaahan kode (code review).',
  },
  {
    level: 'Level 5',
    title: 'Open Source',
    description: 'Isu (issues), pull request, dokumentasi, dan alur kerja kontributor yang bertanggung jawab.',
  },
]

export interface ProgramItem {
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
}

export const programs: Array<ProgramItem> = [
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
    status: 'Active pilot',
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

export const programsId: Array<ProgramItem> = [
  {
    slug: 'digital-foundations',
    title: 'Program Fondasi Digital',
    status: 'Direncanakan',
    objective: 'Membangun kepercayaan diri digital yang dibutuhkan sebelum memulai belajar pemrograman formal.',
    learners: 'Pengguna komputer pemula dan pelajar yang membutuhkan fondasi literasi digital lebih kuat.',
    duration: 'Akan divalidasi melalui tahap pilot',
    delivery: 'Dirancang untuk pembelajaran daring atau didampingi fasilitator komunitas.',
    requirements: 'Komputer dasar atau perangkat bersama; materi ramah kuota rendah direncanakan.',
    mentors: 'Fasilitator yang dapat mendampingi tugas-tugas digital dasar.',
    output: 'Daftar periksa keterampilan digital praktis dan tugas informasi sederhana.',
    metrics: 'Sinyal partisipasi, penyelesaian tugas, dan kepercayaan diri pelajar.',
    partnership: 'Lokasi pilot, perangkat, konektivitas, dan dukungan fasilitator.',
  },
  {
    slug: 'programming-foundations',
    title: 'Fondasi Pemrograman',
    status: 'Pilot aktif',
    objective: 'Membantu pemula menyelesaikan jalur pembelajaran web terstruktur pertama mereka.',
    learners: 'Siswa sekolah menengah, pemula pemrograman, dan pembelajar mandiri.',
    duration: 'Modul pertama mandiri; model terfasilitasi 8–12 minggu sedang dikembangkan.',
    delivery: 'Daring saat ini, dengan pengiriman hibrida direncanakan untuk pilot institusi.',
    requirements: 'Peramban web dan koneksi internet dasar; materi berbasis teks.',
    mentors: 'Opsional untuk belajar mandiri; disarankan untuk pengiriman kelompok (kohor).',
    output: 'Satu halaman web profil pribadi yang selesai dengan berkas pemula yang dapat diunduh.',
    metrics: 'Awal belajar, penyelesaian materi, penyelesaian proyek, dan umpan balik—hanya dengan persetujuan.',
    partnership: 'Kelompok pilot, telaah kurikulum, akses pelajar, dan dukungan mentor.',
    href: 'https://belajar.programinglive.com',
  },
  {
    slug: 'project-based-learning',
    title: 'Pembelajaran Berbasis Proyek',
    status: 'Sedang dikembangkan',
    objective: 'Membawa pelajar dari materi terpandu ke proyek praktis yang siap ditampilkan di portofolio.',
    learners: 'Pelajar yang telah menyelesaikan materi dasar pemrograman atau web.',
    duration: 'Tergantung proyek; brief awal sedang dirancang.',
    delivery: 'Proyek daring terpandu dengan opsi fasilitasi lokal.',
    requirements: 'Peramban web, editor kode jika diperlukan, dan akses ke brief proyek.',
    mentors: 'Dukungan telaah dan umpan balik proyek.',
    output: 'Proyek praktis seperti situs profil sekolah, katalog produk, atau halaman informasi komunitas.',
    metrics: 'Proyek dimulai, proyek selesai, siklus telaah, dan publikasi portofolio.',
    partnership: 'Brief proyek nyata, pakar materi, penelaah, dan sponsor pilot.',
  },
  {
    slug: 'open-source-pathway',
    title: 'Jalur Open Source',
    status: 'Sedang dikembangkan',
    objective: 'Memperkenalkan kontribusi terbuka hanya setelah pelajar siap dengan alur kerja kolaboratif.',
    learners: 'Pelajar tingkat menengah dengan pengalaman proyek dan pemahaman dasar Git.',
    duration: 'Berdasarkan capaian (milestone)',
    delivery: 'Repositori publik, panduan kontribusi, dan tugas-tugas terarah.',
    requirements: 'Git, GitHub, dan kebutuhan teknis tiap proyek.',
    mentors: 'Pemelihara (maintainer) dan penelaah aktif.',
    output: 'Dokumentasi, perbaikan bug, fitur baru, atau kontribusi proyek komunitas.',
    metrics: 'Kontribusi pertama, kode yang digabungkan (merged), kontributor berulang, dan masukan pemelihara.',
    partnership: 'Maintainer, tooling pengembang, kredit cloud, dan bimbingan kontributor.',
    href: '/id/open-source',
  },
  {
    slug: 'mentor-development',
    title: 'Pengembangan Mentor',
    status: 'Direncanakan',
    objective: 'Membantu pelajar tingkat lanjut mengembangkan kemampuan mendampingi rekan secara bertanggung jawab.',
    learners: 'Pelajar tingkat lanjut, pendidik, dan praktisi teknologi.',
    duration: 'Akan ditentukan bersama mitra pilot',
    delivery: 'Lokakarya terfasilitasi, observasi, dan praktik mentoring dengan pendampingan.',
    requirements: 'Fondasi teknis yang relevan dan komitmen terhadap prinsip perlindungan (safeguarding).',
    mentors: 'Pendidik berpengalaman dan penelaah teknis.',
    output: 'Sesi pendampingan terbimbing dan dokumentasi praktik umpan balik.',
    metrics: 'Mentor terlatih, sesi yang didukung, dan umpan balik pelajar.',
    partnership: 'Keahlian pendidik, waktu sukarelawan, dan peninjauan perlindungan peserta.',
  },
  {
    slug: 'indonesia-emas-2045',
    title: 'Indonesia Emas 2045',
    subtitle: 'Mempersiapkan Generasi Talenta Digital Berikutnya',
    status: 'Pilot aktif',
    objective: 'Memperluas akses ke keterampilan digital dan pendidikan teknologi di seluruh wilayah Indonesia yang belum terlayani.',
    learners: 'Pelajar di komunitas tertinggal, terpencil, pedesaan, dan dengan keterbatasan akses.',
    duration: 'Inisiatif jangka panjang; pilot konkret pertama sedang dirumuskan.',
    delivery: 'Kemitraan lokal yang didukung oleh materi pembelajaran terbuka yang dapat digunakan kembali.',
    requirements: 'Ditentukan per pilot, dengan akses kuota rendah sebagai kendala utama.',
    mentors: 'Fasilitator lokal yang didampingi oleh pendidik dan praktisi teknologi.',
    output: 'Pilot terdokumentasi yang terhubung dengan kebutuhan belajar atau proyek komunitas nyata.',
    metrics: 'Partisipasi pilot, perkembangan belajar, hasil proyek, dan pembelajaran kendala akses.',
    partnership: 'Lokasi pilot, pendanaan program, implementasi lokal, pengadaan perangkat, dan konektivitas.',
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

export const partnerCategoriesId = [
  { title: 'Institusi Pendidikan', description: 'Sekolah, universitas, dan sekolah kejuruan (SMK/Politeknik) yang menguji coba jalur pembelajaran terstruktur.' },
  { title: 'Korporasi & Mitra CSR', description: 'Dukungan pendanaan program, perangkat belajar, konektivitas, beasiswa, dan keterlibatan mentor karyawan.' },
  { title: 'Yayasan & Lembaga Swadaya Masyarakat (LSM/NGO)', description: 'Pendanaan program, keahlian implementasi lokal, dan evaluasi independen atas efektivitas model belajar.' },
  { title: 'Mitra Teknologi', description: 'Infrastruktur ramah kuota, perangkat pengembangan, dukungan cloud/hosting, dan pelatihan teknis.' },
  { title: 'Mitra Komunitas', description: 'Organisasi masyarakat lokal terpercaya yang menjembatani program dengan kebutuhan prioritas daerah.' },
  { title: 'Mentor Profesional', description: 'Praktisi industri teknologi yang meluangkan waktu untuk pendampingan terarah, telaah proyek, dan bimbingan kontributor.' },
]

export const impactFunnel = [
  'Learning pathway started',
  'Fundamentals completed',
  'First project completed',
  'Collaborative project completed',
  'Open-source contribution',
  'Mentor or advanced contributor',
]

export const impactFunnelId = [
  'Jalur pembelajaran dimulai',
  'Fondasi dasar diselesaikan',
  'Proyek pertama diselesaikan',
  'Proyek kolaboratif diselesaikan',
  'Kontribusi open source terkirim',
  'Menjadi mentor atau kontributor lanjutan',
]

export interface TrackProjectMapping {
  level: string
  project: string
  repository: string
  tasks: string
}

export const trackProjectIndex: Array<TrackProjectMapping> = [
  {
    level: 'Levels 0–2: Fundamentals',
    project: 'ProgramingLive Portal & Docs',
    repository: 'https://github.com/programinglive/programinglive',
    tasks: 'Documentation review, broken link detection, Indonesian copywriting clarity, and accessible semantic HTML checks.',
  },
  {
    level: 'Level 3: Build Projects',
    project: 'Commiter',
    repository: 'https://github.com/programinglive/commiter',
    tasks: 'CLI usage examples, readme translations, error message clarity, and cross-platform terminal testing.',
  },
  {
    level: 'Level 4: Open Source & Code Review',
    project: 'SentryResolve',
    repository: 'https://github.com/programinglive/sentry-resolve',
    tasks: 'CLI triage command testing, issue reproduction scripts, and scoped bug fix pull requests with tests.',
  },
]

export const trackProjectIndexId: Array<TrackProjectMapping> = [
  {
    level: 'Level 0–2: Fondasi Digital & Web Dasar',
    project: 'ProgramingLive Portal & Dokumentasi',
    repository: 'https://github.com/programinglive/programinglive',
    tasks: 'Peninjauan dokumentasi, pengecekan tautan, perbaikan ketik (typo), dan pengujian aksesibilitas HTML semantik.',
  },
  {
    level: 'Level 3: Membangun Proyek',
    project: 'Commiter',
    repository: 'https://github.com/programinglive/commiter',
    tasks: 'Contoh penggunaan CLI di berbagai proyek, panduan Conventional Commits, dan pengujian lintas platform Windows/Linux.',
  },
  {
    level: 'Level 4: Kontribusi Open Source & Review',
    project: 'SentryResolve',
    repository: 'https://github.com/programinglive/sentry-resolve',
    tasks: 'Pengujian perintah triase CLI, pembuatan skrip reproduksi isu bug, dan pull request perbaikan dengan pengujian mandiri.',
  },
]

export interface EditorialArticle {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  summary: string
  trackLink: string
  trackLabel: string
}

export const editorialArticles: Array<EditorialArticle> = [
  {
    slug: 'first-learning-track-retrospective',
    title: 'Building the First Web Page: How We Designed a Text-First, Low-Data Curriculum',
    date: 'October 2026',
    category: 'Curriculum Notes',
    readTime: '4 min read',
    summary: 'Why text-first lessons, downloadable starter files, and zero-account barriers create a gentler on-ramp for Indonesian beginners than bandwidth-heavy video tutorials.',
    trackLink: 'https://belajar.programinglive.com/learn/first-web-page',
    trackLabel: 'Explore the Track',
  },
  {
    slug: 'testing-across-screen-sizes',
    title: 'Mobile-First DevTools: Testing Web Pages on 375px and 1280px Viewports',
    date: 'October 2026',
    category: 'Practical Skills',
    readTime: '5 min read',
    summary: 'A step-by-step review routine for new builders to detect horizontal overflow, verify accessible contrast, and test keyboard focus before asking for feedback.',
    trackLink: 'https://belajar.programinglive.com/learn/first-web-page',
    trackLabel: 'View Capstone Lab',
  },
  {
    slug: 'consent-first-progress-tracking',
    title: 'Consent-First Progress: Tracking Useful Learning Signals Without Data Exploitation',
    date: 'October 2026',
    category: 'Platform Architecture',
    readTime: '4 min read',
    summary: 'How Belajar implements guest-mode localStorage persistence and opt-in backend progress storage while strictly respecting learner privacy.',
    trackLink: '/roadmap',
    trackLabel: 'Review Architecture',
  },
]

export const editorialArticlesId: Array<EditorialArticle> = [
  {
    slug: 'first-learning-track-retrospective',
    title: 'Membangun Halaman Web Pertama: Merancang Kurikulum Ringan dan Ramah Kuota',
    date: 'Oktober 2026',
    category: 'Catatan Kurikulum',
    readTime: '4 menit baca',
    summary: 'Mengapa materi berbasis teks, berkas starter yang dapat diunduh, dan akses tanpa login memberikan titik awal yang lebih ramah bagi pelajar pemula dibandingkan tutorial video berat.',
    trackLink: 'https://belajar.programinglive.com/learn/first-web-page',
    trackLabel: 'Buka Modul Belajar',
  },
  {
    slug: 'testing-across-screen-sizes',
    title: 'DevTools Mobile-First: Menguji Tampilan Web pada Layar 375px dan 1280px',
    date: 'Oktober 2026',
    category: 'Keterampilan Praktis',
    readTime: '5 menit baca',
    summary: 'Panduan pengujian mandiri bagi pelajar pemula untuk mendeteksi scroll horizontal, memeriksa kontras warna, dan menguji navigasi tombol keyboard sebelum meminta telaah karya.',
    trackLink: 'https://belajar.programinglive.com/learn/first-web-page',
    trackLabel: 'Lihat Kriteria Capstone',
  },
  {
    slug: 'consent-first-progress-tracking',
    title: 'Progres Berbasis Persetujuan: Mencatat Capaian Belajar Tanpa Mengeksploitasi Data Pribadi',
    date: 'Oktober 2026',
    category: 'Arsitektur Platform',
    readTime: '4 menit baca',
    summary: 'Bagaimana Belajar menerapkan penyimpanan lokal browser tanpa akun serta pencatatan cloud berbasis persetujuan eksplisit demi melindungi privasi peserta.',
    trackLink: '/id/roadmap',
    trackLabel: 'Lihat Roadmap',
  },
]

export const editorialCadence = {
  cadence: 'Bi-weekly publication cycle',
  schedule: 'Published every second and fourth Wednesday',
  pillars: [
    'Curriculum deep-dives connected directly to Belajar learning tracks',
    'Practical developer tooling, command-line practices, and terminal setup',
    'Verified community sprint briefs and open-source contribution walk-throughs',
    'Monthly evidence-based pilot progression and roadmap retrospectives',
  ],
}

export const editorialCadenceId = {
  cadence: 'Siklus publikasi dua mingguan',
  schedule: 'Diterbitkan setiap hari Rabu ke-2 dan ke-4 setiap bulan',
  pillars: [
    'Ulasan kurikulum mendalam yang terhubung langsung ke trek belajar Belajar',
    'Keterampilan praktis seputar alat pengembang, terminal, dan alur Git',
    'Brief kegiatan belajar kelompok terfasilitasi dan panduan kontribusi open source',
    'Laporan bulanan berbasis bukti perkembangan kelas pilot dan evaluasi roadmap',
  ],
}

export const collaborationGuidelines = [
  {
    step: '01',
    title: 'Self-Check & Preparation',
    description: 'Before requesting feedback, complete the lesson self-check or capstone definition of done (no horizontal overflow, valid links, clean semantics).',
  },
  {
    step: '02',
    title: 'Ask in GitHub Discussions',
    description: 'Post your project link or questions on GitHub Discussions with steps tried, expected result, and actual result. Never share passwords or private data.',
  },
  {
    step: '03',
    title: 'Constructive Mentor & Peer Review',
    description: 'Mentors and peers provide kind, actionable feedback focusing on clarity, structure, accessibility, and positive encouragement.',
  },
  {
    step: '04',
    title: 'Consent-First Portfolio Showcase',
    description: 'Learners who want their project featured in ProgramingLive community highlights can grant explicit written consent. We never showcase participant work without opt-in consent.',
  },
]

export const collaborationGuidelinesId = [
  {
    step: '01',
    title: 'Pengecekan Mandiri (Self-Check)',
    description: 'Sebelum meminta masukan, pastikan kriteria capstone telah diuji (tidak ada scroll horizontal di 375px & 1280px, link berfungsi, HTML semantik).',
  },
  {
    step: '02',
    title: 'Diskusi di GitHub Discussions',
    description: 'Bagikan tautan proyek atau pertanyaan di GitHub Discussions dengan menjelaskan langkah yang dicoba, hasil yang muncul, dan ekspektasi. Jangan sertakan password atau data pribadi.',
  },
  {
    step: '03',
    title: 'Umpan Balik Konstruktif Mentor & Rekan',
    description: 'Mentor dan sesama pembelajar memberikan masukan yang solutif, menghargai proses, berfokus pada aksesibilitas, dan memberi arahan langkah selanjutnya.',
  },
  {
    step: '04',
    title: 'Etalase Portofolio Berbasis Persetujuan',
    description: 'Pelajar yang ingin karyanya ditampilkan di etalase komunitas ProgramingLive dapat memberikan persetujuan tertulis eksplisit. Kami tidak pernah mempublikasikan karya tanpa izin peserta.',
  },
]

export const monthlyOutcomeReviews = [
  {
    metric: 'Learning Track Completion',
    description: 'Monthly tally of learners completing lessons 1–4, recorded solely through explicit opt-in consent from Belajar.',
  },
  {
    metric: 'Practical Projects Shipped',
    description: 'Count of completed personal web page capstones meeting responsive standards on 375px & 1280px viewports.',
  },
  {
    metric: 'Open-Source Pull Requests Merged',
    description: 'Community contributions merged across ProgramingLive, Belajar, Commiter, and developer tooling repositories.',
  },
  {
    metric: 'Learner & Mentor Feedback',
    description: 'Qualitative friction points, questions, and curriculum suggestions logged via GitHub Discussions.',
  },
]

export const monthlyOutcomeReviewsId = [
  {
    metric: 'Penyelesaian Modul Belajar',
    description: 'Rekapitulasi bulanan pelajar yang menyelesaikan lesson 1–4, dicatat hanya dari peserta yang memberikan persetujuan eksplisit di Belajar.',
  },
  {
    metric: 'Karya Proyek Nyata yang Selesai',
    description: 'Jumlah capstone halaman web profil mandiri yang memenuhi standar responsif pada layar 375px & 1280px.',
  },
  {
    metric: 'Kontribusi Open Source yang Digabungkan',
    description: 'Pull request dari komunitas yang berhasil digabungkan di repositori ProgramingLive, Belajar, Commiter, dan developer tooling.',
  },
  {
    metric: 'Masukan Pelajar & Pendamping',
    description: 'Poin kendala praktis, pertanyaan teknis, dan saran penyempurnaan materi yang dicatat dari forum diskusi komunitas.',
  },
]

export const governancePolicies = {
  cadence: 'Monthly review cycle: executed on the first Monday of each month.',
  curriculumImprovement: 'Curriculum updates are prioritized directly from friction points reported during monthly reviews.',
  ctaVerification: 'Misleading or inactive calls-to-action are strictly prohibited; any link lacking an operational destination is immediately removed or deactivated.',
  dataSeparation: 'Internal developer assistant activity, local tooling contexts, and development telemetry remain strictly isolated from learner and community data unless an explicit, informed, consented requirement is established.',
}

export const governancePoliciesId = {
  cadence: 'Siklus evaluasi bulanan: dilaksanakan pada hari Senin pertama setiap bulan.',
  curriculumImprovement: 'Penyempurnaan materi diprioritaskan langsung dari kendala nyata yang dilaporkan pelajar pada evaluasi bulanan.',
  ctaVerification: 'Tombol ajakan (CTA) yang menyesatkan atau belum siap dilarang keras; tautan tanpa destinasi operasional nyata langsung dinonaktifkan atau dihapus.',
  dataSeparation: 'Aktivitas asisten AI internal pengembang, konteks tooling lokal, dan telemetri teknis terisolasi total dari data peserta dan komunitas tanpa izin resmi.',
}
