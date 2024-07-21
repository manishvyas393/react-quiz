import "./App.css";
import Header from "./components/Header";
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
        <div>{questions?.length}</div>
      )}
    </div>
  );
}

export default App;
