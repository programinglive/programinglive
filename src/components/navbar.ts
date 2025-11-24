type NavbarOptions = {
  showPrimaryLinks?: boolean;
};

export const renderNavbar = ({ showPrimaryLinks = true }: NavbarOptions = {}) => `
  <nav class="sticky top-0 z-20 bg-white/95 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3 sm:px-10">
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
        class="hidden w-full space-y-2 border-t border-slate-200 pt-3 md:flex md:w-auto md:items-center md:gap-6 md:space-y-0 md:border-0 md:pt-0"
        data-nav-menu
      >
        <a class="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1" href="/#vision">
          Vision
        </a>
        <a class="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1" href="/#mission">
          Mission
        </a>
        <a class="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1" href="/#programs">
          Programs
        </a>
        <a class="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1" href="/#sponsor">
          Sponsors
        </a>
        <a class="block rounded-full border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:inline-flex md:items-center md:gap-1" href="/#join-us">
          Join Us
        </a>
      </div>`
          : ''
      }
    </div>
  </nav>
`;
