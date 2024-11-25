import { Router } from 'express';
import { getRestaurantName, getRestaurants } from '../controllers/Restaurant'; 

const router = Router();

router.get('/names', getRestaurants);
router.get('/:restaurantId/name', getRestaurantName);

export default router;