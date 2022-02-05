import React from 'react';
import { About } from '../about/About';
import { Card } from './Card';

export const Projects = () => {
  const [activeClass, setActiveClass] = React.useState("web")

  return <main >
  <h2 className='title-project' >
    Projects
  </h2>
  <p className="panel-tabs">
    <a className={`panel-option ${activeClass==='all' && 'is-active'}`} onClick={()=>{setActiveClass('all')}} ><i class="uil uil-arrow"></i>All</a>
    <a className={`panel-option ${activeClass==='web' && 'is-active'}`} onClick={()=>{setActiveClass('web')}} ><i class="uil uil-browser"></i>Web</a>
    <a className={`panel-option ${activeClass==='mobile' && 'is-active'}`} onClick={()=>{setActiveClass('mobile')}} ><i class="uil uil-mobile-android"></i>Mobile</a>
    <a className={`panel-option ${activeClass==='desktop' && 'is-active'}`} onClick={()=>{setActiveClass('desktop')}} ><i class="uil uil-desktop"></i>Desktop</a>
  </p>

  <section className='columns is-flex is-flex-wrap-wrap is-justify-content-space-around' >
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </section>

  <About />
</main>
};
