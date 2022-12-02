import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <section className='logo'>NOTEBOOK</section>
            <ul className='nav-links'>
                <li className='nav-item'><Link to='/register'>Register</Link></li>
                <li className='nav-ltem'><a href='/login'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar