
import './App.css'
import { Routes , Route } from 'react-router'
import Auth from './Components/Auth'
import Home from './Components/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
