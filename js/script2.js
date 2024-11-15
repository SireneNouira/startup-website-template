// script.js
const container = document.querySelector('.background-container');

container.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  // Calculer le pourcentage de la position de la souris
  const xPercent = (offsetX / clientWidth) * 100;
  const yPercent = (offsetY / clientHeight) * 100;

  // Appliquer la transformation de zoom
  container.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  container.style.transform = 'scale(1.5)';
});

container.addEventListener('mouseleave', () => {
  // Réinitialiser la transformation
  container.style.transform = 'scale(1)';
});
