export const initMap = () => {
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
