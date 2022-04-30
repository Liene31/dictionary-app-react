import "./App.css";
import dictionary from "./dictionary.PNG";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} alt="dictionary" class="rounded" />
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer>
          <a
            href="https://github.com/Liene31/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by LieneB
        </footer>
      </div>
    </div>
  );
}
