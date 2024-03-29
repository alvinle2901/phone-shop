import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/mongo.js';

import mockData from './mockData.js';
import productRouter from './router/productRouter.js';
import userRouter from './router/userRouter.js';
import orderRouter from './router/orderRouter.js';

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://phone-shop-ecommerce.onrender.com'
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// API
app.use('/api/import', mockData);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
