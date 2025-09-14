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

            <main className='flex-1 p-12 flex flex-col items-center justify-center ml-64'>
                <img src={student} alt="student logo" className='w-80 mb-8 rounded-xl shadow-lg' />
                <h2 className='text-3xl font-bold mb-4 text-center'>Student</h2>
                <ul className='list-disc list-inside text-lg text-gray-700 leading-relaxed mb-8 mt-2'>
                    <p>Students can do the following:</p>
                    <li> 
                        <span className='font-medium'>Select a topic & attempt the quiz</span></li>
                    <li>
                        <span className='font-medium'>Scores to be stored on- chain which can be accessed by the students</span></li>
                </ul>

            </main>
        </div>
    )
}

export default Student
