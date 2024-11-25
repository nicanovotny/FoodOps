import { useState } from 'react';
import api from '../services/api';

const useAddOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addOrder = async (restaurantId: string, products: any[]) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.post(`/restaurants/${restaurantId}`, { products });
      
      return response.data;

    } catch (err: any) {
      setError('Error adding order');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { addOrder, loading, error };
};

export default useAddOrder;
