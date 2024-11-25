import React from 'react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  name: string;
  restaurantId: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, restaurantId }) => {
    return (
      <div className="card bg-secondary shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow max-w-xl mx-auto">
        <Link to={`/restaurant/${restaurantId}`}>
          <h2 className="text-xl font-semibold text-center text-accent font-sans">{name}</h2>
        </Link>
      </div>
    );
  };  

export default RestaurantCard;
