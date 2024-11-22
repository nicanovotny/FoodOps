import dotenv from 'dotenv';
dotenv.config(); 

import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      autoCreate: true,
    });
    console.log('Connected to the following database:', mongoose.connection.name);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to establish a connection to the database');
  }
};
