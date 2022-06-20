import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import productsReducer from "./reducers/productsReducer";

const store = createStore(
  productsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

      <App />

  </Provider>
);
