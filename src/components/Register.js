import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        fetch('https://notebook-app-backend.onrender.com/register', {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'userRegister');
                if (data.status === 'ok') {
                    alert('Registration successfull');
                    window.location.href = './login'
                } else {
                    alert('Email has already been registered')
                }
            });

    }


    return (
        <>
            <Navbar />
            <form className="register" onSubmit={handleSubmit}>
                <h1 className="register-title">Register</h1>
                <label for="fullname" className='register-text'> Full Name</label>
                <input type="text" id="fullname" value={name} placeholder="Enter fullname" onChange={(e) => { setName(e.target.value) }} className="register-data" />
                <label for="email" className='register-text'> Email address</label>
                <input type="email" id="email" value={email} placeholder="test@test.com" onChange={(e) => { setEmail(e.target.value) }} className="register-data" />
                <label for="password" className='register-text'>Password</label>
                <input type="password" id="password" value={password} placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} className="register-data" />

                <button className="register-button">REGISTER</button>
            </form>

        </>
    )
}

export default Register