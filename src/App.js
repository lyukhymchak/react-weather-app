import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <a
        href="https://github.com/lyukhymchak/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Git repo
      </a>
    </div>
  );
}

export default App;
