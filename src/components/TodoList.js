import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
