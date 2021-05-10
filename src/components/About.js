import { Fragment } from "react";
import Fade from "react-reveal/Fade";
import data from "../data.js";
import AboutText from "./AboutText.js";

function About() {
  return (
    <section className="hero is-medium" id="about">
      <div className="hero-body">
        <div className="container is-max-desktop">
          <div className="columns">
            <div className="column">
              <div className="is-flex is-justify-content-center is-align-items-center">
                <div>
                  <Fade bottom cascade>
                    <h3 className="title is-1">About Me</h3>
                  </Fade>
                  <div className="content">
                    <AboutText />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="avatar is-flex is-justify-content-center is-align-items-center">
                <figure className="image is-1x1">
                  <img className="is-rounded" src={data.avatar} alt="avatar" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
