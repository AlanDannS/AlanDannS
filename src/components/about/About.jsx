import React from 'react';
import imgAbout from '../../img/about.svg';

export const About = () => {
  return <section className='about'>
      <h2>About me</h2>
      <div className="columns is-flex is-justify-content-space-around">
          <img src={imgAbout} alt="" className="column is-one-third img-about" />
          <div className="column is-half info-about">
              <h2>More About Me</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi ad quidem, mollitia eos aliquid reiciendis enim neque fugiat earum, voluptates molestias consectetur beatae voluptatum labore praesentium expedita, inventore pariatur veniam impedit magni fugit. Ducimus accusantium deserunt hic, ratione pariatur explicabo laudantium veritatis praesentium eius officia repellat modi error. Deserunt!</p>
              <button className="button button-info">Contact Me</button>
          </div>
      </div>
  </section>;
};
