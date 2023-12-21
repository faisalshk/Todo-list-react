import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import { useState } from "react";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  const onDelete = function (todo) {
    console.log("Delete", todo);
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodo([...todos, myTodo]);
  };

  // state hook
  const [todos, setTodo] = useState(initTodo);
  // UseEffect hook
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
