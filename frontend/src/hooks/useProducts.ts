import { useState, useEffect } from 'react';
import api from '../services/api';

const useProducts = (restaurantId: string) => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get(`/restaurants/${restaurantId}/products`);
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, [restaurantId]);

    return { products, loading, error };
};

export default useProducts;
