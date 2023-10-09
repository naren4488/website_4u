import React from 'react'
import "./css/Hero.css";
import boy from "../assets/images/confused.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';


export default function Hero() {
  return (
    <section className='hero' id="hero">
        <div className="hero-container">
            <div className="hero-content">
                <h2 className="hero-heading"> Placements Made Easy!!! </h2>
                <p className="hero-about"> <FontAwesomeIcon icon={faSquareCheck} className="check"/> Individual attention for each student. </p>
                <p className="hero-about"> <FontAwesomeIcon icon={faSquareCheck} className="check"/> Live video classes, doubts discussion and regular performance evaluation assignments. </p>
                <p className="hero-about"> <FontAwesomeIcon icon={faSquareCheck} className="check"/> Tutors are passionate experts in their particular technical field. </p>
                <p className="hero-about"> <FontAwesomeIcon icon={faSquareCheck} className="check"/> Mock interview & resume building. </p>
                <p className="hero-about"> <FontAwesomeIcon icon={faSquareCheck} className="check"/> Access to our 4U Academy network to connect and interact. </p>
                <a href="#course" class="btn btn--shimmer">Explore More </a>
            </div>
            <div className="hero-image">
                <img src={boy} alt="confused boy" />
            </div>
        </div>
        <div className="info-box">
                <HashLink to="/coursePage/java#top" className="info">Register for Java course</HashLink>
        </div>
    </section>
  )
}
