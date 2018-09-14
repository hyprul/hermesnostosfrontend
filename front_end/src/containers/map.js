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
// handleMapRightClick(map) {
//     map.addListener('rightclick', e => {
//       let position = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());
//       let marker = new google.maps.Marker({
//         position,
//         map,
//         title: 'whatever'
//       });
//     });
//   }

handleMapRightClick(map) {
    const memory_modal = document.querySelector('#new_memory_modal');
    const modal_instance = M.Modal.init(memory_modal);

    map.addListener('rightclick', e => {

      let position = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());

      let marker = new google.maps.Marker({
        position,
        map,
        title: 'new memory',
        draggable: true
      });

      (function () {
        let div = document.getElementById('add-select-options');
        div.innerHTML = '';
        for (let {
            id,
            name
          } of Journey.all) {
          div.innerHTML +=
            `
          <p>
          <label>
            <input name="group1" id="${id}" type="radio" />
            <span>${name}</span>
          </label>
          </p>
          `;
        }
      })();

      marker.addListener('click', () => {
        modal_instance.open();
      });

      Map.active_form = {
        marker,
        modal_instance
      };
    });
  }

  static sendData() {
    let journey_id = document.querySelector('input[name="group1"]:checked').id;

    let title_element = document.getElementById('title-input');
    let title = title_element.value;
    title_element.value = '';

    let memories_element = document.getElementById('memory-input');
    let memories = memories_element.value;
    memories_element.value = '';

    let marker = Map.active_form.marker;

    let position = {
      lat: marker.position.lat(),
      lng: marker.position.lng()
    };

    let modal_instance = Map.active_form.modal_instance;

    modal_instance.close();

    let information = {
      journey_id,
      memories,
      position
    };

    Map.active_form = {};
    //debugger
    fetch("http://localhost:3000/locations",{
        method: "POST",
        headers: {
                  'Accept': 'application/json',
                  "Content-Type": "application/json"
              },

              body: JSON.stringify({
               name: title,
               coordinates: information.position,
               journal_entry : information.memories,
               journey_id : information.journey_id
              })
      })
    //debugger
    //marker.setMap(null);
    //location.reload();
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
Map.active_form = {};

//var markers = [];