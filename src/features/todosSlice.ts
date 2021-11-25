import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value.push(action.payload);
    },
    completeTodo: (state, action: PayloadAction<CompleteTodo>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value[index].status = action.payload.status;
    },
    removeTodo: (state, action: PayloadAction<RemoveTodo>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value.splice(index, 1);
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
