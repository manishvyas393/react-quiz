import React from "react";

const ProgressBar = ({ index, numQuestions, points, maxPoints }) => {
  return (
        <header className="md:max-w-lg max-w-md mx-auto">
              <progress className="bg-gray-200" max={numQuestions} value={index}></progress>
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
