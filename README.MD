Check your version
node -v : v20.12.0
npm -v : 10.5.1


# Step 1: Initialize Your Project
First, ensure you have npm initialized in your project directory:

sh

```
npm init -y
```

# Step 2: Install Dependencies

Install the necessary runtime dependencies:

sh
```
npm install express sequelize sqlite3
```
Install the necessary development dependencies:

sh

```
npm install --save-dev typescript @types/express @types/node @types/sequelize ts-node-dev
```

## To start the application, first compile the TypeScript code to JavaScript:

sh
Copy code
tsc

Then run the compiled JavaScript code:

sh
Copy code
```
node dist/server.js
```

Alternatively, you can use ts-node-dev for easier development, which automatically restarts the server when code changes:

sh
Copy code

```
npx ts-node-dev server.ts
```
# Step 3: Update package.json Scripts
To simplify running the application, update the scripts section in your package.json:
```
json
Copy code
"scripts": {
  "start": "node dist/server.js",
  "dev": "ts-node-dev server.ts",
  "build": "tsc"
}
```
Now you can use:

```
npm run build to compile the TypeScript code.
npm start to start the compiled code.
npm run dev to run the development server with automatic restarts.

```