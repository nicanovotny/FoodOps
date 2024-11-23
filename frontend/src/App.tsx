import React from 'react';
import useRestaurants from './hooks/useRestaurants';

const App: React.FC = () => {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
