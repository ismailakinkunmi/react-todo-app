import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const { completed, id, title } = props.todo;

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => this.props.handleChangeProps(id)}
      />

      <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      <span style={props.todo.completed ? completedStyle : null}>{title}</span>
    </li>
  );
}

export default TodoItem;
