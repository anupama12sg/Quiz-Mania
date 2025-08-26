import React from 'react'
import teacher from '../assets/teacher.png'
import { Link } from 'react-router-dom'

const Teacher = () => {
    return (
        <div>
            <img src={teacher} alt="teacher logo" />
            <nav>
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/teacher/signup">Sign Up/ Login</Link></ul>
                <ul><Link to="/about">About Us</Link></ul>
            </nav>

        </div>
    )
}

export default Teacher
