
export const initialState = {
      questions: [],
      loading: true,
      error: null,
      status: false,
      answer: null,
      points: 0
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
            case "start":
                  return {
                        ...state,
                        status: true
                  }
            case "answered":
                  console.log(action)
                  return {
                        ...state,
                        answer: action.payload.answered,
                        points: action.payload.points
                  }
            case "reset":
                  return {
                        answer: null,
                        points: 0,
                        error: null,
                        status: false,
                        questions: [],
                        loading:true,
                  }
            default:
                  return state
      }
}