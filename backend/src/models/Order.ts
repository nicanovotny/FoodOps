import { model, Schema } from 'mongoose';

const ProductInOrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
});

export const OrderSchema = new Schema({
  products: [ProductInOrderSchema], 
  total: {
    type: Number,
    required: [true, 'Total cannot be empty'],
  },
});

const Order = model('Order', OrderSchema);

export default Order;