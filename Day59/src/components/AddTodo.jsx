import React, { useState } from "react";
import { useTask } from "../Contexts/TaskProvider";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const { handleAddTodo } = useTask();

  console.log(newTodo);

  return (
    <div className="sticky top-0 bg-customGray z-50">
      <h1>Todo-App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(newTodo);
          setNewTodo("");
        }}
        className="flex gap-2 items-center py-5  border-b "
      >
        <input
          className="p-2 w-2/3 rounded-md"
          type="text"
          placeholder="Task Name"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary w-25">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
