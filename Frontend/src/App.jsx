
import './App.css'
import { Routes , Route ,Navigate} from 'react-router'
import { ToastContainer } from 'react-toastify'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Summarizer from './Components/Summarizer'
import ATScheck from './Components/ATScheck'
import GenerateResumeForm from './Components/GenerateResumeForm'
import ResumeTemplate from './Components/ResumeTemplate'
import Signup from './Components/Signup'
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/signup" element= {<Signup/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
          }></Route>
        <Route path='/summarizer' element={
          <ProtectedRoute>
            <Summarizer/>
          </ProtectedRoute>
          }></Route>
        <Route path='/atscheck' element={
          <ProtectedRoute>
          <ATScheck />
        </ProtectedRoute>
          }></Route>
        <Route path="/generate" element={
          <ProtectedRoute>
            <GenerateResumeForm />
          </ProtectedRoute>
          }></Route>
        <Route path="/resume" element={<ResumeTemplate />}></Route>
      </Routes>
      <ToastContainer 
          position="top-right"
          autoClose={3000}
          theme="colored"
        />
    </>
  )
}

export default App
