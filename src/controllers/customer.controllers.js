
const { createHttpError } = require('../errors/custom-error');

const {registerSvc,
  getBooksById,
  
  addBooksSvc,
  deleteBooksSvc,
  getBooksSvc,
  getAllDetailsSvc}=require('../services/book.services')
const jwt=require('jsonwebtoken');
const register = async(req , res, next) =>{
  const user=req.body
  if (Object.keys(user).length === 0) {
    const httpError = createHttpError('Body is missing', 400);
    next(httpError);
    return;
}
const insertedUser = await registerSvc(user);
const userToSend = {...insertedUser.toObject(),};
delete userToSend.password;
res.status(201).json({sucess:'register',data:userToSend})
}



const login = async(req , res, next) =>{
  

  const credentials = req.body;
  if (!(credentials?.email && credentials?.password)) {
      const httpError = createHttpError('Bad request', 400);
      next(httpError);
      return;
  }
  const { email, password } = credentials;

  const user = await getBooksById(email);

  await checkPassword(user, password);
  const claims = {
      id: user._id,
      name: user.name,
      email: user.email,
      roles:user.roles,
      course:user.course
  };

  //generating token JWT_SECRET
  
  jwt.sign(claims, process.env.JWT_SECRET
    , function (error, token) {
      // some problem in generating JWT
      if (error) {
          const httpError = createHttpError('Internal Server Error', 500);
          next(httpError);
      }
     
      
      res.status(201).json({
          status: 'success',
          data: {
              name: user.name,
              email: user.email, // useful for frontend app
              // token: token
              token,
              _id:user._id,
              roles:user.roles,
              course:user.course
          },
      });
  });
  
  }

  const addBooks = async(req , res, next) =>{
         const details= req.body;
         const email=req.params.email;
        const updatedData=await addBooksSvc(details,email)
        res.status(201).json({sucess:'certificate Updated',details:updatedData})
      
  }
  
  const getAllBooks = async(req , res, next) =>{
     const allUser=await getAllDetailsSvc()
    res.status(201).json({sucess:'getAllDetails',details:allUser})
    
};
  
  
  
  const getBooks = async(req , res, next) =>{
    const userId = req.params.id;
const userDetail = await getBooksSvc(userId);
    res.status(201).json({sucess:'getCertificate',details:userDetail})
    
  }
  

  const deleteBooks = async(req , res, next) =>{
    const userId = req.params.id;
const userDetail = await deleteBooksSvc(userId);
    res.status(201).json({sucess:'deleteCertificate',details:userDetail})
  }

module.exports= {register,login,getAllBooks,getBooks,deleteBooks,addBooks};

