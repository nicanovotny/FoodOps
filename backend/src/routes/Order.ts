// src/routes/orderRoutes.ts
import { Router } from 'express';
import { getOrdersByRestaurant, postOrder, deleteOrder} from '../controllers/Order';

const router = Router();

// Ruta para obtener las órdenes de un restaurante específico
router.get('/:restaurantId/orders', getOrdersByRestaurant);
router.post('/:restaurantId',postOrder);
router.delete('/:restaurantId/orders/:orderId', deleteOrder);

export default router;
