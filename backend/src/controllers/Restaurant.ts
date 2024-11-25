import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant'; 

export const getRestaurants = async (req: Request, res: Response) => {
    try {
        const { page, limit } = req.query;
        const limitNumber = parseInt(limit as string)
        if (isNaN(limitNumber) || limitNumber <= 0) throw new Error('Invalid limit')
        const skip = (parseInt(page as string) - 1) * limitNumber;

        const restaurants = await Restaurant.find()
        .select('name') 
        .skip(skip)    
        .limit(limitNumber); 

        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
};

export const getRestaurantName = async (req: Request, res: Response) => {
    const { restaurantId } = req.params;
    try {
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) throw new Error('Restaurant not found');
        res.json({ name: restaurant.name });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving restaurant' });
    }
};
