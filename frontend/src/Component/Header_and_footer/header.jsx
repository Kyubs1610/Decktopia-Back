import './header.css';
import React from 'react';
import logo from '../../Asset/logo/logoB-removebg-preview.png'

export default function Header() {

    return (
        <div> 
            <nav>
                <img src={logo} alt="logo" className="logonav"/>

                <ul className="menu">
                    <li><a href="/pack">Buy</a></li>
                    <li><a href="/collection">Collection</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </div>
    )
}