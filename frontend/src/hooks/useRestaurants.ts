import { useState, useEffect } from 'react';
import api from '../services/api';

interface Restaurant {
  _id: string;
  name: string;
}

const useRestaurants = (page: number, limit: number) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true); // restaurants to be fetched

  useEffect(() => {
    const fetchRestaurants = async () => {
        try {
            const response = await api.get('/restaurants/names', {
                params: {
                    page,
                    limit,
                },
            });

            const newRestaurants = response.data;
            if (newRestaurants.length < limit) {
                setHasMore(false);
            }
            setRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        } catch (err) {
            setError('Error fetching restaurants');
        } finally {
            setLoading(false);
        }
    };

    fetchRestaurants();
}, [page, limit]);
return { restaurants, loading, hasMore, error };
};

export default useRestaurants;
