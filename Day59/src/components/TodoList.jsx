import React from "react";
import TodoItem from "./TodoItem";
import { useTask } from "../Contexts/TaskProvider";

const TodoList = () => {
  const { state } = useTask();

  return (
    <div>
      <ul>
        {state.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}
      </ul>
    </div>
  );
};

export default TodoList;
