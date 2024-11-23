import ProductFromOrderCard from "./ProductFromOrderCard"; // Importa el componente de producto

interface OrderCardProps {
  products: { name: string; price: number }[];  // Lista de productos en la orden
  total: number; // Total de la orden
  onDelete: () => void; // funcion para eliminar
}

const OrderCard: React.FC<OrderCardProps> = ({ products, total, onDelete}) => {
  return (
    <div>
      <h3>Order Details:</h3>
      <div>
        {/* Mapeamos los productos dentro de la orden */}
        {products.map((product) => (
          <ProductFromOrderCard key={`${product.name}-${product.price}`} 
          name={product.name} price={product.price} />
        ))}
      </div>
      <p>Total: ${total}</p>
      <button onClick={onDelete}>
        Delete Order
      </button>
    </div>
  );
};

export default OrderCard;
