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
      <div className="bg-base-300 border border-primary rounded-lg p-4 shadow-md mx-auto max-w-xs sm:max-w-sm lg:max-w-md mb-6">
        <h3 className="text-lg font-bold text-primary">{product.name}</h3>
        <p className="text-md text-neutral font-medium">${product.price}</p>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={onDecrement}
            className="btn btn-sm bg-primary text-white hover:bg-primary-focus rounded-full"
          >
            -
          </button>
          <span className="text-md font-semibold text-primary mx-2">{currentQuantity}</span>
          <button
            onClick={onIncrement}
            className="btn btn-sm bg-primary text-white hover:bg-primary-focus rounded-full"
          >
            +
          </button>
        </div>
        
      </div>
    );
  };  

export default ProductCard;
