import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', title: 'Sample Task', description: 'Test task', assignee: '2', status: 'pending', dueDate: '2025-09-01' },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { setTasks, addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;