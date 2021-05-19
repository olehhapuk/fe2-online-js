const navTogglerBtn = document.querySelector('#navToggler');
const navMenu = document.querySelector('.nav__menu');
const dimmer = document.querySelector('.dimmer');

navTogglerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu_open');
  dimmer.classList.toggle('dimmer_active');

  // if (navMenu.classList.contains('nav__menu_open')) {
  //   dimmer.classList.add('dimmer_active');
  // } else {
  //   dimmer.classList.remove('dimmer_active');
  // }
});

dimmer.addEventListener('click', () => {
  navMenu.classList.remove('nav__menu_open');
  dimmer.classList.remove('dimmer_active');
});
