import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        fetch('http://localhost:5000/login', {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'userRegister');
                if (data.status === 'ok') {
                    alert('login successfull');
                    window.location.href = './'
                } else {
                    alert('Invalid Email or Password');
                }
            });


    }
    return (
        <>
            <Navbar />
            <form className="login" onSubmit={handleSubmit}>
                <h1 className="login-title">Login</h1>
                <label for="email" className='login-text'> Email Address</label>
                <input type="email" id="email" value={email} placeholder="test@test.com" onChange={(e) => { setEmail(e.target.value) }} className="login-data" />
                <label for="password" className='login-text'>Password</label>
                <input type="password" id="password" value={password} placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} className="login-data" />
                <Link to="#"><p className='forgot-password'>Forgot Password?</p></Link>
                <button className="login-button">LOGIN</button>
            </form>
        </>
    )
}

export default Login