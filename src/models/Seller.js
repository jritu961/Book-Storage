const mongoose = require('mongoose');
const bcrypt = require('bcrypt');//

const sellerSchema= new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Name must be Provided'],
    },
    
    
    Books:{
        type:Array
    },
    
})
// constBook=mongoose.model




module.exports = mongoose.model('Seller', sellerSchema);