const User = require("../Models/userModel");
const bcrypt = require('bcrypt');

const signup = async (req , res) => {
  try{
    console.log("helloworld");
    const { name , email , password } = req.body;

    /* if any field are missing */
    if(!name || !email || !password){
      return res.status(201).json({
        success : false,
        message : "All Fields are Mandatory!"
      })
    }
    else{ 
      /* find if user is alerady present */
      const user = await User.findOne({email});
      /* If user is already present */
      if(user){
        return res.status(201).json({
          success : false,
          message : "User is already Present",
        })
      }
      /* no user present with this email  */
      /* step1 : hash the password for security purpose */
      const newPassword = await bcrypt.hash(password , 10);
      const newUser = await User({name:name , email:email , password:newPassword});
      await newUser.save();

      return res.status(201).json({
        success : true,
        message:"Sign Up Successfully"
      })
    
    }
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      success : false,
      message:"Sign Up Error",
      Error : error,
    })
  }
}





module.exports = {signup};