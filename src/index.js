import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { updateCurrent } from "./reducer/todo";

const todoChangeHandler = val => store.dispatch(updateCurrent(val));

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={todoChangeHandler}
    />,
    document.getElementById("root")
  );
};
render();

// this will rerender the page every time state is changed
store.subscribe(render);

registerServiceWorker();
