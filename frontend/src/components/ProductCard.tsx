import React from 'react';

interface ProductCardProps {
  product: { _id: string; name: string; price: number }; // Información básica del producto
  onIncrement: () => void; // Función para incrementar la cantidad
  onDecrement: () => void; // Función para decrementar la cantidad
  currentQuantity: number; // Cantidad seleccionada del producto
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
        {/* Botón para decrementar */}
        <button onClick={onDecrement}>-</button>
        {/* Cantidad seleccionada */}
        <span>{currentQuantity}</span>
        {/* Botón para incrementar */}
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
