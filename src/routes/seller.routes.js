const express = require('express')
const router = express.Router();
const {register,login,getAllBooks,getBooks,deleteBooks, addBooks} = require('../controllers/users.controller')
const {
    authenticate,
    authorize
} = require( '../middleware/auth')//


//(path,its calling callback)
router.post('/register',register)
router.post('/login',login)

router.patch('/customer/:id',authenticate,authorize(["seller"]),addBooks)
router.get('/customer/:id',authenticate,getBooks)
router.get('/customer',authenticate,authorize(["seller"]),getAllBooks)
router.delete('/customer/:id',authenticate,authorize(["seller"]),deleteBooks)

module.exports=router;
