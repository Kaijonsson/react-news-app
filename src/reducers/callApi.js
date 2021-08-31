const initialState = {
  articles: [],
  error: "",
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
          console.log("article: ", article.title);
          return article;
        }
      });

      console.log("array to print: ", returnSearchValue);

      if (returnSearchValue) {
        return {
          articles: returnSearchValue.filter(
            (element) => element !== undefined
          ),
        };
      } else {
        return {
          ...state,
          error: "Couldn't find search-term",
        };
      }
    default:
      return state;
  }
};

export default ApiCaller;
