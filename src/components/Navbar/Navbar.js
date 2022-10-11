import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='header'>
            <div className="title">
                <img className='logo-img' src="https://png.pngtree.com/png-vector/20210502/ourlarge/pngtree-quiz-png-transparent-background-png-image_3257718.jpg" alt="" />
                <h2 className='logo-title'>Test Your Knowledge</h2>
            </div>
            <nav className='nav-items'>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
            </nav>
    </div>
    );
};

export default Navbar;