import React from 'react';

interface ProductFromOrderCardProps {
    name: string;
    price: number;
    quantity: number;
  }
  
  const ProductFromOrderCard: React.FC<ProductFromOrderCardProps> = ({ name, price, quantity }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{quantity}</p>
      </div>
    );
  };

  export default ProductFromOrderCard;