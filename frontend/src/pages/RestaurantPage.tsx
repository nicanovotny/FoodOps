// RestaurantPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

import useProducts from '../hooks/useProducts';
import useOrders from '../hooks/useOrders';
import useOneRestaurant from '../hooks/useOneRestaurant';

import ProductCard from '../components/ProductCard';
import OrderCard from '../components/OrderCard';

const RestaurantPage: React.FC = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const id = restaurantId || 'defaultRestaurantId';
    const { name, loading: nameLoading, error: nameError } = useOneRestaurant(id);
    const { products, loading: productsLoading, error: productsError } = useProducts(id);
    const { orders, loading: ordersLoading, error: ordersError } = useOrders(id);

    if (nameLoading || productsLoading || ordersLoading) return <p>Loading...</p>;
    if (nameError || productsError || ordersError) return <p>Error loading data</p>;

    return (
        <div>
            <h1>{name}</h1>
            <h2>Products</h2>
                <div>
                    {products.map((product) => (
                    <ProductCard key={product._id} name={product.name} price={product.price} />
                    ))}
                </div>
            <h2>Orders</h2>
                <div>
                    {orders.map((order) => (
                    <OrderCard key={order._id} products={order.products} total={order.total} />
                    ))}
                </div>
        </div>
    );
};

export default RestaurantPage;
