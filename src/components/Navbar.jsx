import React from 'react';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h2><span id='logo'>Aman's </span>Blog</h2>
            </div>
            <div className="list">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;