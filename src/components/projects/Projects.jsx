import React from 'react';
import { Fade } from 'react-reveal';
import { Card } from './Card';

const proyectosData = require('../../projects.json');

export const Projects = () => {
  const [projects, setProjects] = React.useState();

  React.useEffect(()=>{
    setProjects(proyectosData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[proyectosData]);

  return <section id="projects" className="projects" >
  <h2>
    Proyectos
  </h2>

<Fade left>
<section className='columns is-flex is-flex-wrap-wrap is-justify-content-flex-start' >
    {
    projects ?
    (
      projects.map((x,i)=>{
          return(
            <Card key={i} name={x.name} urlGit={x.html_url} urlPage={x.url_site} description={x.description} languaje={x.languaje} image={x.image} />
          )
      })
    ) :
    (
      <div>No carga</div>
    )
  }
  </section>
</Fade>
</section>
};
