interface Todo {
  id: string;
  content: string;
  status: boolean;
}

export const getTodos = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  try {
    const serializedState = JSON.stringify(todos);
    localStorage.setItem("todos", serializedState);
  } catch (err) {
    console.error(err);
  }
};
