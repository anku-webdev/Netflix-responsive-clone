import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Pages/Home/Home.jsx'
import Login from './Components/Pages/Login/Login.jsx'
import Player from './Components/Pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './Filebase.js'
import { ToastContainer, toast } from 'react-toastify';
function App() {

  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('logedd')
        navigate('/')
      } else {
        console.log('Logged Out')
        navigate('/login')
      }
    })
  }, [])
  return (
    <>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </>
  )
}

export default App