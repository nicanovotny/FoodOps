import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />

        <Route path="/restaurant/:restaurantId/new-order" element={<NewOrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
