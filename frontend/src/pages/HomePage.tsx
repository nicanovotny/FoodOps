// src/pages/HomePage.tsx
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import useRestaurants from '../hooks/useRestaurants';

const HomePage: React.FC = () => {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} name={restaurant.name} restaurantId={restaurant._id} />
      ))}
    </div>
  );
};

export default HomePage;
