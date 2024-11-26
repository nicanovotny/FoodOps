import express from 'express';
import restaurantRoutes from './routes/Restaurant';
import productRoutes from './routes/Product';
import orderRoutes from './routes/Order';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/restaurants', productRoutes);
app.use('/api/restaurants', orderRoutes);

export default app;