import React from 'react';
import imgHeader from '../../img/header_img.svg'

export const Header = () => {
  return <header className='columns is-flex is-flex-wrap-wrap is-justify-content-centera slideInLeft'>
      <section className='column is-half-desktop is-four-fifths-mobile info-header' >
          <h2>Hi there!</h2>
          <p>Im Alan and Im a Web Developer</p>
          <button className='button button-info' >Download CV</button>
      </section>
      <img src={imgHeader} alt="danielDeveloper" className='column is-two-fifths-desktop is-four-fifths-mobile img-header'/>
  </header>
};
