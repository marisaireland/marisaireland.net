import React from "react";
import Fade from "react-reveal/Fade";
import Card from "./Card.js";
import data from "../data.js";

function Projects() {
  return (
    <section className="hero is-medium" id="projects">
      <div className="hero-body">
        <div className="container is-max-desktop has-text-centered">
          <Fade bottom>
            <h3 className="title is-1">Projects</h3>
          </Fade>
          <Fade bottom cascade>
            <div className="columns is-multiline">
              {data.projects.map((project, index) => (
                <div key={index} className="column is-4">
                    <Card link={project.url} text={project.text} title={project.title} />
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Projects;
