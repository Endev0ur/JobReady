
# 💼 JobReady – AI Resume Analyzer & Job Matcher


JobReady is an AI-powered web application that helps job seekers enhance their resumes, analyze ATS (Applicant Tracking System) compatibility, and generate tailored resumes based on job descriptions. It uses modern web technologies and AI APIs to bridge the gap between candidates and recruiters.


## Live Demo

🌐 [View Live Project](https://jobrready.netlify.app/login)


## Features

- ✅  **Job Description Summarizer** – Extracts key requirements and keywords from any job description.
- ✅ **ATS Score Analyzer** – Evaluates resumes against specific job descriptions and provides an ATS-friendly score along with personalized, actionable feedback.
- ✅ **AI Resume Generator** – Creates customized, optimized & ATS-Friendly resumes based on user profile and job description.
- ✅ **User Authentication** – Sign up, login, and secure your data.
- ✅ **User Profile Management** – Store and reuse resume details like education, projects, skills, and experience.
- ✅ **Responsive UI** – Built with Tailwind CSS for a clean, mobile-friendly design.


## Tech Stack


| Category     | Technology           |
|--------------|----------------------|
| **Frontend** | HTML5 , CSS3 , ReactJs , Tailwind CSS|
| **Backend**  | Node.js, Express.js  |
| **Database** | MongoDB (Mongoose)   |
| **AI API**   | Google Gemini API |
| **Auth**     | JWT, bcrypt          |
| **Hosting**  | Nelify(Frontend) , Render(Backend) 




## 💼 About This Project

This project demonstrates my ability to build scalable, user-focused web applications using the MERN stack and AI integration. I handled the complete development lifecycle including:

- Full-stack architecture (React + Node + MongoDB)
- RESTful API design and data modeling
- AI prompt engineering for resume evaluation and generation
- Authentication, protected routes, and persistent user sessions
- UI/UX using Tailwind CSS and reusable components

---

## 🧠 How It Works – Feature-Wise Breakdown

---

### 📝 1. Job Description Summarizer

**What It Does:**  
Uses AI to extract essential Keywords & Keypoints from a given job description , which user can use in their resume.

**How It Works:**  
- User pastes a job description into the frontend form.
- The backend sends this text to Google Gemini API with a summarization prompt.
- AI returns structured keywords and keypoints.
- Frontend displays them in a clean UI.

**Purpose:**  
Helps users understand what the employer actually wants, making targeting easier.

---

### 📊 2. ATS Score Analyzer

**What It Does:**  
Analyzes the resume against the pasted job description and provides:
- ATS score (e.g., 76%)
- Category-wise score distribution
- Suggestion and improvments
- Final feedback (Weather you should apply for this job with this resume)

**How It Works:**  
- Resume and JD are submitted via the frontend.
- Backend sends both texts to the AI API with a prompt.
- AI returns a score, category-wise score , suggestion and improvements and final feedback.
- Frontend shows a visual breakdown.

**Purpose:**  
Lets users see how ATS-friendly their resume is for a specific job role.

---

### ⚙️ 3. AI Resume Generator

**What It Does:**  
Creates a new, job-targeted resume using:
- User profile (education, skills, experience)
- Job description keywords

**How It Works:**  
- User will provide details for the first time which will saved in database.
- Now every time user data will be fetched from database.
- User will paste the job description.
- Backend crafts an AI prompt using both.
- AI returns a structured resume with all key sections filled.
- Resume is displayed in the frontend using React components or `@react-pdf/renderer`.

**Purpose:**  
Empowers users to generate customized resumes without writing from scratch.Different resume for different job description.


---
---

## 👨‍💻 Author

**Shubham Rawat**

- 📧 Email: [devlpr.shubham@gmail.com](mailto:devlpr.shubham@gmail.com)
- 🔗 LinkedIn: [linkedin.com/in/shubhamrawat](https://www.linkedin.com/in/shubham-rawat-522662257/)
- 💻 GitHub: [github.com/Endev0ur](https://github.com/Endev0ur)


---
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shubhamrawatportfolio.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shubham-rawat-522662257/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Uniyal_Ji_)
