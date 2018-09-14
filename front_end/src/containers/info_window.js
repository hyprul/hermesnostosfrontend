class InfoWindow {
  constructor({
    content,
    picture_url,
    title
  } = {}) {
    this.content = content;
    this.picture_url = picture_url;
    this.title = title;
    this.open = false;
    this.google = this.initialize();
    InfoWindow.all.push(this.google);
  }

  initialize() {
    return new google.maps.InfoWindow({
      content: this.render()
    });
  }

  render() {
    return (
      `
      <div class="col s8 l8">
        <div class="card">
          <div class="card-image container">
            <img src="${this.picture_url}">
            <span class="card-title">${this.title}</span>
          </div>
          <div class="card-content">
            <p>${this.content}</p>
          </div>
          <div class="card-action">
            <a href="#">Hermès Nostos</a>
          </div>
        </div>
      </div>`
    );
  }
}

InfoWindow.all = [];


