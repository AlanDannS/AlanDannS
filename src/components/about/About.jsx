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
          <h2>About me</h2>
          <div className="columns is-flex is-flex-wrap-wrap is-justify-content-space-around content-info-about">
            <img
              src="./img/about.svg"
              alt=""
              className="column is-one-third-desktop  img-about"
            />
            <div className="column is-half-desktop is-full-tablet info-about">
              <h2>More About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                animi ad quidem, mollitia eos aliquid reiciendis enim neque
                fugiat earum, voluptates molestias consectetur beatae voluptatum
                labore praesentium expedita, inventore pariatur veniam impedit
                magni fugit. Ducimus accusantium deserunt hic, ratione pariatur
                explicabo laudantium veritatis praesentium eius officia repellat
                modi error. Deserunt!
              </p>
              <button className="button btn-component">Contact Me</button>
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
                <i className="uil uil-book-alt"></i>Skills
              </a>
              <a
                className={`panel-option ${
                  activeClass === "experience" && "is-active"
                }`}
                onClick={() => {
                  setActiveClass("experience");
                }}
              >
                <i className="uil uil-bag-alt"></i>Experience
              </a>
              <a
                className={`panel-option ${
                  activeClass === "education" && "is-active"
                }`}
                onClick={() => {
                  setActiveClass("education");
                }}
              >
                <i className="uil uil-graduation-cap"></i>Education
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
