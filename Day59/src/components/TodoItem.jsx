import React, { useState } from "react";
import { useTask } from "../Contexts/TaskProvider";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(todo.title);
  const { deleteTodo, updateTodo, handleStatusUpdate } = useTask(); // Custom Hook

  return (
    <li
      className={`flex items-center gap-2
        ${todo.complete ? "opacity-50" : "opacity-100"}
       p-4 my-4 bg-emerald-800 rounded-md w-[375px]`}
    >
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => handleStatusUpdate(todo)}
      />

      {isEditing ? (
        <div className="flex items-center gap-2 w-full">
          <input
            className="p-2 w-2/3 rounded-md"
            type="text"
            name=""
            id=""
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
          <button
            className="ml-auto"
            onClick={async () => {
              await updateTodo(edit, todo);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 w-full">
          <h2> {todo.title} </h2>
          <button className="ml-auto" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
      <button className="" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
