import React from "react";

const StartScreen = ({ questions }) => {
  return (
    <div className="start">
      <h2 className="text-white text-6xl font-bold capitalize">Welcome to the React quiz</h2>
      <h3 className="text-3xl text-white mt-8"> {questions} Questions to test your react knowlegde</h3>
      <button className="mt-4 text-white bg-gray-400 px-8 py-2 rounded-2xl">Let's start</button>
    </div>
  );
};

export default StartScreen;
