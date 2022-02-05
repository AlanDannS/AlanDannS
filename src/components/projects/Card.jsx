import React from "react";

export const Card = () => {
  return (
    <div className="card column is-one-fifth">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="nameImg"
          />
        </figure>
      </div>
      <div className="card-content">
        <h2>Title</h2>
        <p>
            <span class="tag is-black">Black</span>
            <span class="tag is-dark">Dark</span>
            <span class="tag is-light">Light</span>
            <span class="tag is-white">White</span>
            <span class="tag is-primary">Primary</span>
            <span class="tag is-link">Link</span>
            <span class="tag is-info">Info</span>
            <span class="tag is-success">Success</span>
            <span class="tag is-warning">Warning</span>
            <span class="tag is-danger">Danger</span>
          </p>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="#">@bulmaio</a>.<a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
        </div>
      </div>
    </div>
  );
};
