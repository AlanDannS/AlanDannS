import React from 'react';
import imgHeader from '../../img/header_img.svg'

export const Header = () => {
  return <header className='is-flex is-12 is-justify-content-space-around'>
      <section className='is-6 info-header' >
          <h2>Hi there!</h2>
          <p>Im Alan and Im a Web Developer</p>
          <button className='button button-info' >Download CV</button>
      </section>
      <img src={imgHeader} alt="danielDeveloper" className='is-6 img-header'/>
  </header>
};
