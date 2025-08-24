import React from 'react'
import topics from "../assets/topics.png"
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
      <img src={topics} alt="About us logo" />
      <nav>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/teacher">Teacher</Link></ul>
        <ul><Link to="/student">Student</Link></ul>
      </nav>
    </div>
  )
}

export default AboutUs
