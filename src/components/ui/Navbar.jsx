import React from 'react';

export const Navbar = () => {
    const [isActive, setIsActive] = React.useState(false);
    const [theme, setTheme] = React.useState(true);

    React.useEffect(()=>{
      if(theme){
        document.documentElement.setAttribute('tema', 'light');
      }else{
        document.documentElement.setAttribute('tema', 'dark');
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
        <a className="navbar-item" href="#home">
          Inicio
        </a>

        <a className="navbar-item" href="#about">
          Sobre mi
        </a>
  
        <a className="navbar-item" href="#projects">
          Proyectos
        </a>

        <a className="navbar-item" href="#contact">
          Contacto
        </a>

        <button className={`button btn-theme ${theme ? "active": ""}`} onClick={()=>{setTheme(!theme)}} >
        {
          theme ? (<i className="uil uil-sun"></i>) : (<i className="uil uil-moon"></i>)
        }
        </button>

  
        </div>
      </div>
    </div>
  </nav>
  );
};
