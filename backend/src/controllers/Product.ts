// src/controllers/productController.ts
import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';

export const getProductsByRestaurant = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params;
        console.log(req.params);
        // Buscar el restaurante y poblar los productos
        const restaurant = await Restaurant.findById(restaurantId);
        
        if (!restaurant) throw new Error('Restaurant not found');
  
        // Retornar los productos del restaurante
        res.json(restaurant.products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while retrieving products' });
    }
};