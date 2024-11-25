import React from 'react';

interface ProductFromOrderCardProps {
    name: string;
    price: number;
    quantity: number;
  }
  
  const ProductFromOrderCard: React.FC<ProductFromOrderCardProps> = ({ name, price, quantity }) => {
    return (
      <div className="border border-neutral rounded-lg p-2 bg-base-100 mb-2 flex justify-between items-center max-w-xl mx-auto">
        <h3 className="text-sm font-semibold text-primary truncate w-1/3">{name}</h3>
        <p className="text-sm text-neutral w-1/3 text-center">${price}</p>
        <p className="text-sm text-neutral w-1/3 text-center">x {quantity}</p>
      </div>
    );
  };
  
  export default ProductFromOrderCard;
  