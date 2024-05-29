"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.createOrder = void 0;
const models_1 = __importDefault(require("../models"));
const { Order, User } = models_1.default;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, product } = req.body;
        const user = yield User.findByPk(userId);
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }
        const order = yield Order.create({ userId, product });
        res.status(201).send(order);
    }
    catch (err) {
        console.error('Error creating order:', err);
        res.status(500).send({ error: 'Failed to create order.' });
    }
});
exports.createOrder = createOrder;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order.findAll();
        res.status(200).send(orders);
    }
    catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).send({ error: 'Failed to fetch orders.' });
    }
});
exports.getOrders = getOrders;
