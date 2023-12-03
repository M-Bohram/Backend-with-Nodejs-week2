# Backend with Nodejs (Week 2 - workshop code)

This is the code used in Workshop 2 in the Backend with Nodejs course.

## Here is how it is structured:

1. To check the generated code from express-generator CLI, Go to the [express-generator](./express-generator) directory.

2. To check the code used to connect to MongoDB using the Nodejs Driver, look at the [plain-mongodb-driver](./plain-mongdb-driver) directory.

3. To check the code used to connect to MongoDB using the Mongoose library, look at the [plain-mongoose](./plain-mongoose) directory.

4. To check the code used to connect to MongoDB using the Mongoose with Express (Note App), look at the [express-mongoose](./express-mongoose) directory.

5. To check the code used to connect to MongoDB Atlas using the Nodejs Driver, look at the [plain-mongo-atlas](./plain-mongo-atlas) directory.

## Start the server

You should do the following to start the server for any of the examples above:
1. You need to install the dependencies first, make sure you are in the right path first: `npm install`
2. You need to start the MongoDB server locally if it uses it (except the mongo-atlas project) using the following command: `mongod --dbpath=data` (make sure MongoDB is installed and data directory exists).
3. You can start the server: `npm start`

That's it.
