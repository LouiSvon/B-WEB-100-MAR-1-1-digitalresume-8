const mouse = document.querySelector('#mouse');

window.addEventListener('mousemove', (e) => {
  mouse.style.top = `${e.clientY}px`;
  mouse.style.left = `${e.clientX}px`;
});
