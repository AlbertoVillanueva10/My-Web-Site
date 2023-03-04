const hamMenu = document.querySelector('.ham-menu');
const linksMenuOpen = document.querySelector('.menu-open');

hamMenu.addEventListener('click', function() {
    if (linksMenuOpen.style.display === 'none') {
      linksMenuOpen.style.display = 'block';
    } else {
      linksMenuOpen.style.display = 'none';
    }
  });