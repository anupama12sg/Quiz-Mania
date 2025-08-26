import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import Teacher from './pages/Teacher'
import AboutUs from './pages/AboutUs'
import SignUp from './components/Teacher/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/teacher/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App

