type Product = {
    _id: string;
    name: string;
    price: number;
  };

  type ProductInOrder = Product & {
    quantity: number;
  };
  
  export const handleDecrement = (
    product: Product,
    setSelectedProducts: React.Dispatch<React.SetStateAction<ProductInOrder[]>>
  ) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p._id === product._id);
  
      if (existingProduct && existingProduct.quantity! > 1) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity! - 1 } : p
        );
      } else if (existingProduct && existingProduct.quantity === 1) {
        return prev.filter((p) => p._id !== product._id);
      }
  
      return prev;
    });
  };
  
  export const handleIncrement = (
    product: Product,
    setSelectedProducts: React.Dispatch<React.SetStateAction<ProductInOrder[]>>
  ) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p._id === product._id);
  
      if (existingProduct) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity! + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  