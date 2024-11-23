import { useState, useEffect } from 'react';
import api from '../services/api';

const useOneRestaurant = (restaurantId: string) => {
    const [name, setName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRestaurantName = async () => {
            try {
                const response = await api.get(`/restaurants/${restaurantId}/name`);
                setName(response.data.name);
            } catch (err) {
                setError('Failed to fetch restaurant');
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantName();
    }, [restaurantId]);

    return { name, loading, error };
};

export default useOneRestaurant;