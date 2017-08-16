import React from "react";
import ReactDOM from "react-dom";
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

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={actions.updateCurrent}
    />,
    document.getElementById("root")
  );
};
render();

// this will rerender the page every time state is changed
store.subscribe(render);

registerServiceWorker();
