# Step 1: Ensure the Server is Running
First, make sure your server is up and running. You can start the server with:


>npm run dev

This will use ts-node-dev to run your TypeScript code, and the server should be listening on the specified port (e.g., 3000).

# Step 2: API Endpoints Overview
Here are the endpoints based on the routes and controllers you have:

```
Users
POST /api/users - Create a new user
GET /api/users - Retrieve all users

```

```
Orders
POST /api/orders - Create a new order
GET /api/orders - Retrieve all orders
```

# Step 3: Testing the Endpoints

## 1. Create a New User
Method: POST
```
URL: http://localhost:3000/api/users
Body:
json
Copy code
{
  "name": "John Doe"
}
```
## 2. Retrieve All Users
```
Method: GET
URL: http://localhost:3000/api/users
```
## 3. Create a New Order
```
Method: POST
URL: http://localhost:3000/api/orders
Body:
json
Copy code
{
  "userId": 1,
  "product": "Product A"
}
```
## 4. Retrieve All Orders
```
Method: GET
URL: http://localhost:3000/api/orders
```
## Step 4: Sample Code for API Testing
You can use a tool like Postman to manually send these requests, or you can use a script to automate the process. Here’s an example using Node.js with the axios library to test the endpoints programmatically:

> Install axios for making HTTP requests:
>npm install axios

## Create a script testApi.ts:
typescript

Run the script:
> npm install axios

```typescript
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
```


> npx ts-node testApi.ts