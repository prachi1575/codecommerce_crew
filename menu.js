//menu bar
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const sideMenu = document.getElementById('side-menu');

menuButton.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

closeButton.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});
