// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Página de inicio con la lista de restaurantes
import RestaurantPage from './pages/RestaurantPage'; // Aún no existe, la crearemos más tarde

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        {/* Página principal que muestra la lista de restaurantes */}
        <Route path="/" element={<HomePage />}/>
        
        {/* Página individual de cada restaurante */}
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
};

export default App;
