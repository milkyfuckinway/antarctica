const destination = [48.69692660883092, 44.50245328354335];

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
const mapOnLoad = () => {
  ymaps.ready(init);
};

export {mapOnLoad};
