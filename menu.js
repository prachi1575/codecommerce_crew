// Select the "menu-button" element by its ID for opening the side menu
const menuButton = document.getElementById('menu-button');

// Select the "close-button" element by its ID for closing the side menu
const closeButton = document.getElementById('close-button');

// Select the "side-menu" element by its ID, representing the menu panel
const sideMenu = document.getElementById('side-menu');

// Add a click event listener to the menu button to open the side menu
menuButton.addEventListener('click', () => {
  // Add the 'open' class to make the side menu visible
  sideMenu.classList.add('open');
});

// Add a click event listener to the close button to close the side menu
closeButton.addEventListener('click', () => {
  // Remove the 'open' class to hide the side menu
  sideMenu.classList.remove('open');
});

// Note: Ensure the CSS corresponding to the 'open' class
// is defined to control the appearance of the side menu (e.g., visibility or position).