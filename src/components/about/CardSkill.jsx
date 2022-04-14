import React from 'react';

export const CardSkill = ({title, icon, ruta}) => {

  return <div className="card-skill">
    {
      icon && (<i className={`${icon} icon-skill`}></i>)
    }
    {
      ruta && (<img src={ruta} alt={title} />)
    }
    <p className='name-skill' >{title}</p>
  </div>
  
};
