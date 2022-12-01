require("dotenv").config('./')
require('express-async-errors');
const express = require("express");
const customerApiRouter=require('./src/routes/customer.routes')
const sellerApiRouter=require('./src/routes/seller.routes')
const bookApiRouter=require('./src/routes/book.routes')
const cors =require("cors");
const notFound=require('./src/middleware/not-found')
const errorHandlerMiddleware=require('./src/middleware/error-handler')
const {connectDB} = require('./src/db/connect')
const bodyParser = require("body-parser");
const app = express();
//The app.use () function adds a new middleware to the app.
app.use(cors());
//body parser parese incoming request in middleware before your handler
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api/book',bookApiRouter)
app.use('/api/seller',sellerApiRouter)
app.use('/api/customer',customerApiRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)
const url=process.env.MONGO_URI;

const port=process.env.PORT

const start = async () => {
    try {
        await connectDB(url);
        app.listen(port, console.log(`server is listening on port http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
};


start();