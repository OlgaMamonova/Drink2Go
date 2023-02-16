const initBurger = () => {
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
  }

  burgerToggle.addEventListener('click', openMenu);
}

const initMap = () => {
  const map = L.map('map')
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
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

initBurger();
initMap();
initSlider();
