## Node Course With MongoDB

### Project in progress

### Resume

This project was made with the premise of adapting with the node so that I can become a fullstack.

###   Application

It is an API in **node.js** that creates, lists and deletes posts, using MongoDB as a database. And to store sensitive data like bank name and password, dotenv was used.

Route validations are performed using *celebrate* and unit tests and integration tests with *jest*. To use *jest* without affecting the original database, a database was created for testing and is triggered by running the test script, because in it I used *cross-env* to set a variable that changes the database.

###   Enabled scripts

 - `npm start`: Run the API with the node;
 - `npm run dev`: Run the API with the nodemon;
 - `npm test`: Run all existing tests;

### Project dependencies

 - bcrypt: ^4.0.1;
 - celebrate: ^12.0.1,
 - express: ^4.17.1,
 - jsonwebtoken: ^8.5.1,
 - mongoose: ^5.9.7
 - cross-env: ^7.0.2,
 - dotenv: ^8.2.0,
 - jest: ^26.0.1,
 - nodemon: ^2.0.3,
 - supertest: ^4.0.2