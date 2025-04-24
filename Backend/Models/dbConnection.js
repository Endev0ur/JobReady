const mongoose = require('mongoose');

//mongoose.connect(here connection string will come);
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
  console.log("Database Connected Successfully");
})
.catch(()=>{
  console.log("Error in Connection")
})