import "./App.css";
import Game from "./components/Game";
import { Logo } from "./assets";
import { useState } from "react";
import Rules from "./components/Rules";

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  return (
    <main>
      <div className="Head">
        <a href="#" className="Head-Logo" aria-label="logo">
          <img src={Logo} alt="" />
        </a>

        <button className="Head-Btn">
          <span>score</span>
          <strong>{score}</strong>
        </button>
      </div>

      <Game setScore={setScore} setShowRules={setShowRules} />
      {showRules && <Rules setShowRules={setShowRules} />}
    </main>
  );
}

export default App;
