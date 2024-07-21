
export const initialState = {
      questions: [],
      loading: true,
      error: null
}

export const questionsReducer = (state = initialState, action) => {

      switch (action.type) {
            case "dataReceived":
                  return {
                        ...state,
                        loading: false,
                        questions: action.payload
                  }
            case "dataFailed":
                  return {
                        ...state,
                        loading: false,
                        error: action.payload
                  }
            default:
                  return state
      }
}