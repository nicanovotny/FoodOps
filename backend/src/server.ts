import dotenv from 'dotenv';
import app from './app';
import { connectToDatabase } from './database';

dotenv.config();
const PORT = process.env.PORT;

connectToDatabase();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
