import express from 'express';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/Restaurant';
import productRoutes from './routes/Product';
import orderRoutes from './routes/Order';
import { connectToDatabase } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectToDatabase();

app.use(express.json());

// Registrar las rutas
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/restaurants/:restaurantId', productRoutes);
app.use('/api/restaurants/:restaurantId', orderRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
