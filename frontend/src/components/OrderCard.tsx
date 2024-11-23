import ProductCard from './ProductCard'; // Importa el componente de producto

interface OrderCardProps {
  products: { name: string; price: number }[];  // Lista de productos en la orden
  total: number; // Total de la orden
}

const OrderCard: React.FC<OrderCardProps> = ({ products, total }) => {
  return (
    <div>
      <h3>Order Details:</h3>
      <div>
        {/* Mapeamos los productos dentro de la orden */}
        {products.map((product) => (
          <ProductCard key={product.name} name={product.name} price={product.price} />
        ))}
      </div>
      <p>Total: ${total}</p>
    </div>
  );
};

export default OrderCard;
