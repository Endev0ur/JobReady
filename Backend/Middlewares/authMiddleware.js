const jwt = require('jsonwebtoken');

/* a function is created here which is a validation function which checks whether the user is loggedin or not */

const protect = ( req , res ,next )=> {

  // step1 : get the token from cookies
  const token = req.cookies.token;
  /* check for if the token is present or not */
  if(!token){
    return res.status(401).json({
      success : false,
      message : "No token is there!"
    })
  }

  /* this is for if token is found */

  try{

    // let's verify the token
    const user = jwt.verify(token , process.env.SECRET_TOKEN);
    req.user = user;

    next();

  }
  catch(error){
    return res.status(401).json({
      success : false,
      message : "Invalid or expired Token",
    })
  }

}

module.exports = protect;