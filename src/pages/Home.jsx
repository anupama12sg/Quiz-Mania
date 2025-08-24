import React from 'react'
import homeLogo from '../assets/home_logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <img src={homeLogo} alt="home page logo" />
            <nav>
                    <ul><Link to="/">Home</Link></ul>
                    <ul><Link to="/teacher">Teacher</Link></ul>
                    <ul><Link to="/student">Student</Link></ul>
                    <ul><Link to= "/about">About Us</Link></ul>
            </nav>
            <h1>Quiz Mania: Testing you knowledge begins here!</h1>
            <h3>Finding difficulty in topics like Blockchain Data Structures. Your worry ends here. Practice quizzes and clear your concepts.</h3>
        </div>
    )
}

export default Home
