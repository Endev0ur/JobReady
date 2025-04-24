const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// this is dotenv
const dotenv = require('dotenv');
dotenv.config();

// this is for database connection
require('./Models/dbConnection');

const authRouter = require("./Routes/authRouter");

app.use(express.json());
app.use(cookieParser());
app.use("/auth" , authRouter);

app.get("/" , (req , res)=>{
  res.send("server is running");
})

app.listen(3000 , ()=>{
  console.log("Server is running on Port 3000");
});