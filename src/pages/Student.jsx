import React from 'react'
import student from '../assets/student.png'
import { Link } from 'react-router-dom'

const Student = () => {
    return (
        <div>
            <img src={student} alt="student logo" />
            <nav>
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to= "/about">About Us</Link></ul>
            </nav>

        </div>
    )
}

export default Student
