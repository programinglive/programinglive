type NavbarOptions = {
  showPrimaryLinks?: boolean;
};

export const renderNavbar = ({ showPrimaryLinks = true }: NavbarOptions = {}) => `
  <nav class="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-6 border-b border-slate-200 bg-white/95 px-2 py-1 text-sm font-medium text-slate-600 backdrop-blur">
    <a class="flex items-center gap-3 text-slate-900 hover:text-slate-900" href="/">
      <img alt="ProgramingLive logo" class="h-9 w-9 rounded-full border border-slate-200 object-cover" src="/logo_prograiminglive.png" />
      <span class="text-lg font-semibold tracking-tight">ProgramingLive</span>
    </a>
    ${
      showPrimaryLinks
        ? `<div class="flex flex-wrap items-center gap-4 md:gap-6">
      <a class="inline-flex items-center gap-1 transition hover:text-slate-900" href="/#vision">
        Vision
      </a>
      <a class="inline-flex items-center gap-1 transition hover:text-slate-900" href="/#mission">
        Mission
      </a>
      <a class="inline-flex items-center gap-1 transition hover:text-slate-900" href="/#programs">
        Programs
      </a>
      <a class="inline-flex items-center gap-1 transition hover:text-slate-900" href="/#sponsor">
        Sponsors
      </a>
      <a class="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-2 font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900" href="/#join-us">
        Join Us
      </a>
    </div>`
        : ''
    }
  </nav>
`;
