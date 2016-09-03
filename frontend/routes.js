//in route die Geodaten der einzelnen Routen speichern
var route = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            53.0419921875,
            53.31774904749089
          ],
          [
            48.14208984375,
            50.45750402042058
          ],
          [
            46.25244140625,
            52.802761415419674
          ],
          [
            49.7021484375,
            53.86548550842127
          ],
          [
            50.77880859375,
            53.46189043285914
          ]
        ]
      }
    }
  ]
}, {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            63.0419921875,
            63.31774904749089
          ],
          [
            68.14208984375,
            60.45750402042058
          ],
          [
            66.25244140625,
            62.802761415419674
          ],
          [
            69.7021484375,
            63.86548550842127
          ],
          [
            60.77880859375,
            63.46189043285914
          ]
        ]
      }
    }
  ]
}];

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(53.0419921875,53.31774904749089),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);

  map.data.setStyle({
    strokeColor: 'green',
    strokeOpacity: 0.3,
    strokeWeight: 5
  });

  map.data.addListener('click', function(event) {
    if (event.feature.getGeometry().getType() === 'LineString') {
      //TODO:action
      alert('linie geklickt');
    }
  });

  for (var i = 0; i < route.length; i++) {
    map.data.addGeoJson(route[i]);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
