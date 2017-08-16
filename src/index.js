import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { updateCurrent } from "./reducer/todo";
import { bindActionCreators } from "redux";
const todoChangeHandler = val => store.dispatch(updateCurrent(val));

const actions = bindActionCreators(
  {
    // this is shorthand for a key/value pair.
    updateCurrent
  },
  store.dispatch
);

const state = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent} />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
