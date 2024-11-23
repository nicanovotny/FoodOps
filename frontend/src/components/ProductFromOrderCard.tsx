import React from 'react';

interface ProductFromOrderCardProps {
    name: string;
    price: number;
  }
  
  const ProductFromOrderCard: React.FC<ProductFromOrderCardProps> = ({ name, price }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    );
  };

  export default ProductFromOrderCard;