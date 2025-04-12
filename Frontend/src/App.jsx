
import './App.css'
import { Routes , Route } from 'react-router'
import Auth from './Components/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />}></Route>
      </Routes>
    </>
  )
}

export default App
