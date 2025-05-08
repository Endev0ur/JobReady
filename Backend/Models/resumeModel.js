const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

  /* userId for prefilling */
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
 
  /* Personal Info */
  userDetails:{
    name:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
    },
    phoneNo:{
      type:Number,
      required:true,
    },
    linkedIn:{
      type:String,
      required:true,
    },
    github:{
      type:String,
      required:true,
    }
  },

  /* Education section model */
  education:{
    collegeName:{
      type:String,
    },
    city:{
      type:String,
    },
    course:{
      type:String,
    },
    branch:{
      type:String,
    },
    backlogs:{
      type:Number,
    },
    currentSemGPA:{
      type:Number,
    },
    overallGPA:{
      type:Number,
    },
    startDate:{
      type:Date,
    },
    endDate:{
      type:Date,
    }
  },

  /* Project Model */
  project:[{
    projectName : {
      type:String,
      required:true,
    },
    projectDescription:{
      type:String,
      required:true,
    },
    techStack:{
      type:[String],
      required:true,
    },
    links:{
      type:[String],
      required:true,
    },
    briefPoints:{
      type:[String], 
      required:true,
    }
  }],

  /* Experience */
  experience:[{
    companyName:{
      type:String,
    },
    role:{
      type:String,
    },
    joiningDate:{
      type:Date,
    },
    leavingDate:{
      type:Date,
    },
    briefPoints:{
      type:[String],
    }
  }],

  /* Achievements */
  achievements:{
    type:[String],
  },

  /* Skills */
  skills:{
    type:[String],
  },

});

module.exports = mongoose.model("Resume" , resumeSchema);