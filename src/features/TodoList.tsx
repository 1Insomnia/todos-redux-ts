import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.value);

  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-10">
        List
      </h2>
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
