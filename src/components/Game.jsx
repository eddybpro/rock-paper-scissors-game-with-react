import "./Game.css";
import { Paper, Rock, Scissors } from "../assets";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Game({ setScore, setShowRules }) {
  const houseList = ["paper", "rock", "scissors"];
  const [housePick, setHousePick] = useState("");

  const [showResult, setShowResult] = useState({
    show: false,
    icon: "",
    name: "",
  });

  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    setShowResult((prev) => ({
      ...prev,
      show: !prev.show,
      icon: e.target.dataset.id,
      name: e.target.dataset.name,
    }));
    setHousePick(houseList[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    if (showResult.name === "paper" && housePick === "rock") {
      setScore((score) => score + 1);
      setResult(1);
    } else if (showResult.name === "rock" && housePick === "scissors") {
      setScore((score) => score + 1);
      setResult(1);
    } else if (showResult.name === "scissors" && housePick === "paper") {
      setScore((score) => score + 1);
      setResult(1);
    } else if (showResult.name === "paper" && housePick === "scissors") {
      setScore((score) => score - 1);
      setResult(-1);
    } else if (showResult.name === "rock" && housePick === "paper") {
      setScore((score) => score - 1);
      setResult(-1);
    } else if (showResult.name === "scissors" && housePick === "rock") {
      setScore((score) => score - 1);
      setResult(-1);
    } else {
      setResult(0);
    }
  }, [housePick, showResult, setScore]);

  return (
    <div className="GameBox">
      {!showResult.show ? (
        <div className="GameBox-Game">
          <div
            className="GameBox-Game-ImgWrapper paper"
            data-id={Paper}
            data-name="paper"
            onClick={handleClick}
          >
            <div className="GameBox-Game-ImgWrapper-ImgBox">
              <img src={Paper} alt="" />
            </div>
          </div>
          <div
            className="GameBox-Game-ImgWrapper scissors"
            data-id={Scissors}
            data-name="scissors"
            onClick={handleClick}
          >
            <div className="GameBox-Game-ImgWrapper-ImgBox">
              <img src={Scissors} alt="" />
            </div>
          </div>
          <div
            className="GameBox-Game-ImgWrapper rock"
            data-id={Rock}
            data-name="rock"
            onClick={handleClick}
          >
            <div className="GameBox-Game-ImgWrapper-ImgBox">
              <img src={Rock} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="GameBox-Result">
          <div>
            <p className="GameBox-Result-Para">you picked</p>
            <div
              className={
                result == 1
                  ? `GameBox-Game-ImgWrapper ${showResult.name} win`
                  : `GameBox-Game-ImgWrapper ${showResult.name}`
              }
            >
              <div className="GameBox-Game-ImgWrapper-ImgBox">
                <img src={showResult.icon} alt="" />
              </div>
            </div>
          </div>
          <div>
            <p className="GameBox-Result-Para">the house picked</p>
            <div
              className={
                result == -1
                  ? `GameBox-Game-ImgWrapper ${housePick} win`
                  : `GameBox-Game-ImgWrapper ${housePick}`
              }
            >
              <div className="GameBox-Game-ImgWrapper-ImgBox">
                <img src={`/src/assets/icon-${housePick}.svg`} alt="" />
              </div>
            </div>
          </div>
          <div className="GameBox-Result-PlayBox">
            <strong className="GameBox-Result-PlayBox-Para">
              {result === 1 ? "you win" : result === -1 ? "you lose" : "draw"}
            </strong>
            <button
              className="GameBox-Result-PlayBox-Btn"
              onClick={() =>
                setShowResult((prev) => ({
                  ...prev,
                  show: false,
                  icon: "",
                  name: "",
                }))
              }
            >
              play again
            </button>
          </div>
        </div>
      )}
      <button
        className="GameBox-Rules"
        onClick={() => setShowRules((prev) => !prev)}
      >
        rules
      </button>
    </div>
  );
}

Game.propTypes = {
  setScore: PropTypes.func,
  setShowRules: PropTypes.func,
};

export default Game;
