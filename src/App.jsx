import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import Teacher from './pages/Teacher'
import AboutUs from './pages/AboutUs'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App

