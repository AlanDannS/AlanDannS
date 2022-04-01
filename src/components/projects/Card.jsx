import React from "react";

export const Card = ({
  name,
  urlGit,
  urlPage,
  description,
  languaje,
  image,
}) => {
  const [tech, setTech] = React.useState();
  const [img, setImg] = React.useState();

  React.useEffect(() => {
    setImg(image);
    setTech(languaje);
  }, []);

  return (
    <div
      className="card column is-one-fifth-desktop is-two-fifths-tablet is-four-fifths-mobile"
      id="card"
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={
              img ? img : "https://bulma.io/images/placeholders/1280x960.png"
            }
            className="img-project"
            alt="nameImg"
          />
        </figure>
      </div>
      <div className="card-content">
        <h2 className="title-card">{name}</h2>
        <p>Tecnologias Usadas:</p>
        <div className="content-buttons">
          {tech &&
            tech.map((x, i) => {
              if (x.name === "JavaScript") {
                return (
                  <span key={i} className="tag is-warning">
                    JavaScript
                  </span>
                );
              }
              if (x.name === "HTML") {
                return (
                  <span key={i} className="tag is-danger">
                    HTML
                  </span>
                );
              }
              if (x.name === "CSS") {
                return (
                  <span key={i} className="tag is-link">
                    CSS
                  </span>
                );
              }
              if (x.name === "React") {
                return (
                  <span key={i} className="tag is-info">
                    React
                  </span>
                );
              }
              return <span key={i}></span>;
            })}
        </div>
        <p>Descripcion:</p>
        <div className="content">{description}</div>
        <div className="content-buttons-card">
          <a
            href={urlGit}
            rel="noreferrer"
            target="_blank"
            className="tag is-black is-size-6"
          >
            GitHub
          </a>
          <a
            href={urlPage}
            rel="noreferrer"
            target="_blank"
            className="tag is-success is-size-6"
          >
            Ver Sitio
          </a>
        </div>
      </div>
    </div>
  );
};