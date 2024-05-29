import express from 'express';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', orderRoutes);

export default app;
