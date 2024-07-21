import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import { useFetchQuestions } from "./CustomHooks/UseFetchQuestion";

function App() {
  const { questions, loading, error } = useFetchQuestions();
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
          <StartScreen questions={questions?.length} />
        </>
      )}
    </div>
  );
}

export default App;
