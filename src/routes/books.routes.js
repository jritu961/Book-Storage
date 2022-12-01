const express = require('express')
const router = express.Router();
const {getAllBooks,getBook,deleteBook, addBook} = require('../controllers/users.controller')


router.post('/',addBook)
router.get('/:id',getBook)
router.get('/',getAllBooks)
router.delete('/:id',deleteBook)

module.exports=router;
