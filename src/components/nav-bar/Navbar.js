import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className='logo'>Asciifi</Link>
            <a className='git-link' href="https://github.com/Abhishek-More/asciifi/" target="_blank" rel='noreferrer'>View on GitHub</a>
        </nav>
    );
}
