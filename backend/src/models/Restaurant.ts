// src/models/Restaurant.ts
import { model } from 'mongoose';
import { Schema } from 'mongoose';
import { ProductSchema } from './Product';
import { OrderSchema } from './Order';

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Restaurant name cannot be empty']
    },
    products: [ProductSchema],
    orders: [OrderSchema],
});


const Restaurant = model('Restaurant', RestaurantSchema);
export default Restaurant;
