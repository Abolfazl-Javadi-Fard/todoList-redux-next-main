import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type newtaskType = {
  title: string;
  id: number | undefined;
  status: string;
}

const storedStack = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("list") || "[]") : [];



export interface TaskState {
  stack: Array<newtaskType>
}

const initialState: TaskState = {
  stack: storedStack
}

export const taskSlice = createSlice({
  name: 'stack',
  initialState,
  reducers: {

    addStackAction: (state, action: PayloadAction<newtaskType>) => {
      const newStack = [...state.stack , action.payload];
      state.stack = newStack;
      localStorage.setItem("list",JSON.stringify(newStack))
    },

    deleteStackAction: (state, action: PayloadAction<number>) => {
      const StorageItems = JSON.parse(localStorage.getItem("list"));
      const FilteredStorage = StorageItems.filter(task => task.id !== action.payload)
      localStorage.setItem("list", JSON.stringify(FilteredStorage))
      state.stack = FilteredStorage;
    }
  },
})

export const { addStackAction, deleteStackAction } = taskSlice.actions

export default taskSlice.reducer