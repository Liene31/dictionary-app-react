import "./App.css";
import dictionary from "./dictionary.PNG";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} alt="dictionary" class="rounded" />
        <h1>Dictionary</h1>
      </header>
    </div>
  );
}
