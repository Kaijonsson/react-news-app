export const fetchApi = (payload) => {
  return {
    type: "BASIC_CALL",
    payload: payload,
  };
};

export const fetchNext = (data) => {
  return {
    type: "CALL_NEXT",
    payload: data,
  };
};

export const resetList = () => {
  return {
    type: "RESET_LIST",
  };
};

export const searchList = (payload) => {
  return {
    type: "SEARCH_LIST",
    payload: payload,
  };
};

export const searchTrueOrFalse = (payload) => {
  return {
    type: "SEARCH_TRUE_FALSE",
    payload: payload,
  };
};

export const CounterIncrement = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const CounterReset = () => {
  return {
    type: "RESET",
  };
};
