// src/models/Restaurant.ts
import { model } from 'mongoose';
import { Schema } from 'mongoose';

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Restaurant name cannot be empty']
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Products cannot be empty']
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
});


const Restaurant = model('Restaurant', RestaurantSchema);
export default Restaurant;
