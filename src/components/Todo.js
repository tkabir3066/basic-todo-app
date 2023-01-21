import React from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  return (
    <article className={style.todo}>
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.desc}</p>
      </div>
      <div>
        <button className={style.btn}>
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
