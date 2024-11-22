// src/models/Order.ts
import { model } from 'mongoose';
import { Schema } from 'mongoose';
import { ProductSchema } from './Product';

export const OrderSchema = new Schema({
    products: [ProductSchema],
    total: {
        type: Number,
        required: [true, 'Total cannot be empty']
    }
});

const Order = model('Order', OrderSchema);

export default Order;
