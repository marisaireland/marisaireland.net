import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from "../data.js";

function Contact() {
  return (
    <section className="hero" id="contact">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-1">Contact Me</h3>
          <div className="buttons is-justify-content-center">
            <a className="button is-primary is-rounded" href={`mailto:${data.email}`}>
              <span className="icon">
                <FontAwesomeIcon icon={['fas', 'envelope']} />
              </span>
            </a>
            <a className="button is-primary is-rounded">
              <span className="icon">
                <FontAwesomeIcon icon={['fab', 'github-alt']} />
              </span>
            </a>
            <a className="button is-primary is-rounded">
              <span className="icon">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
