import { useEffect, useReducer } from "react";
import { initialState, questionsReducer } from "../Reducer/questions.reducers";
import axios from "axios";

export function useFetchQuestions() {
      const [{ questions, loading, error }, dispatch] = useReducer(questionsReducer, initialState)

      const fetchQuestions = async () => {
            try {
                  const { data } = await axios.get("http://localhost:9000/questions")
                  dispatch({ type: "dataReceived", payload: data })
            } catch (error) {
                  dispatch({ type: "dataFailed", payload: error.response })
            }
      }

      useEffect(() => {
            fetchQuestions()
      }, [])
      return { questions, loading, error }
}