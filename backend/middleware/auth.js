import jwt from "jsonwebtoken";

const authMiddleware = async (req,res,next) =>{
      console.log("Request URL:", req.originalUrl);
    console.log("Headers:", req.headers);
    console.log("Token:", req.headers.token);

     const {token} = req.headers;
     if(!token){
      return res.json({success:false,message:"Not authorized login again"})
     }
     try {
      const token_decode = jwt.verify(token,process.env.JWT_SECRET);
      req.body.userId = token_decode.id;
      next();
     } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"});
      
     }
} 


export default authMiddleware;