const { createHttpError } = require('../errors/custom-error');
const  Book= require('../models/Book');




const addBookSvc= async (details,email) =>{
        const updatedData=await Book.findOneAndUpdate({email:email},details,{
        new:true,
        runValidators:true
     })
       if (!updatedData){
        return createHttpError("no Book Found",404)
       }
       return updatedData;
    };
    
const getAllBooksSvc= async () =>{
   const allBooks= await Book.find({})
   if(!allBooks){
    return createHttpError("error",404)
   }
   return allBooks;
}
const getBookSvc= async (id) =>{
   const bookDetail= await Book.findById(id)
   if (!bookDetail){
    return createHttpError("no Book Found",404)
   }
   return bookDetail;
}
const deleteBookSvc= async (id) =>{
   const userDetail= await Book.findByIdAndDelete(id)
   if (!userDetail){
    return createHttpError("no Book Found",404)
   }
   return userDetail;
}





module.exports={
    addBookSvc,
    getAllBooksSvc,
    getBookSvc,
    deleteBookSvc
}
