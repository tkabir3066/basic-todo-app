import React, { useState } from "react";
import style from "./newTodo.module.css";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description:</label>
        <textarea
          name="desc"
          id="desc"
          value={todo.desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
