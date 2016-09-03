//in route die Geodaten der einzelnen Routen speichern
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
      //TODO:action
    }
  });

  $.get("https://vesseltrip.schroeer.co/trips", function (mydata, status) {
    alert("Data: " + mydata);

    var content = JSON.parse(mydata);
    map.data.addGeoJson(content);
    
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


