// src/components/RestaurantCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  name: string;
  restaurantId: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, restaurantId }) => {
  return (
    <div>
      {/* Usamos Link para navegar a la página del restaurante */}
      <Link to={`/restaurant/${restaurantId}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default RestaurantCard;
