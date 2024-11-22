// src/models/Product.ts
import { model } from 'mongoose';
import { Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be empty']
    },
});


const Product = model('Product', ProductSchema);

export default Product;
