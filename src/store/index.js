import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers";

const reducers = require("./reducers").default;

const createAppStore = (initialState = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [thunk],
  });
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};

export default createAppStore(window.___INITIAL_STATE__);
