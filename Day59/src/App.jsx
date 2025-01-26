import { useContext, useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TaskProvider, { TaskContext, useTask } from "./Contexts/TaskProvider";

function App() {
  const { state, getTodos } = useTask()

  useEffect(() => {
    getTodos()
  }, []);
  console.log(state);

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
