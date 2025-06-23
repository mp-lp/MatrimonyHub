import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profileRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';
import searchRoutes from './routes/searchRoutes.js';

import { connectCloudinary } from './utils/cloudinary.js'; 

const app = express();

console.log
connectCloudinary()
app.use(cors({
  origin: ['https://matrimony-hub-bts2.vercel.app'], 
  credentials: true             
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/search', searchRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));