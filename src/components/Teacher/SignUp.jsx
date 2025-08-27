import React from 'react'
import mail_logo from '../../assets/mail_logo.webp'
import password from '../../assets/password.png'
import person from '../../assets/person.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
        <ul><Link to={"/teacher"}>Teacher</Link></ul>
            <div className='signup-container'>
                <div className='header'>
                    <div className='text'>Sign Up</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={person} alt="" />
                        <input type="text" />
                    </div>
                    <div className='input'>
                        <img src={mail_logo} alt="" />
                        <input type="email" />
                    </div>
                    <div className='input'>
                        <img src={password} alt="" />
                        <input type="password" />
                    </div>
                </div>
                <div className="forgot-password">Lost password? <span>Click Here!</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>
            </div>
        </>
    )
}

export default SignUp
