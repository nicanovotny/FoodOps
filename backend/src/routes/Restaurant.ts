import { Router } from 'express';
import { getRestaurantName, getRestaurants } from '../controllers/Restaurant'; // Ajusta la ruta si es necesario

const router = Router();

// Ruta para obtener todos los nombres de los restaurantes
router.get('/names', getRestaurants);
router.get('/:restaurantId/name', getRestaurantName);

export default router;