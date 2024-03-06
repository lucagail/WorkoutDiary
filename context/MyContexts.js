// MyContexts.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const WorkoutContext = createContext();

// Create a provider component
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('Kilometers'); // Add selectedUnit state


  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, selectedUnit, setSelectedUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Custom hook to use the context
export const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};
