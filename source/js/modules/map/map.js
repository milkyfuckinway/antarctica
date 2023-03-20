const destination = [59.938631, 30.323037];
const map = document.querySelector('#map');
const link = 'https://api-maps.yandex.ru/2.1/?apikey=7c70a677-2343-4514-aa84-bc38e108561a&lang=ru_RU';
const ymapsScript = document.createElement('script');
ymapsScript.src = link;

let executed = false;

window.addEventListener('scroll', activateMapOnScroll);

const init = () => {
  const myMap = new ymaps.Map('map', {
    center: destination,
    zoom: 15,
    controls: ['zoomControl'],
  });

  const placemark = new ymaps.Placemark(
      myMap.getCenter(),
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: './img/svg/location.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-9, -11],
      }
  );

  myMap.geoObjects.add(placemark);
};

const createScriptLink = () => {
  document.body.appendChild(ymapsScript);
};

const initMap = () => {
  ymaps.ready(init);
};

function activateMapOnScroll() {
  if (map) {
    if (map.getBoundingClientRect().top - window.innerHeight < 2000 && !executed) {
      executed = true;
      createScriptLink();
      ymapsScript.addEventListener('load', () => {
        if (typeof ymaps !== 'undefined') {
          initMap();
        }
      });
      window.removeEventListener('scroll', activateMapOnScroll);
    }
  }
}

export {activateMapOnScroll};
