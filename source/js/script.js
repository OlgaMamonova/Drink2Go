const initBurger = () => {
  const header = document.querySelector('.header');
  const burgerToggle = header.querySelector('.header__burger-toggle');
  const headerNav = header.querySelector('.header__nav');

  const onHeaderNavLinkClick = (evt) => {
    if (evt.target.nodeName === 'A') {
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

const initMap = () => {
  const map = L.map('map', {
    scrollWheelZoom: false
  })
    .setView({
      lat: 59.96831,
      lng: 30.31748
    }, 18);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/map/map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.96831,
      lng: 30.31748,
    },
    {
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);
}

const initSlider = () => {
  new Swiper('.promo__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.promo__slider-pagination',
      clickable: true,
    },
  });
}

initBurger();
initMap();
initSlider();
