import ProductFromOrderCard from "./ProductFromOrderCard"; 

interface OrderCardProps {
  products: { _id: string; name: string; price: number; quantity: number }[];  
  total: number; 
  onDelete: () => void; 
}

const OrderCard: React.FC<OrderCardProps> = ({ products, total, onDelete}) => {
  return (
    <div>
      <h3>Order Details:</h3>
      <div>
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
