import React  from "react";


const StartScreen = ({ questions, onClick }) => {
  return (
    <div className="start">
      <h2 className="text-white md:text-5xl text-4xl font-bold capitalize">
        Welcome to the React quiz
      </h2>
      <h3 className="md:text-2xl text-xl text-white mt-8">
        {" "}
        {questions} Questions to test your react knowlegde
      </h3>
      <button
        className="mt-4 text-white bg-gray-600 text-xl px-8 py-2 rounded-2xl"
        onClick={onClick}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
