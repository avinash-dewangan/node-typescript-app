import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController';

const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', getOrders);

export default router;
