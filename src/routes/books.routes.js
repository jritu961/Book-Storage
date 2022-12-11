const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
const {getAllBooks,getBook,deleteBook, addBook} = require('../controllers/book.controller')


router.post('/',addBook)
router.get('/:id',getBook)
router.get('/',getAllBooks)
router.delete('/:id',deleteBook)

module.exports=router;
