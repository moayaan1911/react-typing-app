import React from "react";

export const Finished = ({ correct, incorrect }) => {
  return (
    <div className="section">
      <div className="columns has-text-centered">
        <div className="column">
          <p className="is-size-5">Words Per Minute (WPM)</p>
          <p className="is-size-1 has-text-link">{correct}</p>
        </div>
        <div className="column">
          <p className="is-size-5">Accuracy</p>
          <p className="is-size-1 has-text-link">
            {Math.round((correct / (correct + incorrect)) * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
};
