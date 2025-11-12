export const renderFooter = () => `
  <footer class="flex flex-col gap-6 border-t border-slate-200 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
    <p>&copy; ${new Date().getFullYear()} ProgramingLive. Crafted with purpose in Indonesia.</p>
    <div class="flex flex-wrap gap-4">
      <a class="transition hover:text-slate-900" href="/terms.html">Terms</a>
      <a class="transition hover:text-slate-900" href="/privacy.html">Privacy</a>
      <a class="transition hover:text-slate-900" href="/guidelines.html">Community Guidelines</a>
      <a class="transition hover:text-slate-900" href="mailto:creative@programinglive.com">Contact</a>
    </div>
  </footer>
`;
