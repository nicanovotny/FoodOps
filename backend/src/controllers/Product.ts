import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';
import mongoose from 'mongoose';

export const getProductsByRestaurant = async (req: Request, res: Response) => {
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
  
        res.json(restaurant.products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while retrieving products' });
    }
};
