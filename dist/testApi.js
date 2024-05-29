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
const axios_1 = __importDefault(require("axios"));
const apiBaseUrl = 'http://localhost:3000/api';
const testApi = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Create a new user
        const createUserResponse = yield axios_1.default.post(`${apiBaseUrl}/users`, { name: 'John Doe' });
        console.log('Create User Response:', createUserResponse.data);
        // Retrieve all users
        const getUsersResponse = yield axios_1.default.get(`${apiBaseUrl}/users`);
        console.log('Get Users Response:', getUsersResponse.data);
        // Create a new order
        const createOrderResponse = yield axios_1.default.post(`${apiBaseUrl}/orders`, { userId: 1, product: 'Product A' });
        console.log('Create Order Response:', createOrderResponse.data);
        // Retrieve all orders
        const getOrdersResponse = yield axios_1.default.get(`${apiBaseUrl}/orders`);
        console.log('Get Orders Response:', getOrdersResponse.data);
    }
    catch (error) {
        // Use a type guard to handle the error properly
        if (axios_1.default.isAxiosError(error)) {
            console.error('Axios error:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        }
        else {
            console.error('Unexpected error:', error);
        }
    }
});
testApi();
