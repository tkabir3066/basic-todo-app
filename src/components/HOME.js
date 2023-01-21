import React from "react";
import Todos from "./Todos";
import style from "./home.module.css";
const dummyTodos = [
  {
    id: 1,
    title: "todo title 1",
    desc: "This is description 1",
  },
  {
    id: 2,
    title: "todo title 2",
    desc: "This is description 2",
  },
];

const HOME = () => {
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default HOME;
