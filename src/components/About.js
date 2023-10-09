import React from 'react';
import "./css/About.css";
import nikhil from "../assets/images/nikhil.webp";
import narendra from "../assets/images/narendra.webp";
import kushal from "../assets/images/kushal.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <section className='about' id="top">
        <h1 className="section-heading">About Us</h1>
        <div class="blockquote-wrapper">
          <div class="blockquote">
            <h1> A good education is the  <span className="diff">foundation</span> for a better <span className="diff"> future.</span></h1>
          </div>
        </div>
        <p className="about-para">4U academy is an educational organisation which ensures a complete solution for placement preparations by providing the best learning experience. Our mission is to strengthen our students in all technical aspects. </p>
        <p className="about-para">Our academy strives to prepare students for getting placed in good companies for appreciable packages. We offer technical courses which are required to face placement interviews. We guide and help students to choose their career path.  We pay individual attention to each and every student and follow up their learning rate, performance etc.</p>
        <p className="about-para">Our academy includes many salient features such as, individual attention, live video classes, doubts clarification sessions, recorded videos of all live classes, assignments will be given after every class to evaluate the level of performance of students. We provide the best tutors and instructors who are experts and passionate about particular technical skills. We carry out mock interviews to our students after the completion of course to analyse their ability to attend placement interviews. </p>
        <p className="about-para">We also provide an additional benefit to our students that we create an opportunity to connect and interact with the individuals who are placed in good companies for good packages to clarify their additional placement related queries.</p>
        <h1 className="section-heading">Our Team</h1>
        <div className="team-cards">
          <figure class="snip1515">
            <div class="profile-image"><img src={narendra} alt="nikhil" /></div>
            <figcaption>
              <h3>Narendra Kajla</h3>
              <h4>Founder & Instructor</h4>
              <div class="icons">
                <a target="__blank" href="https://www.linkedin.com/in/narendrakajla77/"> <FontAwesomeIcon className='linkedin' icon={faLinkedin}/> </a>
              </div>
            </figcaption>
          </figure>
          <figure class="snip1515">
            <div class="profile-image"><img src={kushal} alt="nikhil" /></div>
            <figcaption>
              <h3>Kushal T H</h3>
              <h4>Member</h4>
              <div class="icons">
                <a target="__blank" href="https://www.linkedin.com/in/kushal-t-h-03349416b/"> <FontAwesomeIcon className='linkedin' icon={faLinkedin}/> </a>
              </div>
            </figcaption>
          </figure>
        </div>
    </section>
  )
}
