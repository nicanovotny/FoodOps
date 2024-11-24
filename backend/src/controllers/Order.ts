// src/controllers/orderController.ts
import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';

export const getOrdersByRestaurant = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params;

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) throw new Error('Restaurant not found');

        // Retornar los pedidos del restaurante
        res.json(restaurant.orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while retrieving orders' });
    }
};


export const postOrder = async (req: Request, res: Response) => {
    try {
        const { restaurantId } = req.params; // ID del restaurante pasado como parámetro
        const { products } = req.body; // Productos seleccionados enviados en el cuerpo de la solicitud

        // Validar que se haya enviado al menos un producto
        if (!Array.isArray(products) || products.length === 0) throw new Error('Products are required');

        // Buscar el restaurante
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) throw new Error('Restaurant not found');

        // Calcular el total
        const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

        // Crear la orden
        const newOrder = { products: products, total };

        // Guardar la orden en el restaurante
        restaurant.orders.push(newOrder);
        await restaurant.save();

        res.status(201).json({
            message: "Order created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the order" });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { restaurantId, orderId } = req.params;

        // Buscar el restaurante
        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) throw new Error('Restaurant not found');

        // Buscar la orden dentro del restaurante
        const orderIndex = restaurant.orders.findIndex(
            (order) => order._id.toString() === orderId
        );

        if (orderIndex === -1) throw new Error('Order not found');

        // Eliminar la orden
        restaurant.orders.splice(orderIndex, 1);

        // Guardar los cambios
        await restaurant.save();

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while deleting the order' });
    }
};