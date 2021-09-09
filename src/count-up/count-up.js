window.rm.radio.on('content.count-up.start', (_, { element }) => {
  const fill = element.closest('.kds-count-up').querySelector('.kds-count-up__fill');
  fill && fill.classList.add('active');
});
