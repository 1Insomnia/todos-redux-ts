import AddTodo from "./features/AddTodo";
import TodoList from "./features/TodoList";
import { getTodos } from "./utils/getTodos";

const App = () => {
  getTodos();

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-10">
        Add Todo
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
