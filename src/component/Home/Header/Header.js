import React from 'react';
import './Header.css'
import {
    NavLink
} from "react-router-dom"

const Header = () => {
    return (
        <div className=" bg-secondary p-5 mb-5 ">
            <h1 className="text-white"> <span className="text-warning">Confidence</span> Coaching Center</h1>
            <br />
            <NavLink className="ms-3 text-warning " to="/home">Home</NavLink>
            <NavLink className="ms-3 text-warning" to="/about">About</NavLink>
            <NavLink className="ms-3 text-white" to="/OurService">Our Services</NavLink>

            <NavLink className="ms-3 text-white" to="/contact">Contact</NavLink>
        </div>

    );
};

export default Header;