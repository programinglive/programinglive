type NavbarOptions = {
  showPrimaryLinks?: boolean;
};

export const renderNavbar = ({ showPrimaryLinks = true }: NavbarOptions = {}) => `
  <nav class="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 bg-white/95 px-4 py-3 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
    <a class="flex items-center gap-3 text-slate-900 hover:text-slate-900" href="/">
      <img alt="ProgramingLive logo" class="h-9 w-9 rounded-full border border-slate-200 object-cover" src="/logo_prograiminglive.png" />
      <span class="text-lg font-semibold tracking-tight">ProgramingLive</span>
    </a>
    ${
      showPrimaryLinks
        ? `<button
      type="button"
      class="inline-flex items-center justify-center rounded-full p-2 text-slate-800 transition hover:bg-slate-100 md:hidden"
      data-nav-toggle
      aria-label="Toggle navigation menu"
    >
      <span class="sr-only">Toggle navigation</span>
      <span class="flex h-4 w-4 flex-col justify-between">
        <span class="block h-0.5 w-full rounded-full bg-slate-800"></span>
        <span class="block h-0.5 w-full rounded-full bg-slate-800"></span>
        <span class="block h-0.5 w-full rounded-full bg-slate-800"></span>
      </span>
    </button>`
        : ''
    }
    ${
      showPrimaryLinks
        ? `<div
      class="w-full flex flex-col gap-3 border-t border-slate-200 pt-3 md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0"
      data-nav-menu
    >
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
