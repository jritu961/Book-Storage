// const mongoose = require('mongoose');

// const connectDB = (url) => {
//     return mongoose.connect(url); // here we are returning the promise
// };

// module.exports =  {connectDB};
require("dotenv").config('./');
const mysql=require("mysql2");

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
});

// 


module.export=pool.promise();
