import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useOrders from '../hooks/useOrders';
import useDeleteOrder from '../hooks/useDeleteOrder';
import OrderCard from '../components/OrderCard';
import useOneRestaurant from '../hooks/useOneRestaurant';

const RestaurantPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { name, loading: nameLoading, error: nameError } = useOneRestaurant(restaurantId || '');

  const { orders, loading: orderLoading, error: orderError } = useOrders(restaurantId || '');
  const [localOrders, setLocalOrders] = useState(orders);
  const { deleteOrder, loading: deleteLoading, error: deleteError } = useDeleteOrder();

  const navigate = useNavigate();

  useEffect(() => { // mantiene actualizado orders con localOrders
    setLocalOrders(orders);
  }, [orders]);

  if (orderLoading || nameLoading || deleteLoading) return <p>Loading...</p>;
  if (orderError || nameError || deleteError) return <p>Error loading data</p>;


  const handleDeleteOrder = async (orderId: string) => {
    if (restaurantId) {
      await deleteOrder(restaurantId, orderId);
      // Filtra la orden eliminada del estado local
      setLocalOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleBackToHome}>Back to Home</button>
      <h1>Orders for Restaurant {name}</h1>
      <button onClick={() => navigate(`/restaurant/${restaurantId}/new-order`)}>Add New Order</button>

      {localOrders?.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        localOrders.map((order) => (
          <OrderCard
            key={order._id} 
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
