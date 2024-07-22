import React from "react";

const ProgressBar = ({ index, numQuestions, points, maxPoints }) => {
  return (
        <header className="max-w-lg mx-auto">
              <progress max={numQuestions} value={index}></progress>
      <div className="flex justify-between">
        <p className="text-white">
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>

        <p className="text-white">
          <strong>{points}</strong>/{maxPoints}
        </p>
      </div>
    </header>
  );
};

export default ProgressBar;
