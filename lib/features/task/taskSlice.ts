import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type newtsType = {
  title: string;
  id: number | undefined;
  status: string;
};

export interface TaskState {
  stack: Array<newtsType>;
}

const initialState: TaskState = {
  stack: typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("list") ?? "[]")
    : [],};

export const taskSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    addStackAction: (state: TaskState, action: PayloadAction<newtsType>) => {
      console.log(state.stack);
      localStorage.setItem(
        "list",
        JSON.stringify([...state.stack, action.payload])
      );
      const StorageItems = JSON.parse(localStorage.getItem("list") ?? "[]");
      state.stack = StorageItems;
    },

    deleteStackAction: (state: TaskState, action: PayloadAction<number>) => {
      const StorageItems: newtsType[] = JSON.parse(
        localStorage.getItem("list") ?? "[]"
      );
      const FilteredStorage = StorageItems.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("list", JSON.stringify(FilteredStorage));
      state.stack = FilteredStorage;
      console.log(FilteredStorage);
      console.log(state.stack);
    },
  },
});

export const { addStackAction, deleteStackAction } = taskSlice.actions;

export default taskSlice.reducer;
