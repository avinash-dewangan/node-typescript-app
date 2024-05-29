import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface OrderAttributes {
  id: number;
  userId: number;
  product: string;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}

class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  public id!: number;
  public userId!: number;
  public product!: string;
}

export default (sequelize: Sequelize) => {
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'orders',
      sequelize,
    }
  );

  return Order;
};
