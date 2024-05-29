import { Request, Response } from 'express';
import db from '../models';

const { Order, User } = db;

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, product } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    const order = await Order.create({ userId, product });
    res.status(201).send(order);
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).send({ error: 'Failed to create order.' });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll();
    res.status(200).send(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).send({ error: 'Failed to fetch orders.' });
  }
};
