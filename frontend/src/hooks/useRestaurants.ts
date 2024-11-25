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
  const [hasMore, setHasMore] = useState<boolean>(true); // Si hay más restaurantes por cargar

  useEffect(() => {
    const fetchRestaurants = async () => {
        try {
            // Agregamos los parámetros de paginación
            const response = await api.get('/restaurants/names', {
                params: {
                    page,
                    limit,
                },
            });

            const newRestaurants = response.data;
            // Si la cantidad de restaurantes obtenidos es menor que el límite, no hay más productos
            if (newRestaurants.length < limit) {
                setHasMore(false);
            }

            // Añadimos los nuevos productos al estado
            setRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        } catch (err) {
            setError('Error fetching restaurants');
        } finally {
            setLoading(false);
        }
    };

    fetchRestaurants();
}, [page, limit]); // Dependencias incluyen el restaurantId, page y limit
return { restaurants, loading, hasMore, error };
};

export default useRestaurants;
