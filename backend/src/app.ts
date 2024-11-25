import express from 'express';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/Restaurant';
import productRoutes from './routes/Product';
import orderRoutes from './routes/Order';
import { connectToDatabase } from './database';
import cors from 'cors';



dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectToDatabase();

app.use(express.json());

app.use(cors());

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/restaurants', productRoutes);
app.use('/api/restaurants', orderRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
