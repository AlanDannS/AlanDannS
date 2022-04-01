import React from 'react';
import imgHeader from '../../img/header_img.svg'

export const Header = () => {
  return <header className='columns is-flex is-flex-wrap-wrap is-justify-content-center'>
      <section className='column is-half-desktop is-four-fifths-mobile info-header' >
          <h2>Hi there!</h2>
          <p>Im Alan and Im a Web Developer</p>
          <div className="header-contact">
            <a className="header-icon-contact" href="https://www.instagram.com/_dannsan/" target="_blank" ><i className="fa-brands fa-instagram"></i></a> 
            <a className="header-icon-contact" href="https://www.linkedin.com/in/alan-daniel-nu%C3%B1ez/" target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a> 
            <a className="header-icon-contact" href="https://github.com/AlanDannS" target="_blank" ><i className="fa-brands fa-github"></i></a> 
            <a className="header-icon-contact" href="https://www.freecodecamp.org/DannS" target="_blank" ><i className="fa-brands fa-free-code-camp"></i></a> 
          </div>
          <button className='button btn-component' >Download CV</button>
      </section>
      <img src={imgHeader} alt="danielDeveloper" className='column is-two-fifths-desktop is-four-fifths-mobile img-header'/>
  </header>
};
