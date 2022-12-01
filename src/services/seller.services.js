const { createHttpError } = require('../errors/custom-error');
const User = require('../models/Book');


const registerSvc= async (user) =>{
 const insertedUser = await User.create(user)
 if (!insertedUser) {
    const error = createHttpError('Bad Credentials', 400);
    throw error;
}
return insertedUser;
}

const getBooksById= async (id) =>{
    const user = await User.findOne({ id });
    if (user === null) {
        const error = createHttpError('Bad Credentials', 400);
        throw error;
    }

    return user;
}
const checkPassword= async (user,plainTextPassword) =>{
    let isMatch;
    isMatch = await user.checkPassword(plainTextPassword);
    if (!isMatch) {
        const error = createHttpError('Bad Credentials Pass', 400);
        throw error;
    }
    return isMatch;
}
 


const addBooksSvc= async (details,email) =>{
        const updatedData=await User.findOneAndUpdate({email:email},details,{
        new:true,
        runValidators:true
     })
       if (!updatedData){
        return createHttpError("no User Found",404)
       }
       return updatedData;
    };
    
const getAllDetailsSvc= async () =>{
   const allUser= await User.find({})
   if(!allUser){
    return createHttpError("error",404)
   }
   return allUser;
}
const getBooksSvc= async (id) =>{
   const userDetail= await User.findById(id)
   if (!userDetail){
    return createHttpError("no User Found",404)
   }
   return userDetail;
}
const deleteBooksSvc= async (id) =>{
   const userDetail= await User.findByIdAndDelete(id)
   if (!userDetail){
    return createHttpError("no User Found",404)
   }
   return userDetail;
}





module.exports={
    registerSvc,
    getBooksById,
    checkPassword,
    addBooksSvc,
    getAllDetailsSvc,
    getBooksSvc,
    deleteBooksSvc
}
