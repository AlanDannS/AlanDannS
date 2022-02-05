import React from 'react';

export const Footer = () => {
  return <footer className='is-flex is-justify-content-space-between is-align-content-end columns' >
      <div className="footer-info">
          <p>DannS</p>
          <p>© All rights are reserved | 2022 | Made with <i className="uil uil-heart"></i> and <i class="uil uil-coffee"></i> by DannS</p>
      </div>
      <div className='footer-info' >
      <a class="uil uil-github"></a>
      <a class="uil uil-telegram"></a>
      <a class="uil uil-twitter"></a>
      <a class="uil uil-instagram-alt"></a>
      </div>
  </footer>;
};
