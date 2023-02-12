const initBurger = () => {
  const burgerToggle = document.querySelector('.header__burger-toggle');
  const headerNav = document.querySelector('.header__nav');

  const openMenu = () => {
    burgerToggle.classList.add('header__burger-toggle--menu-opened');
    headerNav.classList.add('header__nav--menu-opened');
  }

  burgerToggle.addEventListener('click', openMenu);
}

export { initBurger };
