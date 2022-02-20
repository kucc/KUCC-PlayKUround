export function updateMarkers(map: any, markers: any) {
  var mapBounds = map.getBounds();
  var marker, position;

  for (var i = 0; i < markers.length; i++) {
    marker = markers[i];
    position = marker.getPosition();

    if (mapBounds.hasLatLng(position)) {
      showMarker(map, marker);
    } else {
      hideMarker(map, marker);
    }
  }
}

function showMarker(map: any, marker: any) {
  if (marker.getMap()) return;
  marker.setMap(map);
}

function hideMarker(map: any, marker: any) {
  if (!marker.getMap()) return;
  marker.setMap(null);
}
