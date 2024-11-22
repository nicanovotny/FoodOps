// src/controllers/orderController.ts
import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';

export const getOrdersByRestaurant = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params;

        // Buscar el restaurante y poblar los pedidos
        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) throw new Error('Restaurant not found');

        // Retornar los pedidos del restaurante
        res.json(restaurant.orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while retrieving orders' });
    }
};
