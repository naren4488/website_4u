import React from 'react'
import "./css/Footer.css";
import logo from "../assets/images/logo_white.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCopyright, faRocket} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
import {HashLink} from "react-router-hash-link";

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer">
                <div className="fcontainer">
                    <div className="branding">
                        <img src={logo} alt="logo" />
                        <h2>4U Academy</h2>
                    </div>
                    <p className='tagline'>
                        A Complete Solution To Placement Preparation <FontAwesomeIcon icon={faRocket} /> <FontAwesomeIcon icon={faRocket}/>
                    </p>
                </div>
                <div className="fcontainer">
                    <h3 className='footer-conatainer-heading'>Useful Links</h3>
                    <HashLink className='link-name' to='/about#top'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>About Us</HashLink>
                    <HashLink className='link-name' to='/#course'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Courses</HashLink>
                    <HashLink className='link-name' to='/termsofuse#top'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Terms of Use</HashLink>
                    <HashLink className='link-name' to='/privacypolicy#top'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>Privacy Policy</HashLink>
                </div>
                <div className="fcontainer">
                    <h3 className='footer-conatainer-heading'>Get in Touch</h3>
                    <a className='link-name' href='mailto:4uacademy22@gmail.com'><FontAwesomeIcon icon={faArrowRight} className="arrow"/>4uacademy22@gmail.com</a>
                </div>
                <div className="fcontainer">
                    <h3 className='footer-conatainer-heading'>Follow us on</h3>
                    <a className='link-name' target="__blank" href=' https://instagram.com/academy_4u?igshid=YmMyMTA2M2Y='> <FontAwesomeIcon icon={faInstagram} className="brands"/>Instagram</a>
                    <a className='link-name' target="__blank"  href='https://t.me/ForUAcademy'> <FontAwesomeIcon icon={faTelegram} className="brands"/>Telegram</a>
                    <a className='link-name' target="__blank"  href='https://www.youtube.com/channel/UCprP0QTP_Ado32BUpeVrFcA'> <FontAwesomeIcon icon={faYoutube} className="brands"/>Youtube</a>
                </div>
            </div>
            <div className="copyright"> Copyright <FontAwesomeIcon icon={faCopyright}/> 2022 4U Academy, All Rights Reserved.</div>
        </footer>   
    )
}
