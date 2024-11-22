// src/models/Order.ts
import { model } from 'mongoose';
import { Schema } from 'mongoose';

const OrderSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Products cannot be empty']
    }],
    total: {
        type: Number,
        required: [true, 'Total cannot be empty']
    }
});

const Order = model('Order', OrderSchema);

export default Order;
