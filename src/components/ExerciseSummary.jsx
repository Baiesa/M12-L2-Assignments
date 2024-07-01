import React from 'react';
import { useSelector } from 'react-redux';

const ExerciseSummary = () => {
  const exercises = useSelector((state) => state.exercises.exerciseList);
  
  // Calculate summary information
  const totalDuration = exercises.reduce((total, exercise) => total + exercise.duration, 0);
  const totalCaloriesBurned = exercises.reduce((total, exercise) => total + exercise.caloriesBurned, 0);
  
  return (
    <div>
      <h2>Exercise Summary</h2>
      <p>Total Duration: {totalDuration} minutes</p>
      <p>Total Calories Burned: {totalCaloriesBurned} kcal</p>
    </div>
  );
};

export default ExerciseSummary;