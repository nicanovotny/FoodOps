import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useOrders from '../hooks/useOrders';
import useDeleteOrder from '../hooks/useDeleteOrder';
import OrderCard from '../components/OrderCard';
import useOneRestaurant from '../hooks/useOneRestaurant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import LoadingMessage from '../components/Style/LoadingMessage';


const RestaurantPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { name, loading: nameLoading, error: nameError } = useOneRestaurant(restaurantId || '');

  const { orders, loading: orderLoading, error: orderError } = useOrders(restaurantId || '');
  const [localOrders, setLocalOrders] = useState(orders); // to keep orders rendered
  const { deleteOrder, loading: deleteLoading, error: deleteError } = useDeleteOrder();

  const navigate = useNavigate();

  useEffect(() => { 
    setLocalOrders(orders);
  }, [orders]);

  if (orderLoading || nameLoading || deleteLoading) return <LoadingMessage message="Loading..." />;
  if (orderError || nameError || deleteError) return <p>Error loading data</p>;


  const handleDeleteOrder = async (orderId: string) => {
    if (restaurantId) {
      await deleteOrder(restaurantId, orderId);
      setLocalOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      
      <button
        onClick={() => navigate('/')}
        className="btn btn-secondary text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-primary hover:text-base-100 transition-colors"
        >
        <FontAwesomeIcon icon={faHouse} className="text-3xl" />
      </button>

      <h1 className="text-3xl font-semibold text-primary text-center mt-8 mb-6">
        Orders for {name}
      </h1>

      <div className="flex justify-center my-4">
      <button
        onClick={() => navigate(`/restaurant/${restaurantId}/new-order`)}
        className="btn btn-primary mt-4"
      >
        Add New Order
      </button>
      </div>

      {localOrders?.length === 0 ? (
        <p className="text-lg text-neutral font-medium text-center mt-8">
            No orders? Guess it is time for a snack!
        </p>

      ) : (
        localOrders.map((order, index) => (
          <OrderCard
            key={order._id} 
            orderIndex={index}
            products={order.products} 
            total={order.total}
            onDelete={() => handleDeleteOrder(order._id)}
          />
        ))
      )}
    </div>
  );
};

export default RestaurantPage;
