import React from "react";
import { removeTodo, completeTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

interface CompleteTodo {
  id: string;
  status: boolean;
}

interface RemoveTodo {
  id: string;
}

export default function TodoItem({
  id,
  content,
  status,
}: {
  id: string;
  content: string;
  status: boolean;
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      removeTodo({
        id: id,
      })
    );
  };

  const handleComplete = () => {
    dispatch(
      completeTodo({
        id: id,
        status: !status,
      })
    );
  };

  return (
    <div className="p-4 shadow-md flex items-center rounded">
      <div className={status ? "line-through flex-1" : "flex-1"}>{content}</div>
      <div className="flex items-center gap-2">
        <button
          className="outline-none text-green-500"
          onClick={handleComplete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
        <button className="outline-none text-red-500" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
