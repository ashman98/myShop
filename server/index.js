require('dotenv').config();// init dotenv load config

const express = require('express');// init express server
const sequelize = require('./db'); // db ORM
const models = require('./models/models');// db structure models
const cors = require('cors');// response Access-Control
const router = require('./routes/index'); // routes api
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT || 5000;//server port

const app = express(); // express server
app.use(cors());// use Cross-Origin Resource Sharing
app.use(express.json());// use json method
app.use(express.static(path.resolve(__dirname, 'static')));// use static path //vor failer@ staticuma kranq get anenq anunv
app.use(fileUpload({}));// use fileUpload
app.use('/api', router);// routes is api type

app.use(errorHandler);//middleware for error only use the end of code

const start = async () => {
    try {
        await sequelize.authenticate(); //connect to dbgiti
        await sequelize.sync(); //sync db with my models
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //start server
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start().then(r => console.log(r));