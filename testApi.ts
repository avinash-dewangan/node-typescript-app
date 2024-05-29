import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/api';

const testApi = async () => {
  try {
    // Create a new user
    const createUserResponse = await axios.post(`${apiBaseUrl}/users`, { name: 'John Doe' });
    console.log('Create User Response:', createUserResponse.data);

    // Retrieve all users
    const getUsersResponse = await axios.get(`${apiBaseUrl}/users`);
    console.log('Get Users Response:', getUsersResponse.data);

    // Create a new order
    const createOrderResponse = await axios.post(`${apiBaseUrl}/orders`, { userId: 1, product: 'Product A' });
    console.log('Create Order Response:', createOrderResponse.data);

    // Retrieve all orders
    const getOrdersResponse = await axios.get(`${apiBaseUrl}/orders`);
    console.log('Get Orders Response:', getOrdersResponse.data);
  } catch (error) {
    // Use a type guard to handle the error properly
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

testApi();
