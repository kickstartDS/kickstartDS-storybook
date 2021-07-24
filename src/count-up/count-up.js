window.rm.radio.on('content.count-up.start', (_, { element, data }) => {
  const rect = element.closest('.kds-count-up').querySelector('.kds-count-up__rect');
  const fill = element.closest('.kds-count-up').querySelector('.kds-count-up__fill');
  
  fill.classList.add('active');
  rect.style.transitionDuration = `${data.duration*1.75}ms`;
  rect.style.strokeDashoffset = 0;
});
