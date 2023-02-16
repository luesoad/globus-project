import logo from "../../static/images/logo.png";

const Navigation = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Märkte
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Bewusst Leben
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sortiment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Unternehmen
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Mein Globus<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
