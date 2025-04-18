
import './App.css'
import { Routes , Route } from 'react-router'
import Auth from './Components/Auth'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Summarizer from './Components/Summarizer'
import ATScheck from './Components/ATScheck'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/summarizer' element={<Summarizer />}></Route>
        <Route path='/atscheck' element={<ATScheck/>}></Route>
      </Routes>
    </>
  )
}

export default App
