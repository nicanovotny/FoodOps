import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';

export const getOrdersByRestaurant = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params;

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) throw new Error('Restaurant not found');

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

        if (!Array.isArray(products) || products.length === 0) throw new Error('Products are required');

        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) throw new Error('Restaurant not found');

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

        if (!restaurant) throw new Error('Restaurant not found');

        const orderIndex = restaurant.orders.findIndex(
            (order) => order._id.toString() === orderId
        );

        if (orderIndex === -1) throw new Error('Order not found');

        restaurant.orders.splice(orderIndex, 1);

        await restaurant.save();

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while deleting the order' });
    }
};