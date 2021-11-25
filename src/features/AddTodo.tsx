// @ts-ignore
import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import { addTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (input.length <= 0) return;
    dispatch(
      addTodo({
        id: uuidv4(),
        content: input,
        status: false,
      })
    );
    setInput("");
  };

  return (
    <div className="mb-10">
      <div className="border border-gray-300 flex items-center rounded overflow-hidden hover:border-gray-800 focus-within:border-gray-800">
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="block w-full outline-none h-10 px-2"
          placeholder="Add Todo"
        />
        <button
          className="mx-2 outline-none text-blue-500"
          onClick={handleClick}
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
