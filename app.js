// Get the mobile menu button
const menu = document.querySelector('#mobile-menu');

// Get the navbar menu
const menuLinks = document.querySelector('.navbar__menu');

// Add a click event listener to the mobile menu button
menu.addEventListener('click', function() {
  // Toggle the 'is-active' class on the mobile menu button to show/hide the menu icon animation
  menu.classList.toggle('is-active');
  
  // Toggle the 'active' class on the navbar menu to show/hide the menu items
  menuLinks.classList.toggle('active');
});
