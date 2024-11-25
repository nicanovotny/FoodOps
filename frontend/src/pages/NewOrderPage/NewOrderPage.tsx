import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import useAddOrder from '../../hooks/useAddOrder';
import ProductCard from '../../components/ProductCard';
import { handleIncrement, handleDecrement } from './utils';
import LoadingMessage from '../../components/Style/LoadingMessage';


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


 const handleSubmit = async () => {
   if (restaurantId && selectedProducts.length > 0) {
     await addOrder(restaurantId, selectedProducts);
     navigate(`/restaurant/${restaurantId}`);
   }
 };

 const handleCancel = () => {
    navigate(`/restaurant/${restaurantId}`);
  };


 if (loading) return <LoadingMessage message="Loading..." /> ;
 if (error) return <p>{error}</p>;


 return (
   <div className="min-h-screen bg-base-200">

     <h1 className="text-3xl font-bold text-center text-primary pt-8 mb-6">
        Select Products for New Order
     </h1>

     <div className="flex justify-center mt-4 mb-6">
        <button
        onClick={handleCancel}
        className="btn btn-outline btn-error"
        >
        Cancel
        </button>
    </div>

     {products.map((product) => (
       <ProductCard
         key={product._id}
         product={product}
         onIncrement={() =>
           handleIncrement(product, setSelectedProducts)
         }
         onDecrement={() =>
           handleDecrement(product, setSelectedProducts)
         }
         currentQuantity={
           selectedProducts.find((p) => p._id === product._id)?.quantity || 0
         }
       />
     ))}

    <div className="flex justify-center mt-6 mb-4">
    <button
        onClick={handleSubmit}
        disabled={addLoading}
        className={`btn btn-primary text-white font-medium px-6 py-3 rounded-md shadow-md transition-colors 
        ${addLoading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-primary-dark'} 
        mt-4 mb-4`}
    >
        {addLoading ? 'Creating order...' : 'Create Order'}
    </button>
    </div>

     {addError && <p>{addError}</p>}
   </div>
 );
};


export default NewOrderPage;