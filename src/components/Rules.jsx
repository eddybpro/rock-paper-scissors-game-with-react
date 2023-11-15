import "./Rules.css";
import { RulesImg, Close } from "../assets";
import PropTypes from "prop-types";

function Rules({ setShowRules }) {
  return (
    <div className="RulesBox">
      <h1 className="RulesBox-Title">rules</h1>
      <div className="RulesBox-ImgBox">
        <img src={RulesImg} alt="" />
      </div>
      <button
        className="RulesBox-Btn"
        onClick={() => setShowRules((prev) => !prev)}
      >
        <img src={Close} alt="" />
      </button>
    </div>
  );
}

Rules.propTypes = {
  setShowRules: PropTypes.func,
};

export default Rules;
