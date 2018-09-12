class Marker {
  constructor({
    position = {},
    title
  } = {}) {
    this.position = position;
    this.title = title;
    this.map = map;
    this.google = this.initialize();
    Marker.all.push(this.google);
  }

  initialize() {
    return new google.maps.Marker({
      position: this.position,
      map: this.map,
      title: this.title
    });
  }
}

Marker.all = [];