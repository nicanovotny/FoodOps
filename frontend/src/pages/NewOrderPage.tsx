// no se ni que hace esto, ojooooo

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import useAddOrder from '../hooks/useAddOrder';
import ProductCard from '../components/ProductCard';

const NewOrderPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { products, loading, error } = useProducts(restaurantId || '');
  const { addOrder, loading: addLoading, error: addError } = useAddOrder();
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!restaurantId) {
      navigate('/');
    }
  }, [restaurantId, navigate]);

  const handleProductSelect = (product: any) => {
    setSelectedProducts((prev) => {
      if (prev.some((p) => p._id === product._id)) {
        return prev.filter((p) => p._id !== product._id);
      }
      return [...prev, product];
    });
  };

  const handleSubmit = async () => {
    if (restaurantId && selectedProducts.length > 0) {
      await addOrder(restaurantId, selectedProducts);
      navigate(`/restaurant/${restaurantId}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Select Products for New Order</h1>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onClick={() => handleProductSelect(product)}
        />
      ))}
      <button onClick={handleSubmit} disabled={addLoading}>
        {addLoading ? 'Creating order...' : 'Create Order'}
      </button>
      {addError && <p>{addError}</p>}
    </div>
  );
};

export default NewOrderPage;
