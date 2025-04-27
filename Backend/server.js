const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')

// this is dotenv
const dotenv = require('dotenv');
dotenv.config();

// this is for database connection
require('./Models/dbConnection');

const authRouter = require("./Routes/authRouter");
const resumeRouter = require('./Routes/resumeRouter');
const protect = require('./Middlewares/authMiddleware')

/* this is because we are using cookie in frontend and backend */
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,   
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.text());
app.use(cookieParser());
app.use("/auth" , authRouter);
app.use("/resume" , protect , resumeRouter);

app.get("/" , (req , res)=>{
  res.send("server is running");
})

app.listen(3000 , ()=>{
  console.log("Server is running on Port 3000");
});