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

      // Aquí puedes manejar el éxito, por ejemplo, actualizar las órdenes en el estado global o en el componente.
      return response.data; // Puedes devolver los datos de la nueva orden si los necesitas.

    } catch (err: any) {
      setError('Error al añadir la orden');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { addOrder, loading, error };
};

export default useAddOrder;
