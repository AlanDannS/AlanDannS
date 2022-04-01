import React from 'react';
import { Fade } from 'react-reveal';

const proyectosData = require('../../projects.json');

export const Contact = () => {
  const [projects, setProjects] = React.useState();

  React.useEffect(()=>{
    setProjects(proyectosData);
  },[proyectosData]);

  return <section id="contact" className="contact" >
  <h2>
    Contact
  </h2>

<Fade left>
<div className="contact-content">
            <a className="icon-contact" href="https://www.instagram.com/_dannsan/" target="_blank" ><i className="fa-brands fa-instagram"></i></a> 
            <a className="icon-contact" href="https://www.linkedin.com/in/alan-daniel-nu%C3%B1ez/" target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a> 
            <a className="icon-contact" href="https://github.com/AlanDannS" target="_blank" ><i className="fa-brands fa-github"></i></a> 
            <a className="icon-contact" href="https://www.freecodecamp.org/DannS" target="_blank" ><i className="fa-brands fa-free-code-camp"></i></a> 
          </div>
</Fade>
</section>
};
