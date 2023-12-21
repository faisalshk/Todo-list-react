import React from "react";
import TodoItems from "./TodoItems";

export default function Todos(props) {
  return (
    <div className="container">
      <h3>Todo List</h3>
      {props.todos.length === 0
        ? "No Todos To Display"
        : props.todos.map((todo) => {
            return (
              <TodoItems key={todo.sno} todo={todo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
