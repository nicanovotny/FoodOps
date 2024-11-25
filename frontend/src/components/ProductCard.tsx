import React from 'react';

interface ProductCardProps {
  product: { _id: string; name: string; price: number }; 
  onIncrement: () => void; 
  onDecrement: () => void; 
  currentQuantity: number; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onIncrement,
  onDecrement,
  currentQuantity,
}) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{currentQuantity}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
