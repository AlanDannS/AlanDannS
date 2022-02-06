import React from 'react';

export const Navbar = () => {
    const [isActive, setIsActive] = React.useState(false);
    const [theme, setTheme] = React.useState(true);

    React.useEffect(()=>{
      if(theme){
        document.getElementById('ht').style.backgroundColor='#efefef';
        document.getElementById('body').style.color='#000';
        const cards = document.getElementsByClassName('card');
        for (let i = 0 ; i <cards.length ; i++){
          cards[i].style.backgroundColor= '#efefef';
          cards[i].style.boxShadow= ' 2px 3px 17px -15px rgba(33,33,33,1)';
        }
      }else{
        document.getElementById('ht').style.backgroundColor='#212121';
        document.getElementById('body').style.color='#fff';
        const cards = document.getElementsByClassName('card');
        for (let i = 0 ; i <cards.length ; i++){
          cards[i].style.backgroundColor= '#212121';
          cards[i].style.boxShadow= ' 2px 3px 17px -15px rgba(239,239,239,1)';
        }
        
      }
    });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        DannS
      </a>
  
      <a role="button" className={`navbar-burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
      onClick={()=>{setIsActive(!isActive)}}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
  
      <div className="navbar-end">
        <div className="navbar-item" id="menu-nav">
        <a className="navbar-item" href="/">
          About
        </a>
  
        <a className="navbar-item" href="/">
          Projects
        </a>

        <a className="navbar-item" href="/">
          Contact
        </a>

        <a href="#" className={`button btn-theme ${theme ? "active": ""}`} onClick={()=>{setTheme(!theme)}} >
        {
          theme ? (<i className="uil uil-sun"></i>) : (<i className="uil uil-moon"></i>)
        }
        </a>

  
        </div>
      </div>
    </div>
  </nav>
  );
};
