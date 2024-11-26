import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';
import mongoose from 'mongoose';

export const getOrdersByRestaurant = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
            res.status(400).json({ message: "Invalid restaurant ID" });
            return;
        }

        const restaurant = await Restaurant.findById(restaurantId);
        
        if (!restaurant) {
            res.status(404).json({ message: "Restaurant not found." });
            return;
        }

        res.json(restaurant.orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while retrieving orders' });
    }
};


export const postOrder = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params; 
        const { products } = req.body; 

        if (!Array.isArray(products) || products.length === 0) {
            res.status(400).json({ message: "Products are required" });
            return;
        }

        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) {
            res.status(404).json({ message: "Restaurant not found." });
            return;
        }

        const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

        const newOrder = { products: products, total };

        restaurant.orders.push(newOrder);
        await restaurant.save();

        res.status(201).json({
            message: "Order created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the order" });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { restaurantId, orderId } = req.params;

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant){
            res.status(404).json({ message: "Restaurant not found." });
            return;
        }

        const orderIndex = restaurant.orders.findIndex(
            (order) => order._id.toString() === orderId
        );

        if (orderIndex === -1) {
            res.status(404).json({ message: "Order not found." });
            return;
        }

        restaurant.orders.splice(orderIndex, 1);

        await restaurant.save();

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while deleting the order' });
    }
};