// src/routes/productRoutes.ts
import { Router } from 'express';
import { getProductsByRestaurant } from '../controllers/Product';

const router = Router();

// Ruta para obtener los productos de un restaurante específico
router.get('/:restaurantId/products', getProductsByRestaurant);

export default router;
