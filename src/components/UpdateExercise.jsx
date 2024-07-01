import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateExercise } from '../features/exercisesSlice';

const UpdateExercise = ({ exercise }) => {
  const dispatch = useDispatch();
  const [updatedData, setUpdatedData] = useState({
    // State for updated exercise fields
    name: exercise.name,
    duration: exercise.duration,
    caloriesBurned: exercise.caloriesBurned,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExercise({ id: exercise.id, updatedData }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" name="name" value={updatedData.name} onChange={handleChange} />

      <label>Duration (minutes): </label>
      <input type="number" name="duration" value={updatedData.duration} onChange={handleChange} />

      <label>Calories Burned: </label>
      <input type="number" name="caloriesBurned" value={updatedData.caloriesBurned} onChange={handleChange} />

      <button type="submit">Update Exercise</button>
    </form>
  );
};

export default UpdateExercise;