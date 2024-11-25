// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import useRestaurants from '../hooks/useRestaurants';
import InfiniteScroll from 'react-infinite-scroll-component'

const HomePage: React.FC = () => {

  const [page, setPage] = useState(1);  // Página actual para la paginación
  const limit = 12;
  const { restaurants, loading, error, hasMore } = useRestaurants(page, limit);

  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // Incrementar la página cuando el usuario llegue al final
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Restaurants</h1>
      <InfiniteScroll
        dataLength={restaurants.length} // Número total de productos cargados
        next={fetchMoreData} // Función que se ejecuta cuando el usuario llega al final
        hasMore={hasMore} // Si hay más productos por cargar
        loader={<p>Loading more restaurants...</p>} // Lo que se muestra mientras se cargan más productos
      >
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} name={restaurant.name} restaurantId={restaurant._id} />
      ))}
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
