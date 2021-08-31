import { combineReducers } from "redux";
import ApiCaller from "./callApi";
import CounterReducer from "./counter";
const reducers = combineReducers({
  ApiCaller,
  CounterReducer,
});

export default reducers;
