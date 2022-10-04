import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import counterSlice, { increment, incrementByValue } from "./CounterSlice";
import globalSlice from "./globalSlice";
const reducer = combineReducers({
  global: globalSlice,
});
// my custom middleware to logger store state
// const loggerMiddleware = (store) => (next) => (action) => {
//   //your code here
//   console.log(action);
//   next(action);
// };
const store = configureStore({
  reducer,
});
//
// store.subscribe(() => {
//   //js observer pattern
//   console.log(`current state: ${store.getState().counter.count}`);
// });
// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(2));
// store.dispatch(incrementByValue(5));
export default store;
