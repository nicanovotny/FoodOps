import ProductFromOrderCard from "./ProductFromOrderCard"; 
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


interface OrderCardProps {
  products: { _id: string; name: string; price: number; quantity: number }[];  
  total: number; 
  orderIndex: number;
  onDelete: () => void; 
}


const OrderCard: React.FC<OrderCardProps> = ({ products, total, onDelete, orderIndex }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleOrderVisibility = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="bg-base-300 shadow-lg rounded-lg p-6 mb-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-primary mb-4 flex justify-between items-center">
        Order #{orderIndex + 1}:
        <button 
          onClick={toggleOrderVisibility}
          className="text-accent hover:text-primary transition-colors"
        >
          {isOpen ? "Hide" : "Show"} Details
        </button>
      </h3>
      
      {isOpen && (
        <div className="space-y-4">
          {products.map((product) => (
            <ProductFromOrderCard 
              key={product._id} 
              name={product.name} 
              price={product.price} 
              quantity={product.quantity} 
            />
          ))}
        </div>
      )}

      {isOpen && (
        <div className="mt-4 flex justify-end">
          <p className="text-xl font-semibold text-primary">Total: ${total}</p>
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <button
          onClick={onDelete}
          className="bg-error text-white py-2 px-6 rounded-lg hover:bg-error/90 transition-colors"
        >
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
    </div>
  );
};


export default OrderCard;
