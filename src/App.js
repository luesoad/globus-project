import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/Navigation/Navigation";
import "./styles/general.scss";
function App() {
  return (
    <>
      <Navigation />
      <section></section>
      <h1>Hello World</h1>
      <FontAwesomeIcon icon={faCoffee} />
      <footer></footer>
    </>
  );
}

export default App;
