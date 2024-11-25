import { Router } from 'express';
import { getProductsByRestaurant } from '../controllers/Product';

const router = Router();

router.get('/:restaurantId/products', getProductsByRestaurant);

export default router;
