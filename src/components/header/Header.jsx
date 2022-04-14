import React from 'react';
/* import imgHeader from '../../img/headerImg.svg' */

export const Header = () => {
  return <header className='columns is-flex is-flex-wrap-wrap is-justify-content-center'>
      <section className='column is-half-desktop is-four-fifths-mobile info-header' >
          <h2>Hola!</h2>
          <p>Me llamo Daniel y soy Desarrollador Web</p>
          <div className="header-contact">
            <a className="header-icon-contact" rel="noreferrer" href="https://www.instagram.com/_dannsan/" target="_blank" ><i className="fa-brands fa-instagram"></i></a> 
            <a className="header-icon-contact" rel="noreferrer" href="https://www.linkedin.com/in/alan-daniel-nu%C3%B1ez/" target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a> 
            <a className="header-icon-contact" rel="noreferrer" href="https://github.com/AlanDannS" target="_blank" ><i className="fa-brands fa-github"></i></a> 
            <a className="header-icon-contact" rel="noreferrer" href="https://www.freecodecamp.org/DannS" target="_blank" ><i className="fa-brands fa-free-code-camp"></i></a> 
          </div>
          <a className='button btn-component' href='./docs/CV_DesarrolladorWeb_AlanDaniel.pdf' download="CV_DesarrolladorWeb_AlanDaniel" >Descargar CV</a>
      </section>
      <img src="./img/headerImg.svg" alt="danielDeveloper" className='column is-two-fifths-desktop is-four-fifths-mobile img-header'/>
  </header>
};
