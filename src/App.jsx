import "./App.css";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import { useFetchQuestions } from "./CustomHooks/UseFetchQuestion";

function App() {
  const { questions, loading, error } = useFetchQuestions();
  return (
    <div className="App">
      <Header />
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>loading....</p>
      ) : (
        <>
          <StartScreen questions={questions?.length} />
        </>
      )}
    </div>
  );
}

export default App;
