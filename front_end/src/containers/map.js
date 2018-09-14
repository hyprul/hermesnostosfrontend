class Map {
  constructor({
    center = {
      lat: 29.7604,
      lng: -95.3698
    },
    zoom = 3
  } = {}) {
    this.center = center;
    this.zoom = zoom;
  }

  attachToDom() {
    map = new google.maps.Map($map, {
      center: this.center,
      zoom: this.zoom
    });
    this.handleMapRightClick(map);
  }

  // Uses the methods below to attach a listener to Marker
  // to open the InfoWindow when clicked
  createMarkerInfoWindow(marker_info, infoWindow) {
    const info_window = this.createInfoWindow(infoWindow);
    const marker = this.createMarker(marker_info);
    marker.google.addListener('click', () => {
      info_window.open ? info_window.google.open(map, marker.google) : info_window.google.close(map, marker.google)  
      return info_window.open = !info_window.open;
    });
  }

  createMarker(marker) {
    // marker = { position: { lat:, lng:  }, title: }
    let newmark = new Marker(marker);
    //markers.push(newmark)
    return newmark
  }

  createInfoWindow(infoWindow) {
    // info_window = { content, picture_url, title  }
    return new InfoWindow(infoWindow);
  }

  // New Method
handleMapRightClick(map) {
    map.addListener('rightclick', e => {
      let position = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());
      let marker = new google.maps.Marker({
        position,
        map,
        title: 'whatever'
      });
    });
  }


        setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          debugger
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      clearMarkers() {
        this.setMapOnAll(null);
      }


}

var map;
var $map = document.getElementById('map');
//var markers = [];