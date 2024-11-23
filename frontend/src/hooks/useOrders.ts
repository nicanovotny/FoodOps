import { useState, useEffect } from 'react';
import api from '../services/api';

const useOrders = (restaurantId: string) => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get(`/restaurants/${restaurantId}/orders`);
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching orders');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [restaurantId]);

    return { orders, loading, error };
};

export default useOrders;
