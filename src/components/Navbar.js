import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <section className='logo'>NOTEBOOK</section>
            <ul className='nav-links'>
                <li className='nav-item'><a href='/register'>Register</a></li>
                <li className='nav-ltem'><a href='/login'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar