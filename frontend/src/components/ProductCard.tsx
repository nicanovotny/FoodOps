import React from 'react';

interface ProductCardProps {
  product: { _id: string; name: string; price: number }; // Añadimos el producto completo
  onClick: (product: { _id: string; name: string; price: number }) => void; // onClick recibe el producto
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div onClick={() => onClick(product)}> {/* Cuando se hace clic, se pasa el producto a onClick */}
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
