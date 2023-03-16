const destination = [48.69692660883092, 44.50245328354335];
const map = document.querySelector('#map');
let executed = false;

window.addEventListener('scroll', activateMapOnScroll);

const init = () => {
  const myMap = new ymaps.Map('map', {
    center: destination,
    zoom: 13,
  });

  const placemark = new ymaps.Placemark(myMap.getCenter(), {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/location.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects.add(placemark);
};

const createScriptLink = () => {
  const link =
    'https://api-maps.yandex.ru/2.1/?apikey=7c70a677-2343-4514-aa84-bc38e108561a&lang=ru_RU';
  const scriptLink = document.createElement('script');
  scriptLink.src = link;
  document.body.appendChild(scriptLink);
};

const initMap = () => {
  const timeout = 2000;
  setTimeout(() => {
    ymaps.ready(init);
  }, timeout);
};

function activateMapOnScroll() {
  if (
    map.getBoundingClientRect().top - window.innerHeight < 2000 &&
    !executed
  ) {
    executed = true;
    createScriptLink();
    initMap();
    window.removeEventListener('scroll', activateMapOnScroll);
  }
}

export {activateMapOnScroll};
