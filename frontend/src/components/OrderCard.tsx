import ProductFromOrderCard from "./ProductFromOrderCard"; // Importa el componente de producto

interface OrderCardProps {
  products: { _id: string; name: string; price: number; quantity: number }[];  // Lista de productos en la orden
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
          <ProductFromOrderCard key={product._id} 
          name={product.name} price={product.price} quantity={product.quantity}/>
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
