import { Sequelize } from 'sequelize';
import sequelize from '../config/db';
import UserModel from './userModel';
import OrderModel from './orderModel';

const User = UserModel(sequelize);
const Order = OrderModel(sequelize);

// Define associations if necessary
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

const db = {
  sequelize,
  Sequelize,
  User,
  Order,
};

// Sync the database
sequelize.sync();

export default db;
