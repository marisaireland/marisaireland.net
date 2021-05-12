import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from "../data.js";
import logo from "../assets/logo.png";

const Navbar = () => {
  function handleClick(e) {
    const burger = document.getElementById('navbarBurger');
    burger.classList.toggle('is-active');

    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('is-active');
  }

  return (
    <nav className="navbar is-spaced is-fixed-top has-background-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="Marisa Ireland home" />
        </a>
        <a id="navbarBurger" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item is-tab">
            <a href="#about">
              About
            </a>
          </div>
          <div className="navbar-item is-tab">
            <a href="#projects">
              Projects
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="buttons is-justify-content-center">
            <a className="button is-primary is-rounded" href={`mailto:${data.email}`} aria-label="Email Marisa" title="Email Marisa">
              <span className="icon">
                <FontAwesomeIcon icon={['fas', 'envelope']} aria-hidden="true" />
              </span>
            </a>
            <a className="button is-primary is-rounded" href={data.linkedin} aria-label="Go to Marisa's LinkedIn profile" title="Go to Marisa's LinkedIn profile">
              <span className="icon">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} aria-hidden="true"  />
              </span>
            </a>
            <a className="button is-primary is-rounded" href={data.github} aria-label="Go to Marisa's Github profile" title="Go to Marisa's Github profile">
              <span className="icon">
                <FontAwesomeIcon icon={['fab', 'github-alt']} aria-hidden="true" />
              </span>
            </a>
            <a className="button is-primary is-rounded" href={data.codepen} aria-label="Go to Marisa's CodePen profile" title="Go to Marisa's CodePen profile">
              <span className="icon">
                <FontAwesomeIcon icon={['fab', 'codepen']} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
