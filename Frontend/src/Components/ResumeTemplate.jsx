import React from 'react';
import { Page, Text, View, Document, StyleSheet , Link , PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { useEffect } from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding:5,
    fontFamily:"Times-Roman",
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1
  },
  header:{
    alignItems:"center"
  },
  pName:{
    fontSize:"22",
    fontFamily:"Times-Roman",
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  extras:{
    fontSize:"12",
  },
  projects:{
    fontSize:16,
    fontWeight:"bold",
    alignItems:"flex-start"
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 3,
    width: '100%',
  },
  projectName:{
    fontSize:13,
    fontWeight:"bold",
    flexDirection:"row"
  },
  links:{
    fontSize:12,
  },
  techStack:{
    fontSize:12,
    marginBottom:3
  },
  description:{
    fontSize:15,
    fontWeight:"bold",
    marginLeft:5,
  },
  bulletPoints:{
    fontSize:14,
    marginLeft:10,
  },
  experiences:{
    fontSize:15,
    fontWeight:"bold",
    alignItems:"flex-start"
  },
  heading:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'lightblue',
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  
  date: {
    fontSize: 14,
    color: '#666',
  },
  role:{
    fontSize:"13"
  },
  achievementsPoints :{
    fontSize:15,
    marginLeft:10,
  },
  allSkills : {
    flexDirection:"row",
    flexWrap:"wrap",
    fontSize:"13",
    marginLeft:10,
  },
  Cdetails : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom:10,
  },
  degree : {
    fontSize : 14
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
    fontWeight:"bold"
  },
  listItem: {
    width: '20%', 
    marginBottom: 3,
    fontSize: 12,
  },

});

/* Dummy Data */

// const data = JSON.parse(localStorage.getItem("message"));

// console.log("Hello ji : " , data);


// const projects = data.highlights.projects;

// const Experience = data.highlights.experience;
// const achievements = data.highlights.achievements;
// const skills = data.skills;
// const education = data.education;

// console.log(data);

// const projects = [
//   {
//     projectName: "Job Ready",
//     techStack: ["React", "Node.js", 'MongoDB', 'Tailwind CSS', 'Gemini API'],
//     description: "An AI-powered resume analyzer and generator tailored for job descriptions.",
//     briefPoints: [
//       "Developed AI-powered web application designed to create ATS-friendly resumes using NLP techniques.",
//       "Implemented algorithms to ensure resume compatibility with Applicant Tracking Systems (ATS).",
//       "Utilized AI models to generate resumes tailored to specific job descriptions.",
//       "Integrated Gemini API to improve overall system responsiveness and functionality."
//     ],
//     github:"github",
//     linkedin:"linkedin"
//   },
//   {
//     projectName: "E-Commerce Platform",
//     techStack: ["React", "Node.js", 'MongoDB', 'Tailwind CSS', 'Gemini API'],
//     description: "A full-stack e-commerce application for seamless online shopping.",
//     briefPoints: [
//             "Developed AI-powered web application designed to create ATS-friendly resumes using NLP techniques.",
//             "Implemented algorithms to ensure resume compatibility with Applicant Tracking Systems (ATS).",
//             "Utilized AI models to generate resumes tailored to specific job descriptions.",
//             "Integrated Gemini API to improve overall system responsiveness and functionality."
//           ],
//     github:"github",
//     linkedin:"linkedin"
//   }
// ];

// const Experience = [
//   {
//     companyName: "Google",
//     role: "SDE-1",
//     joiningDate: "2004-12-08T18:30:00.000Z",
//     leavingDate: "2004-12-08T18:30:00.000Z",
//     location:"New Delhi , India",
//     briefPoints: [
//       "The application uses algorithms to compare user resumes against specific job descriptions, generating a score based on ATS compatibility. It ensures that the resume passes Applicant Tracking Systems (ATS), which is crucial for job applications.",
//       "The system uses AI models to generate resumes by analyzing a user’s personal details and job descriptions. The AI can tailor each resume to increase the chances of passing ATS filters and improve job match efficiency.",
//       "The system extracts and highlights key points from job descriptions, helping users understand job requirements clearly. This feature saves time and effort for users in applying to jobs efficiently."
//     ],
//   }

// ];

// const achievements = [
//   // "AtCoder: Global Rank #3339 out of 537,000+ participants.",
//   // "ICPC: Global Rank #875 out of 47,000+ participants.",
//   // "Meta HackerCup: Ranked #7,000 out of 22,000+ globally.",
//   // "Leetcode under Top 25% (Max. Rating : 1623)",
//   // "Codechef Max. Rating : 1591",
//   // "Multiple Time under 500 on Codechef Div 3 Contest"
// ]

