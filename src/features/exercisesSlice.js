import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    exerciseList: [], // Array of exercise objects
  },
  reducers: {
    updateExercise: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.exerciseList.findIndex((exercise) => exercise.id === id);
      if (index !== -1) {
        state.exerciseList[index] = { ...state.exerciseList[index], ...updatedData };
      }
    },
  },
});

export const { updateExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;