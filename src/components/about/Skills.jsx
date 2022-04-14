import React from "react";
import { Fade } from "react-reveal";
import { CardSkill } from "./CardSkill";
const {skills} = require("../../data.json");

export const Skills = () => {
  const [frontend, setFrontend] = React.useState();
  const [backend, setBackend] = React.useState();
  const [database, setDatabase] = React.useState();

  React.useEffect(()=>{
    const {frontend} = skills[0];
    setFrontend(frontend);
    const {backend} = skills[0];
    setBackend(backend);
    const {database} = skills[0];
    setDatabase(database);
  },[]);

  return (
    <Fade left>
      <div className="skills">
        <div>
        <h2>Tecnologias</h2>
                <section>
                  <h3>Frontend</h3>
                  <div className="skills-data">
                    {
                      frontend && (
                        frontend.map((x,i)=>{
                          return (
                            <CardSkill key={i} title={x.name} icon={x.icon}/>
                          )
                        })
                      )
                    }
                  </div>
                </section>
                <section>
                  <h3>Backend</h3>
                  <div className="skills-data">
                    {
                      backend && (
                        backend.map((x,i)=>{
                          return(
                            <CardSkill key={i} title={x.name} icon={x.icon} />
                          )
                        })
                      )
                    }
                  </div>
                </section>
                <section>
                  <h3>Database</h3>
                  <div className="skills-data">
                    {
                      database && (
                        database.map((x,i)=>{
                          return (
                            <CardSkill key={i} title={x.name} ruta={x.ruta} />
                          )
                        })
                      )
                    }
                  </div>
                </section>
        </div>
        <div>
        <h2>Habilidades</h2>
                <ul className="skills-list" >
                  <li>Trabajo en Equipo</li>
                  <li>Metodologias Agiles</li>
                  <li>Adaptabilidad</li>
                  <li>Resolucion de Problemas</li>
                  <li>Autodidacta</li>
                  <li>Metodologias Agiles (Scrum)</li>
                </ul>
        </div>
      </div>
    </Fade>
  );
};
