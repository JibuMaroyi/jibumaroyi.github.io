(() => {
  const root = document.documentElement;
  document.addEventListener('pointerdown', () => {
    root.dataset.focusInput = 'pointer';
  }, true);
  document.addEventListener('keydown', event => {
    if (!['Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) {
      root.dataset.focusInput = 'keyboard';
    }
  }, true);
  document.addEventListener('click', event => {
    if (event.detail === 0 && event.target.closest('a, button, summary')) {
      root.dataset.focusInput = 'keyboard';
    }
  }, true);

  document.querySelectorAll('.back-to-top').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'smooth' });
      if (root.dataset.focusInput === 'keyboard') {
        document.querySelector('.site-name')?.focus({ preventScroll: true });
      }
    });
  });
})();
