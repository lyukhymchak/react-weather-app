import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <div>© 2021 SheCodes All rights reserved.</div>
        <small>
          <a
            href="https://github.com/lyukhymchak/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <span> by L. Y.</span>
        </small>
      </footer>
    </div>
  );
}

export default App;
