import logo from "../../static/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import "./navigation.scss";

const navItems = [
  { text: "Märkte", href: "" },
  { text: "Bewusst Leben", href: "" },
  { text: "Sortiment", href: "" },
  { text: "Services", href: "" },
  { text: "Unternehmen", href: "" },
  { text: "Mein Globus", href: "" },
];
//@TODO: change id;
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a
            className="navbar-brand navbar__logo position-absolute pt-0 top-0"
            href="#"
          >
            <img src={logo} alt="logo" width="150" />
          </a>
          <div className="d-flex justify-content-between flex-grow-1 navbar__list">
            <ul className="navbar-nav">
              {navItems.map((navItem) => (
                <li
                  key={navItem.text}
                  className="nav-item d-flex flex-column justify-content-end"
                >
                  <a className="nav-link" href={navItem.href}>
                    {navItem.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex flex-column">
              <div>
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faSquareInstagram} />
              </div>
              <div>
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faSquareInstagram} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
