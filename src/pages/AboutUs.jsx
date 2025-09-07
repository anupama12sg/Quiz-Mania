import React from 'react'
import topics from "../assets/topics.png"
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='flex min-h-screen text-gray-900'>
      {/*Sidebar*/}
      <aside className='w-64 bg-gray-100 p-6 sppace-y-6 shadow-md'>
        <h2 className='text-xl font-bold mb-6'>Quiz Mania</h2>
        <nav className='flex flex-col space-y-4'>
          <ul><Link to="/" className='hover:text-blue-600 font-medium'>Home</Link></ul>
          <ul><Link to="/teacher" className='hover:text-blue-600 font-medium'>Teacher</Link></ul>
          <ul><Link to="/student" className='hover:text-blue-600 font-medium'>Student</Link></ul>
        </nav>
      </aside>

      {/*Main Content*/}
      <main>
        <img src={topics} alt="About us logo" />
        <h2>About Quiz Mania</h2>
        <p>
          <h3>Empowering Learning Through Interactive Quizzes</h3>
          Quiz Mania is a dedicated platform where teachers create engaging quizzes for students across cutting-edge technology topics. From blockchain fundamentals to data structures and C programming, we bridge the gap between theoretical knowledge and practical understanding.
        </p>
        <h3>What We Do?</h3>
        <p>
          Our platform enables educators to design comprehensive quizzes that challenge and inspire students in today's most relevant tech subjects. Whether you're mastering algorithms, exploring decentralized systems, or diving deep into programming concepts, Quiz Mania provides the tools for meaningful assessment and learning.</p>
        <h3>Our Vision</h3>
        <p>We're building the future of educational technology. Our roadmap includes:</p>
        <ul>
          <li>Blockchain Integration: Taking quizzes on-chain for transparent, verifiable learning credentials</li>
          <li>AI-Powered Learning: Integrating intelligent bots to enhance the quiz experience and provide personalized learning paths</li>
        </ul>

        <h3>Why Quiz Mania?</h3>
        <ul>
          <li>Teacher-Created Content: Quality quizzes designed by educators who understand student needs</li>
          <li>Tech-Focused: Specialized in emerging technologies and computer science fundamentals</li>
          <li>Innovation-Driven: Constantly evolving with new technologies to enhance learning</li>
        </ul>

        <p><i>Join us in revolutionizing how students learn and teachers teach in the digital age.</i></p>
      </main>
    </div >
  )
}

export default AboutUs
