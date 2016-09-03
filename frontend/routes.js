function initialize() {
  var mapProp = {
    center: new google.maps.LatLng(53.0419921875, 53.31774904749089),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  map.data.setStyle({
    strokeColor: 'green',
    strokeOpacity: 0.3,
    strokeWeight: 5
  });

  map.data.addListener('click', function (event) {
    if (event.feature.getGeometry().getType() === 'LineString') {
      // TODO: action
    }
  });

  $.get("https://vesseltrip.schroeer.co/trips", function (data, status) {
    var content = JSON.parse(data);
    map.data.addGeoJson(content);
  });

  $.get("https://vesseltrip.schroeer.co/ports", function (data, status) {
    var content = JSON.parse(data);
    for (var i = 0; i < content.length; i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(content[i].lon, content[i].lat)
      });
      marker.setMap(map);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
