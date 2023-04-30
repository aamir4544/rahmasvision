const navbar = document.querySelector('.navbar');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScrollPosition < lastScrollPosition) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }

  lastScrollPosition = currentScrollPosition;
});
