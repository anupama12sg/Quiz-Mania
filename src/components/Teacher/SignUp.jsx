import React from 'react'
import mail_logo from '../../assets/mail_logo.webp'
import password from '../../assets/password.png'
import person from '../../assets/person.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <>
            <ul><Link to={"/teacher"}>Teacher</Link></ul>
            <ul><Link to={"/addquestion"}>Add Question</Link></ul>
            <form>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Enter your Email ID' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>

        </>
    )
}

export default SignUp
