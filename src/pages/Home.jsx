import React from 'react'
import homeLogo from '../assets/home_logo.png'

const Home = () => {
    return (
        <div>
            <img src={homeLogo} alt="home page logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Teacher</li>
                    <li>Student</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <h1>Quiz Mania: Testing you knowledge begins here!</h1>
            <h3>Finding difficulty in topics like Blockchain Data Structures. Your worry ends here. Practice quizzes and clear your concepts./</h3>
        </div>
    )
}

export default Home
