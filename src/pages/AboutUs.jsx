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
      <main className='flex-1 p-12 flex flex-col  items-center justify-center max-w-4xl mx-auto '>
        <img src={topics} alt="About us logo" className='w-80 mb-8 rounded-xl shadow-lg' />
        <h2 className='text-3xl font-bold mb-4 text-center'>About Quiz Mania</h2>

        <h3 className='text-2xl font-semibold mb-2 text-center'>Empowering Learning Through Interactive Quizzes</h3>
        <p className='text-lg text-gray-700 leading-relaxed text-justify mb-8'>
          Quiz Mania is a dedicated platform where teachers create engaging quizzes for students across cutting-edge technology topics. From blockchain fundamentals to data structures and C programming, we bridge the gap between theoretical knowledge and practical understanding.
        </p>
        <h3 className='text-2xl font-semibold mb-2 text-center'>What We Do?</h3>
        <p className='text-lg text-gray-700 leading-relaxed text-justify mb-8'>
          Our platform enables educators to design comprehensive quizzes that challenge and inspire students in today's most relevant tech subjects. Whether you're mastering algorithms, exploring decentralized systems, or diving deep into programming concepts, Quiz Mania provides the tools for meaningful assessment and learning.</p>
        <h3 className='text-2xl font-semibold mb-2 text-center'>Our Vision</h3>
        <p className='text-lg text-gray-700 leading-relaxed text-justify mb-8'>We're building the future of educational technology. Our roadmap includes:</p>
        <ul className='list-disc list-inside text-lg text-gray-700 leading-relaxed mb-8 mt-2'>
          <li>
            <span className='font-medium'>Blockchain Integration:</span> Taking quizzes on-chain for transparent, verifiable learning credentials</li>
          <li>
            <span className='font-medium'>AI-Powered Learning:</span> Integrating intelligent bots to enhance the quiz experience and provide personalized learning paths</li>
        </ul>

        <h3 className='text-2xl font-semibold mb-2 text-center'>Why Quiz Mania?</h3>
        <ul className='list-disc list-inside text-lg text-gray-700 leading-relaxed mb-8'>
          <li><span className='font-medium'>Teacher-Created Content:</span> Quality quizzes designed by educators who understand student needs</li>
          <li><span className='font-medium'>Tech-Focused:</span> Specialized in emerging technologies and computer science fundamentals</li>
          <li><span className='font-medium'>Innovation-Driven:</span> Constantly evolving with new technologies to enhance learning</li>
        </ul>

        <p className='italic text-gray-600 text-center'>Join us in revolutionizing how students learn and teachers teach in the digital age.</p>
      </main>
    </div >
  )
}

export default AboutUs
