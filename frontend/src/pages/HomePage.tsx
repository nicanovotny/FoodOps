import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import useRestaurants from '../hooks/useRestaurants';
import InfiniteScroll from 'react-infinite-scroll-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import LoadingMessage from '../components/Style/LoadingMessage';

const HomePage: React.FC = () => {

  const [page, setPage] = useState(1); 
  const limit = 12; // ammount fetched
  const { restaurants, loading, error, hasMore } = useRestaurants(page, limit);

  const fetchMoreData = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading) return <LoadingMessage message="Loading..." />;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-base-200">

      <h1 className="text-4xl font-semibold text-center text-primary pt-8 mb-8 space-x-6">
        <FontAwesomeIcon icon={faBurger} className="text-4xl" />
        <span>FoodOps</span>
        <FontAwesomeIcon icon={faBurger} className="text-4xl" />
      </h1>

      {/*to correctly calculate when to load more items */}
      <div className="min-h-screen overflow-y-auto"> 
        <InfiniteScroll
            dataLength={restaurants.length} 
            next={fetchMoreData} 
            hasMore={hasMore} 
            loader={<LoadingMessage message="Loading more restaurants..." />
            } 
        >
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant._id} name={restaurant.name} restaurantId={restaurant._id} />
            ))}
        </InfiniteScroll>
      </div>
      
    </div>
  );
};

export default HomePage;
