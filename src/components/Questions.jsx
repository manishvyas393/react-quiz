import React from "react";

const Questions = ({ question, answer, dispatch, points }) => {
  console.log(question)
  return (
    <div className="max-w-6xl px-4 mt-8 flex flex-col justify-center items-center">
      <h4 className="text-3xl text-white font-bold">{question?.question}</h4>
      <div className="flex flex-col justify-start mt-8 w-full">
        {question.options.map((opt, i) => (
          <button
            disabled={answer !== null}
            type="button"
            className={`${
              answer === i && answer === question.correctOption
                ? "answered"
                : answer !== question.correctOption && answer === i
                ? "bg-red-500 translate-x-5"
                : "unanswered"
            } my-4 py-4 hover:md:translate-x-8 hover:translate-x-2 hover:bg-slate-400 transform duration-200 transition-all  text-white text-left px-5 rounded-2xl`}
            key={i}
            onClick={() =>
              dispatch({
                type: "answered",
                payload: {
                  answered: i,
                  points:
                    i === question.correctOption
                      ? points + question.points
                      : points + 0,
                },
              })
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
