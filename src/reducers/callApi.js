const initialState = {
  articles: [],
  error: "",
  searchIsActive: false,
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
    case "SEARCH_LIST":
      const articlesArray = state.articles;

      const returnSearchValue = articlesArray.map((article) => {
        if (article.title.includes(action.payload)) {
          return article;
        }
      });

      const isArrayNotUndefined = returnSearchValue.find(
        (element) => element !== undefined
      );
      if (returnSearchValue.length !== 0 && isArrayNotUndefined !== undefined) {
        return {
          articles: returnSearchValue.filter(
            (element) => element !== undefined
          ),
        };
      } else {
        return {
          ...state,
          error: "Couldn't find search-term, check exact spelling.",
        };
      }
    case "SEARCH_TRUE_FALSE":
      return {
        ...state,
        searchIsActive: action.payload,
      };
    default:
      return state;
  }
};

export default ApiCaller;
