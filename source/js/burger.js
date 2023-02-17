export const initBurger = () => {
  const header = document.querySelector('.header');
  const burgerToggle = header.querySelector('.header__burger-toggle');
  const headerNav = header.querySelector('.header__nav');

  const onHeaderNavLinkClick = (evt) => {
    if (evt.target.nodeName === 'SPAN') {
      closeMenu();
    }
  }

  const openMenu = () => {
    headerNav.classList.add('header__nav--menu-opened');
    burgerToggle.classList.add('header__burger-toggle--menu-opened');

    let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

    burgerCloseButton.addEventListener('click', closeMenu);
    headerNav.addEventListener('click', onHeaderNavLinkClick);
  }

  function closeMenu () {
    let burgerCloseButton = document.querySelector('.header__burger-toggle--menu-opened');

    headerNav.classList.remove('header__nav--menu-opened');
    burgerCloseButton.classList.remove('header__burger-toggle--menu-opened');
    burgerCloseButton.removeEventListener('click', closeMenu);
    headerNav.removeEventListener('click', onHeaderNavLinkClick);
  }

  burgerToggle.addEventListener('click', openMenu);
}
