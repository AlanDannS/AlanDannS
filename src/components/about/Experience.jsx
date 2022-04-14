import React from 'react';
import { Fade } from 'react-reveal';
const data = require("../../data.json");

export const Experience = () => {
  const [exp, setExp] = React.useState();

  React.useEffect(()=>{
    setExp(data["experience"]);
  },[]);

  return <Fade left>
  <div className='container-education education' >
  <div className="timeline  education">
    <ul className=' education' >

      {
        exp &&
        (
          exp.map((x,i)=>{
            return (
              <li key={i} className=' education timeline-ul-li' >
              <div className="timeline-content  education">
                <h3 className=' education' >{x.description}</h3>
                <small className="date">{x.date}</small>
                <p className=' education' >{x.place}</p>
              </div>
            </li>  
            )
          })
        )
      }

    </ul>
  </div>
</div>
</Fade>;
};
