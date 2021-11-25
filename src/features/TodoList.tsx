import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.value);

  return (
    <div className="space-y-6">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          id={todo.id}
          status={todo.status}
        />
      ))}
    </div>
  );
}
