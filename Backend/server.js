const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors')
/* m1 : importing multer */
const multer = require('multer');

// this is dotenv
const dotenv = require('dotenv');
dotenv.config();

// this is for database connection
require('./Models/dbConnection');

const authRouter = require("./Routes/authRouter");
const resumeRouter = require('./Routes/resumeRouter');
const profileRouter = require("./Routes/profileRouter");
const generateRouter = require("./Routes/generateRouter");
const protect = require('./Middlewares/authMiddleware');
const checkRouter = require("./Routes/checkRouter");

/* this is because we are using cookie in frontend and backend */
const corsOptions = {
  origin: `${process.env.VITE_FRONTEND_URL}`,
  credentials: true,   
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());
app.use(cookieParser());

/* m2 : creating a in-memory storage engine */
const storage = multer.memoryStorage();

/* m3 : initialize the multer */
const upload = multer({storage:storage});

app.use("/check" , checkRouter);

/* This is a route for user authentication */
app.use("/auth" , authRouter);


app.use("/resume" , protect , upload.single('resume') , resumeRouter);

app.use("/profile" , protect , profileRouter);

app.use("/generate" , protect , generateRouter);

app.get("/" , (req , res)=>{
  res.send("server is running");
})

app.listen(3000 , ()=>{
  console.log("Server is running on Port 3000");
});