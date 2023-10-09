import React from 'react'
import "./css/Navbar.css";
import logo from "../assets/images/logo-removebg.webp";
import { NavHashLink, HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <header className='header'>
        <div className="branding">
            <img src={logo} alt="logo" srcSet="" />
            <HashLink className='brand' to="/#hero">4U Academy</HashLink>
        </div>
        <div className="sections">
          <NavHashLink to="/#hero" smooth activeStyle={{ color: 'orange' }} className='section-name'>Home</NavHashLink>
          <NavHashLink to="/#course" smooth activeStyle={{ color: 'orange' }} className='section-name'>Courses</NavHashLink>
          <NavHashLink to="/#testimonial" smooth activeStyle={{ color: 'orange' }} className='section-name'>Testimonials</NavHashLink>
          <NavHashLink to="/#blog" smooth activeStyle={{ color: 'orange' }} className='section-name'>Blog</NavHashLink>
          <HashLink className='section-name' to='/about#top'>About</HashLink>
        </div>
    </header>
  )
}
