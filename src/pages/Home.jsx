import React from 'react'
import homeLogo from '../assets/home_logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex min-h-screen text-gray-900'>

            {/*Sidebar*/}
            <aside className='w-64 bg-gray-100 p-6 space-y-6 shadow-md'>
                <h2 className='text-xl font-bold mb-6'>Quiz Mania</h2>
                <nav className='flex flex-col space-y-4'>
                    <ul><Link to="/">Home</Link></ul>
                    <ul><Link to="/teacher">Teacher</Link></ul>
                    <ul><Link to="/student">Student</Link></ul>
                    <ul><Link to="/about">About Us</Link></ul>
                </nav>
            </aside>

            {/*Main Content*/}
            <main className='flex-1 p-12 flex flex-col items-center justify-center'>
                <img src={homeLogo} alt="home page logo" className='w-80 mb-8 rounded-xl shadow-lg'/>
                <h1 className='text-3xl font-bold mb-4 text-center'>Quiz Mania: Testing you knowledge begins here!</h1>
                <h3 className='text-lg text-gray-600 text-center max-w-2xl'>Finding difficulty in topics like Blockchain Data Structures. Your worry ends here. Practice quizzes and clear your concepts.</h3>
            </main>
        </div>
    )
}

export default Home
