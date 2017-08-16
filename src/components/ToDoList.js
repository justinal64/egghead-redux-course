import React from "react";

// id, name, isComplete is an example of destructering. This is the same as todo.id, todo.name, and todo.isComplete
const ToDoItem = ({ id, name, isComplete }) =>
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>;

export default props =>
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo => <ToDoItem key={todo.id} {...todo} />)}
    </ul>
  </div>;
