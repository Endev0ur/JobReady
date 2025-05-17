import React from 'react';
import { Page, Text, View, Document, StyleSheet , Link } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding:10,
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
    fontSize:"25",
    fontFamily:"Times-Roman",
    fontWeight:"bold"
  },
  extras:{
    fontSize:"12",
  },
  projectContainer:{

  },
  projects:{
    fontSize:16,
    fontWeight:"bold",
    alignItems:"flex-start"
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginVertical: 10,
    width: '100%',
  },
  projectName:{
    fontSize:15,
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
    fontSize:15,
    marginLeft:10,
  },
  experiences:{
    fontSize:16,
    fontWeight:"bold",
    alignItems:"flex-start"
  }

});

/* Dummy Data */

const projects = [
  {
    projectName: "Job Ready",
    techStack: ["React", "Node.js", 'MongoDB', 'Tailwind CSS', 'Gemini API'],
    description: "An AI-powered resume analyzer and generator tailored for job descriptions.",
    briefPoints: [
      "Developed AI-powered web application designed to create ATS-friendly resumes using NLP techniques.",
      "Implemented algorithms to ensure resume compatibility with Applicant Tracking Systems (ATS).",
      "Utilized AI models to generate resumes tailored to specific job descriptions.",
      "Integrated Gemini API to improve overall system responsiveness and functionality."
    ],
    github:"github",
    linkedin:"linkedin"
  },
  {
    projectName: "E-Commerce Platform",
    techStack: ["React", "Node.js", 'MongoDB', 'Tailwind CSS', 'Gemini API'],
    description: "A full-stack e-commerce application for seamless online shopping.",
    briefPoints: [
            "Developed AI-powered web application designed to create ATS-friendly resumes using NLP techniques.",
            "Implemented algorithms to ensure resume compatibility with Applicant Tracking Systems (ATS).",
            "Utilized AI models to generate resumes tailored to specific job descriptions.",
            "Integrated Gemini API to improve overall system responsiveness and functionality."
          ],
    github:"github",
    linkedin:"linkedin"
  }
];

const Experience = [];




const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles.section , styles.header]}>
        <Text style={styles.pName}>SHUBHAM RAWAT</Text>
        <Text style={styles.extras}>New Delhi , India || (+91)-7982083324 || <Link src="https://google.com">Linkedin</Link> || <Link src="https://google.com">Linkedin</Link></Text>
      </View>


      {Experience.length=== 0 && <View style={styles.experienceContainer}>
          <Text style={styles.experiences}>EXPERIENCE</Text>
          <View style={styles.horizontalLine} />
          <View>
          {projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.projectName}>{project.projectName} : <Text style={styles.links}><Link>Github</Link> | <Link>Deployed</Link></Text></Text>
              <Text style={styles.techStack}>({project.techStack.map(tech => tech.trim()).join(' , ')})</Text>
              <Text style={styles.description}>{project.description}</Text>
              {project.briefPoints.map((point, i) => (
                <Text key={i} style={styles.bulletPoints}>• {point}</Text>
              ))}
            </View>
          ))}
          </View>
      </View>}

      {projects.length!==0 && <View style={styles.projectContainer}>
          <Text style={styles.projects}>PROJECTS</Text>
          <View style={styles.horizontalLine} />
          <View>
          {projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.projectName}>{project.projectName} : <Text style={styles.links}><Link>Github</Link> | <Link>Deployed</Link></Text></Text>
              <Text style={styles.techStack}>({project.techStack.map(tech => tech.trim()).join(' , ')})</Text>
              <Text style={styles.description}>{project.description}</Text>
              {project.briefPoints.map((point, i) => (
                <Text key={i} style={styles.bulletPoints}>• {point}</Text>
              ))}
            </View>
          ))}
          </View>
      </View>}

      
    </Page>
  </Document>
);

const ResumeTemplate = () => {

  return (
    <div className="h-screen w-full">
      <PDFViewer width="100%" height="100%">
        <MyDocument />
      </PDFViewer>
    </div>
  )
}

export default ResumeTemplate