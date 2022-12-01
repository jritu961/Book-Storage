
const { createHttpError } = require('../errors/custom-error');

const {
  
  addBookSvc,
  deleteBookSvc,
  getBookSvc,
  getAllBooksSvc}=require('../services/book.services')






  //generating token JWT_SECRET
  
  

  const addBook = async(req , res, next) =>{
         const details= req.body;
         const email=req.params.email;
        const updatedData=await addBookSvc(details,email)
        res.status(201).json({sucess:'certificate Updated',details:updatedData})
      
  }
  
  const getAllBooks = async(req , res, next) =>{
     const allUser=await getAllBooksSvc()
    res.status(201).json({sucess:'getAllDetails',details:allUser})
    
};
  
  
  
  const getBook = async(req , res, next) =>{
    const userId = req.params.id;
const userDetail = await getBookSvc(userId);
    res.status(201).json({sucess:'getCertificate',details:userDetail})
    
  }
  

  const deleteBook = async(req , res, next) =>{
    const userId = req.params.id;
const userDetail = await deleteBookSvc(userId);
    res.status(201).json({sucess:'deleteCertificate',details:userDetail})
  }

module.exports= {getAllBooks,getBook,deleteBook,addBook};

