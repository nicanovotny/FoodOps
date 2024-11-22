// src/routes/orderRoutes.ts
import { Router } from 'express';
import { getOrdersByRestaurant } from '../controllers/Order';

const router = Router();

// Ruta para obtener las órdenes de un restaurante específico
router.get('/orders', getOrdersByRestaurant);

export default router;
