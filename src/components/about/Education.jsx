import React from "react";
import { Fade } from "react-reveal";
const data = require("../../data.json");

export const Education = () => {
  const [edu, setEdu] = React.useState([]);

  React.useEffect(() => {
    setEdu(data["education"])
  },[]);

  return (
    <Fade left>
      <div className="container-education education">
        <div className="timeline  education">
          <ul className=" education">
{
  edu &&
  (edu.map((x,i)=>{
    return (
      <li key={i} className=" education timeline-ul-li">
      <div className="timeline-content  education">
        <h3 className=" education">{x.grade}</h3>
        <small className="date">{x.date}</small>
        <p className=" education">
          {x.name}
        </p>
      </div>
    </li> 
    )
  }))
}

{/*             <li className=" education timeline-ul-li">
              <div className="timeline-content  education">
                <h3 className=" education">Heading</h3>
                <small className="date">20th May, 2022</small>
                <p className=" education">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima, consequuntur.
                </p>
              </div>
            </li> */}

          </ul>
        </div>
      </div>
    </Fade>
  );
};
