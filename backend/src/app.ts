import express from 'express';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/Restaurant';
import { connectToDatabase } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectToDatabase();

app.use(express.json());

// Registrar las rutas
app.use('/api/restaurants', restaurantRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
