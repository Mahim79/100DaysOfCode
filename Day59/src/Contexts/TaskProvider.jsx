import React, { createContext, useContext, useReducer } from "react";
import { TaskReducer } from "../Reducers/TaskReducer";

const initState = [];

export const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initState);

  const getTodos = async () => {
    await fetch(`http://localhost:3000/todos`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "getTodos", data }));
  };

  const handleAddTodo = async (newTodo) => {
    if (newTodo.length >= 2) {
      await fetch(`http://localhost:3000/todos`, {
        method: "POST",
        body: JSON.stringify({ title: newTodo, complete: false }),
        headers: {
          "Content-type": "application/json",
        },
      });

      getTodos();
    }
  };

  const deleteTodo = async (todoID) => {
    await fetch(`http://localhost:3000/todos/${todoID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    await getTodos();
  };

  const updateTodo = async (newTitle, todo) => {
    const updatedTodo = {
      ...todo,
      title: newTitle,
    };

    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedTodo),
      headers: {
        "Content-type": "application/json",
      },
    });

    await getTodos();
  };

  const handleStatusUpdate = async (todo) => {
    const updatedTodo = {
      ...todo,
      complete: !todo.complete,
    };

    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedTodo),
      headers: {
        "Content-type": "application/json",
      },
    });

    await getTodos();
  };

  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
        getTodos,
        handleAddTodo,
        deleteTodo,
        updateTodo,
        handleStatusUpdate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

// Custom Hooks
export const useTask = () => {
  return useContext(TaskContext);
};
