(() => {
  const link = document.querySelector('.portrait-link');
  const dialog = document.querySelector('.portrait-dialog');
  if (!link || !dialog || typeof dialog.showModal !== 'function') return;

  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
    document.documentElement.classList.add('portrait-open');
  });

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('portrait-open');
    link.focus({ preventScroll: true });
  });
})();
