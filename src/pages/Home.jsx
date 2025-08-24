import React from 'react'
import homeLogo from '../assets/home_logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <img src={homeLogo} alt="home page logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/teacher">Teacher</Link></li>
                    <li><Link to="/student">Student</Link></li>
                    <li><Link to= "/about">About Us</Link></li>
                </ul>
            </nav>
            <h1>Quiz Mania: Testing you knowledge begins here!</h1>
            <h3>Finding difficulty in topics like Blockchain Data Structures. Your worry ends here. Practice quizzes and clear your concepts.</h3>
        </div>
    )
}

export default Home
