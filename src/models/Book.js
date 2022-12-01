const mongoose = require('mongoose');
const bcrypt = require('bcrypt');//

const bookSchema= new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Name must be Provided'],
    },
    author:{
        type:String
    },
    
    cost:{
        type:Number
    },
    
})
// constBook=mongoose.model




module.exports = mongoose.model('Book', bookSchema);