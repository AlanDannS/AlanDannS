import React from "react";
import { Fade } from "react-reveal";
/* import imgAbout from "../../img/about.svg"; */
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export const About = () => {
  const [activeClass, setActiveClass] = React.useState("skills");

  return (
    <Fade left>
      <section className="about" id="about">
        <div>
          <h2>Sobre mi</h2>
          <div className="columns is-flex is-flex-wrap-wrap is-justify-content-space-around content-info-about">
            <img
              src="./img/about.svg"
              alt=""
              className="column is-one-third-desktop  img-about"
            />
            <div className="column is-half-desktop is-full-tablet info-about">
              <h2>Mas sobre mi</h2>
              <p>
              Soy un desarrollador al que le gusta aprender cosas nuevas y mejorar mis habilidades mediante la práctica y el aprendizaje para crear mejores proyectos, trabajando tanto en el frontend como en el backend de estos, me gusta trabajar principalmente en proyectos que tengan que ver con paguinas y aplicaciones web haciendo uso de tecnologías como HTML, CSS y JavaScrip asi también como de librerías y frameworks como ReactJs, Bootstrap, Bulma entre otros.
              </p>
              <a className="button btn-component" href="#contact" >Contactame</a>
            </div>
          </div>
          <div>
            <p className="panel-tabs">
              <a
                className={`panel-option ${
                  activeClass === "skills" && "is-active"
                }`}
                onClick={() => {
                  setActiveClass("skills");
                }}
              >
                <i className="uil uil-book-alt"></i>Habilidades
              </a>
              <a
                className={`panel-option ${
                  activeClass === "experience" && "is-active"
                }`}
                onClick={() => {
                  setActiveClass("experience");
                }}
              >
                <i className="uil uil-bag-alt"></i>Experiencia
              </a>
              <a
                className={`panel-option ${
                  activeClass === "education" && "is-active"
                }`}
                onClick={() => {
                  setActiveClass("education");
                }}
              >
                <i className="uil uil-graduation-cap"></i>Educación
              </a>
            </p>
          </div>
          <div className="options-about">
            {activeClass === "education" && <Education />}
            {activeClass === "skills" && <Skills />}
            {activeClass === "experience" && <Experience />}
          </div>
        </div>
      </section>
    </Fade>
  );
};
