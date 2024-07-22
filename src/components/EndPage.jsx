import React from "react";

const EndPage = ({ maxPoints, score, dispatch }) => {
  return (
    <div>
      <p className="text-white text-5xl capitalize">
        your score is <strong>{score}</strong> out of{" "}
        <strong>{maxPoints}</strong>
      </p>

      <button
        className="bg-violet-600 mt-8 py-2 px-4 rounded-xl text-white"
        onClick={dispatch}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default EndPage;
