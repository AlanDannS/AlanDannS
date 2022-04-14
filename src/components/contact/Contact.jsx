import React from 'react';
import { Fade } from 'react-reveal';

export const Contact = () => {

  return <section id="contact" className="contact" >
  <h2>
    Contacto
  </h2>

<Fade left>
<div className="contact-content">
            <a rel="noreferrer" className="icon-contact" href="https://www.instagram.com/_dannsan/" target="_blank" ><i className="fa-brands fa-instagram"></i></a> 
            <a rel="noreferrer" className="icon-contact" href="https://www.linkedin.com/in/alan-daniel-nu%C3%B1ez/" target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a> 
            <a rel="noreferrer" className="icon-contact" href="https://github.com/AlanDannS" target="_blank" ><i className="fa-brands fa-github"></i></a> 
            <a rel="noreferrer" className="icon-contact" href="mailto:danielnun9719@gmail.com" target="_blank" ><i className="fa-solid fa-envelope"></i></a> 
          </div>
</Fade>
</section>
};
