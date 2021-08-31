const initialState = {
  articles: [],
};

const ApiCaller = (state = initialState, action) => {
  switch (action.type) {
    case "BASIC_CALL":
      return {
        articles: action.payload,
      };
    case "CALL_NEXT":
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case "RESET_LIST":
      return {
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default ApiCaller;
