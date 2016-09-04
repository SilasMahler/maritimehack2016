function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(53.5419921875, 10.31774904749089),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    map.data.setStyle({
        strokeColor: 'red',
        strokeOpacity: 0.8,
        strokeWeight: 5
    });

    map.data.addListener('click', function (event) {
        if (event.feature.getGeometry().getType() === 'LineString') {
            // TODO: action
            window.location.replace("./rating_output.html");
        }
    });

    $.get("https://vesseltrip.schroeer.co/trips", function (data, status) {
        var content = JSON.parse(data);
        map.data.addGeoJson(content);
    });

    $.get("https://vesseltrip.schroeer.co/ports", function (data, status) {
        var content = JSON.parse(data);
        var markers = [];
        var infowindows = [];
        for (var i = 0; i < content.length; i++) {
            markers[i] = new google.maps.Marker({
                position: new google.maps.LatLng(content[i].lon, content[i].lat),
                map: map,
                title: 'samplemarker'
            });

            markers[i].index = i;

            infowindows[i] = new google.maps.InfoWindow({
                content: content[i].name
            });

            google.maps.event.addListener(markers[i], 'click', function () {
                for (var j = 0; j < infowindows.length; j++) {
                    infowindows[j].close();
                }
                infowindows[this.index].open(map, markers[this.index]);
                map.panTo(markers[this.index].getPosition());
            });
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
