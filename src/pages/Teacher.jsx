import React from 'react'
import teacher from '../assets/teacher.png'
import { Link } from 'react-router-dom'

const Teacher = () => {
    return (
        <div className='flex min-h-screen text-gray-900'>

            {/*Sidebar*/}
            <aside className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col p-6'>
                <h2 className='text-xl font-bold mb-6'>Quiz Mania</h2>
                <nav className='flex flex-col space-y-4'>
                    <ul><Link to="/" className='hover:text-blue-600 font-medium'>Home</Link></ul>
                    <ul><Link to="/teacher/signup" className='hover:text-blue-600 font-medium'>Sign Up/ Login</Link></ul>
                    <ul><Link to="/about" className='hover:text-blue-600 font-medium'>About Us</Link></ul>
                </nav>
            </aside>

            {/*Main Content*/}
            <main className='flex-1 p-12 flex flex-col items-center justify-center ml-64'>
                <img src={teacher} alt="teacher logo" className='w-80 mb-8 rounded-xl shadow-lg' />
                <h2 className='text-3xl font-bold mb-4 text-center'>Teacher</h2>
                <p className='text-lg text-gray-700 leading-relaxed text-justify mb-8'>
                    Teacher's can add a topic & add Q&A for the same after they login/signup.
                </p>
            </main>
        </div>
    )
}

export default Teacher
