import logo from "../../static/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
          <a className="navbar-brand navbar__logo" href="#">
            <img src={logo} alt="logo" />
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
              <ul className="navbar-nav navbar-nav--sm">
                <li className="nav-item">
                  <a className="nav-link d-flex" href="#">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="fa__user fa__text"
                    />
                    Anmelden
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex" href="#">
                    Kontakt
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex" href="#">
                    Newsletter
                  </a>
                </li>
              </ul>
              <div class="d-flex justify-content-end">
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
