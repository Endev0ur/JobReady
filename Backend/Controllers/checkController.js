

const isLoggedIn = async (req , res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ loggedIn: false });
  }
  else{
    return res.json({loggedIn : true})
  }
}


module.exports = {isLoggedIn};