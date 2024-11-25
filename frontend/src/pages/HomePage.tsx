// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import useRestaurants from '../hooks/useRestaurants';
import InfiniteScroll from 'react-infinite-scroll-component'

const HomePage: React.FC = () => {

  const [page, setPage] = useState(1); 
  const limit = 12; // ammount fetched
  const { restaurants, loading, error, hasMore } = useRestaurants(page, limit);

  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Restaurants</h1>
      <InfiniteScroll
        dataLength={restaurants.length} 
        next={fetchMoreData} 
        hasMore={hasMore} 
        loader={<p>Loading more restaurants...</p>} 
      >
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} name={restaurant.name} restaurantId={restaurant._id} />
      ))}
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
