const User = require("../Models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req , res) => {
  try{
    // console.log("helloworld");
    const { name , email , password } = req.body;

    /* if any field are missing */
    if(!name || !email || !password){
      return res.status(401).json({
        success : false,
        message : "All Fields are Mandatory!"
      })
    }
    else{ 
      /* find if user is alerady present */
      const user = await User.findOne({email});
      /* If user is already present */
      if(user){
        return res.status(401).json({
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

/* Login functionality */
const login = async (req , res) => {
  try{

    /* Destructing */
    const {email , password} = req.body;

    /* if any fields are missing */
    if(!email || !password){
      return res.status(401).json({
        success : false,
        message : "All Fields are Mandatory!"
      })
    }
    /* check if email is exist or not */
    const user = await User.findOne({email});
    /* No user present on this email */
    if(!user){
      return res.status(401).json({
        success : false,
        message : "Email or Password not exist"
      })
    }

    /* if user exist with this email */
    /* compararison of password */
    const userPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(password , userPassword);

    if(!isPasswordMatch){
      return res.status(401).json({
        success : false,
        message : "Email or Password is Incorrect"
      })
    }

    /* jwt token creation when out email and password match */
    const token = jwt.sign({id:user._id} , process.env.SECRET_TOKEN , {expiresIn : '1h'});

    /* stores jwt in cookie */
    res.cookie('token' , token , {
      httpOnly:true,
      secure:true,
      sameSite:"None",
      path:'/',
      maxAge:60*60*1000,
    })


    return res.status(201).json({
      success : true,
      message : "Login Successfully ! ",
    })


  }catch(error){
    res.status(500).json({
      success : false,
      message : "Login error",
      Error : error,
    })
  }
}

/* Logout functionality */ 
const logout = (req ,res) => {

  try{
    res.clearCookie('token', {
      httpOnly: true,
      secure:true, 
      path:'/',      
      sameSite: 'None',
    });
  
    res.status(201).json({
      success : true,
      message : "Logged out successfully",
    });
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"No token is there",
    })
  }
  
}

const getUserDetails = async (req , res) => {
  try{
    const token = req.cookies.token;
    const decoded = jwt.verify(token , process.env.SECRET_TOKEN);
    const userId = decoded.id;

    const userDetails = await User.findOne({_id : userId});

    if(userDetails){
      return res.status(201).json({
        success:true,
        message:userDetails,
      })
    }
    console.log("Not user");
  }
  catch(err){
    response.status(500).json({
      message:"Server Error in finding user Details",
      success : false,
    })
  }
}




module.exports = {signup , login , logout , getUserDetails};