import { useState, useEffect } from 'react';
import api from '../services/api';

interface Restaurant {
  _id: string;
  name: string;
}

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        console.log("holaaaaa");
        const response = await api.get('/restaurants/names'); // Endpoint del backend
        console.log('Response data:', response.data);
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to fetch restaurants.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

export default useRestaurants;
