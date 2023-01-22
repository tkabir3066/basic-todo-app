import React, { useState } from "react";
import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";
const HOME = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((previousTodos) => {
      const filteredTodos = previousTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default HOME;
