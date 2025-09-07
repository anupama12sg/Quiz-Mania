import React from 'react'
import student from '../assets/student.png'
import { Link } from 'react-router-dom'

const Student = () => {
    return (
        <div className='flex min-h-screen text-gray-900'>

            <aside className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col p-6'>
               <h2 className='text-xl font-bold mb-6'>Quiz Mania</h2>
                <nav className='flex flex-col space-y-4'>
                    <ul><Link to="/" className='hover:text-blue-600 font-medium'>Home</Link></ul>
                    <ul><Link to="/about" className='hover:text-blue-600 font-medium'>About Us</Link></ul>
                </nav>
            </aside>

            <img src={student} alt="student logo" />

        </div>
    )
}

export default Student
