import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTodos, saveTodos } from "../utils/getTodos";

interface Todo {
  id: string;
  content: string;
  status: boolean;
}

interface TodosState {
  value: Todo[];
}

interface CompleteTodo {
  id: string;
  status: boolean;
}

interface RemoveTodo {
  id: string;
}

const initialState: TodosState = {
  value: getTodos(),
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value.push(action.payload);
      saveTodos(state.value);
    },
    completeTodo: (state, action: PayloadAction<CompleteTodo>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value[index].status = action.payload.status;
      saveTodos(state.value);
    },
    removeTodo: (state, action: PayloadAction<RemoveTodo>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value.splice(index, 1);
      saveTodos(state.value);
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
