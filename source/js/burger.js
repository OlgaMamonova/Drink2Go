export const initBurger = () => {
  const burgerToggle = document.querySelector('.header__burger-toggle');
  const headerNav = document.querySelector('.header__nav');


  const openMenu = () => {
    burgerToggle.classList.add('header__burger-toggle--menu-opened');
    headerNav.classList.add('header__nav--menu-opened');

    let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');
    burgerCloseButton.addEventListener('click', closeMenu);
  }

  function closeMenu () {
    burgerToggle.classList.remove('header__burger-toggle--menu-opened');
    headerNav.classList.remove('header__nav--menu-opened');
    burgerCloseButton.removeEventListener('click', closeMenu);
    burgerToggle.addEventListener('click', openMenu);
  }

  burgerToggle.addEventListener('click', openMenu);
}
