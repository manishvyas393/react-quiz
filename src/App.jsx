import { useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import { useFetchQuestions } from "./CustomHooks/UseFetchQuestion";
import { initialState, questionsReducer } from "./Reducer/questions.reducers";
import Questions from "./components/Questions";
import ProgressBar from "./components/ProgressBar";
import EndPage from "./components/EndPage";

function App() {
  const { questions, loading, error } = useFetchQuestions();
  const [{ status, answer, points }, dispatch] = useReducer(
    questionsReducer,
    initialState
  );
  const [number, setNumber] = useState(0);
  const lastReached = questions?.length === number + 1;
  const maxPoints =
    questions?.length && questions.reduce((cur, acc) => cur + acc.points, 0);
  return (
    <div className="App mx-auto max-w-6xl">
      <Header />
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {status ? (
            <>
              {lastReached ? (
                <EndPage
                  maxPoints={maxPoints}
                  score={points}
                  dispatch={() => {
                    setNumber(0);
                    dispatch({ type: "reset" });
                  }}
                />
              ) : (
                <>
                  <ProgressBar
                    points={points}
                    maxPoints={maxPoints}
                    numQuestions={questions?.length}
                    index={number}
                  />
                  <Questions
                    question={questions?.length ? questions[number] : {}}
                    answer={answer}
                    dispatch={dispatch}
                    points={points}
                  />
                  <button
                    disabled={lastReached}
                    className="bg-violet-600 px-8 py-2 rounded-xl md:mt-8 mt-4"
                    onClick={() => {
                      dispatch({
                        type: "answered",
                        payload: { answered: null, points },
                      });
                      setNumber((num) => num + 1);
                    }}
                  >
                    Next Question
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <StartScreen
                questions={questions?.length}
                onClick={() => dispatch({ type: "start" })}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
