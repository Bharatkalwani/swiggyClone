import React from 'react'
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom'
 const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="about"> About</Link>
                    <Link to="contact">Contact</Link>
                    <Link to="cart">Cart</Link>
                    <button className='login-btn'>Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Header