let center = [55.76212503372229, 37.615226544921896];

function init() {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 11,
  });

  let placemark1 = new ymaps.Placemark(
    [55.80911014974324,37.61209401719658],
    {
		balloonContent: `
			<div class="balloon">
				<div class="balloon__address">17-й проезд Марьиной Рощи, 4к1</div>
				<div class="balloon__info">
					<p>9 мин. от метро Бутырская</p>
				</div>
			</div>
		`
	},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark2 = new ymaps.Placemark(
    [55.791749068949976,37.748618499999985],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark3 = new ymaps.Placemark(
	[55.80626206892763,37.400683000000015],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark4 = new ymaps.Placemark(
	[55.7534380689707,37.61229949999997],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark5 = new ymaps.Placemark(
	[55.752362604558925,37.59861799999993],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark6 = new ymaps.Placemark(
	[55.65933001732281,37.75751069080731],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark7 = new ymaps.Placemark(
	[55.694540069057716,37.49802449999997],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark8 = new ymaps.Placemark(
	[55.780319568950354,37.63209799999998],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark9 = new ymaps.Placemark(
	[55.70640106902855,37.45397099999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  let placemark10 = new ymaps.Placemark(
	[55.0762283474496,36.62365883746065],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts/mark.png",
      iconImageSize: [42, 57],
      iconImageOffset: [-20, -55],
    }
  );

  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects
  	.add(placemark1)
	.add(placemark2)
	.add(placemark3)
	.add(placemark4)
	.add(placemark5)
	.add(placemark6)
	.add(placemark7)
	.add(placemark8)
	.add(placemark9)
	.add(placemark10);

}

ymaps.ready(init);
