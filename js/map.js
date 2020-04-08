var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(48.465538, 35.044467), 
        zoom: 14, 
        gestureHandling: 'none', //отключение перемещения карты
        zoomControl: false, //отключение зума
        disableDefaultUI: true //отключение интерфейса "по-умолчанию"
      });

  var iconBase =
      '/img/icons/';

  var icons = {
    parking: {
      icon: iconBase + 'map-marker.png'
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(48.462171, 35.070461),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(48.468604, 35.033698),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(48.458448, 35.044770),
      type: 'parking'
    }
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}