"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const userModel_1 = __importDefault(require("./userModel"));
const orderModel_1 = __importDefault(require("./orderModel"));
const User = (0, userModel_1.default)(db_1.default);
const Order = (0, orderModel_1.default)(db_1.default);
// Define associations if necessary
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });
const db = {
    sequelize: db_1.default,
    Sequelize: sequelize_1.Sequelize,
    User,
    Order,
};
// Sync the database
db_1.default.sync();
exports.default = db;
