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

export const resetList = (payload) => {
  return {
    type: "RESET_LIST",
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
