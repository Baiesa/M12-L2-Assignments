import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ShoppingCart from './components/ShoppingCart';
import UpdateExercise from './components/UpdateExercise';
import ExerciseSummary from './components/ExerciseSummary';
import productsReducer from './features/productsSlice';
import exercisesReducer from './features/exercisesSlice';

// Configure Redux store
const store = configureStore({
  reducer: {
    products: productsReducer,
    exercises: exercisesReducer,
  },
});

// App component
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>E-Commerce and Fitness Tracker App</h1>
          <Routes>
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/update-exercise" element={<UpdateExercise />} />
            <Route path="/exercise-summary" element={<ExerciseSummary />} />
            {/* Default route for unmatched paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

// Not Found component to handle undefined routes
const NotFound = () => {
  return <h2>404 - Not Found</h2>;
};

export default App;