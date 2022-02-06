import React from "react";

export const Card = () => {
  return (
    <div className="card column is-one-fifth-desktop is-one-third-tablet is-four-fifths-mobile" id='card'>
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
            <span className="tag is-black">Black</span>
            <span className="tag is-dark">Dark</span>
            <span className="tag is-light">Light</span>
            <span className="tag is-white">White</span>
            <span className="tag is-primary">Primary</span>
            <span className="tag is-link">Link</span>
            <span className="tag is-info">Info</span>
            <span className="tag is-success">Success</span>
            <span className="tag is-warning">Warning</span>
            <span className="tag is-danger">Danger</span>
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