// const education = [
//     {
//       "Degree": "B.Tech",
//       "Overall GPA": "8.59",
//       "institution": "ADGIPS",
//       "startYear": "2022",
//       "endYear": "2026",
//       "branch": "IT"
//     }
// ]

// const skills = [
//   "HTML",
//   "CSS",
//   "Javascript",
//   "ReactJS",
//   "MongoDB",
//   "NodeJS",
//   "ExpressJS",
//   "Payment Gateway",
//   "Git",
//   "Github",
//   "Gemini API",
//   "C++"
// ]



const MyDocument = ({data}) => {

  const projects = data.highlights.projects;
  const userDetails = data.userDetails;

  const Experience = data.highlights.experience;
  const achievements = data.highlights.achievements;
  const skills = data.skills;
  const education = data.education;

  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles.section , styles.header]}>
        <Text style={styles.pName}>{userDetails.name}</Text>
        <Text style={styles.extras}>{userDetails.email} || {userDetails.phone} || <Link src={userDetails.github}>Github</Link> || <Link src={userDetails.linkedin}>Linkedin</Link></Text>
      </View>


      {/* Experience */}
      {Experience.length!== 0 && <View style={{ break:'avoid'}}>
          <Text style={styles.experiences}>EXPERIENCE</Text>
          <View style={styles.horizontalLine} />
          <View>
          {Experience.map((exp , index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <View style={styles.heading}>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.date}>{exp.location}</Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.role}>{exp.position}</Text>
                <Text style={styles.date}>{exp.duration}</Text>
              </View>
              {exp.bullets.map((point, i) => (
                <Text key={i} style={styles.bulletPoints}>• {point}</Text>
              ))}
            </View>
          ))}
          </View>
      </View>}
      
      {/* Projects */}
      {projects.length!==0 && <View style={{break:'avoid'}}>
          <Text style={styles.projects}>PROJECTS</Text>
          <View style={styles.horizontalLine} />
          <View>
          {projects.map((project, index) => (
            <View key={index} style={{ marginBottom:5 }}>
              <View style={styles.heading}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.links}><Link><Text>Github</Text></Link> | <Link><Text>Github</Text></Link></Text>
              </View>
              <Text style={styles.techStack}>({project.techStack.map(tech => tech.trim()).join(' , ')})</Text>
              <Text style={styles.description}>{project.description}</Text>
              {project.features.map((point, i) => (
                <Text key={i} style={styles.bulletPoints}>• {point}</Text>
              ))}
            </View>
          ))}
          </View>
      </View>}

      {/* Achievements */}
      {achievements.length!==0 && <View style={{marginBottom:5 , break:'avoid'}}>
          <Text style={styles.projects}>ACHIEVEMENTS</Text>
          <View style={styles.horizontalLine} />
          <View>
            {achievements.map((point, i) => (
              <Text key={i} style={styles.achievementsPoints}>• {point}</Text>
            ))}
        </View>
        </View>
      }

      {/* Education */}
      {education.length!==0 && <View style={{ break:'avoid'}}>
        <Text style={styles.projects}>EDUCATION</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.heading}>
          <Text style={styles.projectName}>{education[0]["institution"]}</Text>
          <Text style={styles.links}>{education[0]["startYear"]}-{education[0]["endYear"]}</Text>
        </View>
        <View style={styles.Cdetails}>
          <Text style={styles.degree}>{education[0]["Degree"]} ({education[0].branch})</Text>
          <Text style={styles.links}>Cumulative GPA : {education[0]["Overall GPA"]}</Text>
        </View>
        </View>
      }


      {/*  */}
      {skills.length!==0 && <View style={{ break:'avoid'}}>
        <Text style={styles.projects}>SKILLS</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.listContainer}>
          {skills.map((skill, idx) => (
            <Text key={idx} style={styles.listItem}>• {skill}</Text>
          ))}
        </View>
        </View>
      }
      
    </Page>
  </Document>
  )
};

const ResumeTemplate = () => {

  console.log(localStorage.getItem("message"));
  const data = JSON.parse(localStorage.getItem("message") || "{}");

  useEffect(()=>{
    console.log("data changed so page refresh")
    console.log(data);
  } ,[data])

  
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const fileNamez = `${data.userDetails.name}_${hours}${minutes}${seconds}.pdf`;

  return (
    <div className="h-screen w-full">
    <div className="flex justify-end p-2 bg-zinc-800">
      <PDFDownloadLink
        document={<MyDocument data={data} />}
        fileName={fileNamez}
      >
        {({ loading }) =>
          loading ? 'Loading...' : <button className="px-4 py-2 bg-blue-500 text-white rounded">Download</button>
        }
      </PDFDownloadLink>
    </div>
    <PDFViewer width="100%" height="95%">
      <MyDocument data={data} />
    </PDFViewer>
  </div>
  )
}

export default ResumeTemplate