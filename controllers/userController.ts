import { Request, Response } from 'express';
import db from '../models';

const { User } = db;

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(201).send(user);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send({ error: 'Failed to create user.' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send({ error: 'Failed to fetch users.' });
  }
};
