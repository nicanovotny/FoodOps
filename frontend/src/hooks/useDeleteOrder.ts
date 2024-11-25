import { useState } from 'react';
import api from '../services/api';

const useDeleteOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteOrder = async (restaurantId: string, orderId: string) => {
    try {
      setLoading(true);
      setError(null);

      await api.delete(`/restaurants/${restaurantId}/orders/${orderId}`);

    } catch (err: any) {
      setError('Error al eliminar la orden');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteOrder, loading, error };
};

export default useDeleteOrder;
