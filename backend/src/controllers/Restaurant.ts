import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant'; 

export const getRestaurants = async (req: Request, res: Response) => {
    try {
        // Buscar todos los restaurantes y devolver solo los nombres
        const restaurants = await Restaurant.find().select('name');
        res.json(restaurants);
    } catch (error) {
        // Por ahora no manejaremos errores; solo para asegurar robustez
        res.status(500).json({ message: 'An error occurred' });
    }
};
