import React from "react";
import Fade from "react-reveal/Fade";
import data from "../data.js";

const Header = () => {
  return (
    <section className="hero is-fullheight" id="home">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Fade bottom cascade>
            <h1 className="title hero-title is-uppercase">
              {data.name}
            </h1>
            <h2 className="subtitle is-3">
              {data.title}
            </h2>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Header
