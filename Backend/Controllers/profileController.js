const Resume = require('../Models/resumeModel');
const jwt = require('jsonwebtoken');

const profileSave = async (req, res) => {
  const { userDetails , education , project , experience , achievements , skills} = req.body;
  
  /* Extract userId from Token */
  const token = req.cookies.token
  const decoded = jwt.verify(token , process.env.SECRET_TOKEN);
  const userId = decoded.id;
  console.log("id is : " , userId);

  /* this is for any required condition can't be empty */
  if(!userDetails?.name || !userDetails?.email || !userDetails?.phoneNo || !userDetails?.linkedIn || !userDetails?.github ||!project[0]?.projectName ||!project[0]?.projectDescription || !project[0]?.techStack?.length || !project[0]?.links || !project[0]?.briefPoints?.length || !project[1]?.projectName ||!project[1]?.projectDescription || !project[1]?.techStack?.length || !project[1]?.links || !project[1]?.briefPoints?.length ){
    return res.status(401).json({
      success : false,
      message : "userDetail Should be filled , exactly 2 projectDetails should be filled",
    })
  };

  try{

    console.log(req.body);
    const existingResume = await Resume.findOne({userId});

    /* user come again so update the resume */
    if(existingResume){
      await Resume.updateOne({userId} , req.body);
      return res.status(201).json({
        success : true,
        message:"Resume Details Updated Successfully",
      })
    }

    const newResume = new Resume({
      userId , userDetails , education , project , experience , achievements , skills
    });
    await newResume.save();
    res.status(201).json({
      success:true,
      message:"New Resume Detail Saved Successfully",
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message:"Error in profileController Catch Block",
    })
  }

};

module.exports = {profileSave};