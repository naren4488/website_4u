import React,{useState} from 'react'
import "../components/css/coursePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import courseFeatures from "../assets/images/featuresDsa.png";
import {HashLink} from "react-router-hash-link"

export default function CoursePageDSA() {
    const [toggleState, setToggleState] = useState(1);
    const [showStatus, setShowStatus] = useState("Show More")
    const [showStatus1, setShowStatus1] = useState("Show More")
    const [showMore, setShowMore] = useState(true)
    const [showMore1, setShowMore1] = useState(true)
    const toggleTab = (index)=>{
        setToggleState(index)
    }
    const toggleShow = ()=>{
        showMore?setShowStatus("Show Less"):setShowStatus("show More")
        setShowMore(!showMore)
        
    }
    const toggleShow1 = ()=>{
        showMore1?setShowStatus1("Show Less"):setShowStatus1("show More")
        setShowMore1(!showMore1)
        
    }
    return (
        <div id="top">
            <div className="coursepage_main-container">
                <div className="coursePage-banner-container">
                    <h2>Master Data Structures and Algorithms</h2>
                    {/* <FontAwesomeIcon className='coursePage-fontIcon' icon={faLessThan}  size="xs"/> */}
                </div>

                <div className="coursePage-course-overveiw-wrapper">

                    <div className="coursePage-overveiw-col1">

                        <div className="coursePage-bloc-tabs">
                            <button 
                            className={toggleState ===1 ? "coursePage-tabs coursePage-active-tabs":"coursePage-tabs"}
                            onClick={()=>toggleTab(1)}
                            >
                                Course Overveiw
                            </button>
                            <button 
                            onClick={()=>toggleTab(2)} 
                            className={toggleState ===2 ? "coursePage-tabs coursePage-active-tabs":"coursePage-tabs"}>
                                Course Curriculum
                            </button>
                            <button 
                            onClick={()=>toggleTab(3)}
                            className={toggleState ===3 ? "coursePage-tabs coursePage-active-tabs":"coursePage-tabs"}>
                                Class Structure
                            </button>
                            <button 
                            onClick={()=>toggleTab(4)}
                            className={toggleState ===4 ? "coursePage-tabs coursePage-active-tabs":"coursePage-tabs"}>
                                Course Features
                            </button>
                            {/* <button
                            onClick={()=>toggleTab(5)}
                            className={toggleState ===5 ? "coursePage-tabs coursePage-active-tabs":"coursePage-tabs"}>
                                Reveiws
                            </button> */}
                        </div>

                        <div className="coursePage-content-tabs">

                            <div className={toggleState===1?"coursePage-content coursepage-active-content":"coursePage-content"}>
                                <div className="coursePage-text-wrapper">
                                    <h3>Course Description</h3>
                                    <p>
                                    If you are worried about your placement preparation & thinking how to develop good problem solving skills & how to prepare data structures & algorithms then here you are at the right place as it is a wisely structured course on DSA for developing great problem solving skills and in depth understanding of topics and getting placement ready.
                                    It is built with great knowledge of expert seniors placed in super dream companies, & with their practical experience.
                                    This course offers you features of live class with assignments & doubt clearing sessions and mock interviews at the end of course.
                                    What are you waiting for?… Start now and enjoy the fun way of learning the much needed skill for your placements.
                                    </p>
                                    <div className="coursePage-what-youll-learn">
                                        <h3>What you'll learn?</h3>
                                        <ul>
                                            <li>
                                                Master problem solving skills.
                                            </li>
                                            <li>
                                                Complete DSA from scratch to pro level.
                                            </li>
                                            <li>
                                                Product based companies’ interview specific problems.
                                            </li>
                                            <li>
                                                How to solve coding questions easily and efficiently, how to make logics & how to convert these logics into programs.
                                            </li>
                                            <li>
                                                How to build a resume.  
                                            </li>
                                            <li>
                                                How to use coding platforms like GFG, leetcode, etc.
                                            </li>
                                            <li>
                                                How to give your best in interviews with the help of mock interviews.
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="coursePage-requirements">
                                        <h3>Any prerequisite or requirements</h3>
                                        <p>Java programming language.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState===2?"coursePage-content coursepage-active-content":"coursePage-content"}>
                                <div className="coursePage-teaxt-wrapper">
                                    <h3 className='phase-heading'>Phase-1</h3>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>01</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Introduction session on DSA & coding platforms like leetcode, gfg, etc.</p>
                                            <div className="section-description">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>02</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Arrays & maths-1</p>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>03</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Time complexity</p>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>04</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Bit manipulation</p>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>05</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>ArrayList</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>06</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Arrays & maths-2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>07</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Recursion</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>08</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Searching</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>09</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Sorting</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>10</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Matrix</p> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>11</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Strings</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>12</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Hashing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>13</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>LinkedList</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>14</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Stack</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>15</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Queue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>16</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Tree's</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>17</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>BST</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>18</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Heap</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>19</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Graph</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>20</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Dynamic Programming</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>21</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Greedy Techniques</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>21</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Backtracking</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="show-more-button-container">
                                        <button onClick ={()=>toggleShow()}>{showStatus}</button>
                                    </div>
                                    
                                </div>

                                <div className="coursePage-teaxt-wrapper">
                                    <h3 className='phase-heading'>Phase-2</h3>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>01</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Resume building.</p>
                                            <div className="section-description">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>02</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>LinkedIn profile building.</p>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>03</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>More practice problems & advance level problems.</p>
                                        </div>
                                    </div>
                                    <div className={showMore1?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>04</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Mock interviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore1?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>05</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>1 to 1 mentoring session for desired company specific discussion & guidance.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="show-more-button-container">
                                        <button onClick ={()=>toggleShow1()}>{showStatus1}</button>
                                    </div>
                                    
                                </div>

                            </div>
                            
                            <div className={toggleState===3?"coursePage-content coursepage-active-content":"coursePage-content"}>
                                <div className="coursePage-teaxt-wrapper">
                                    <div className="taeching-mode">
                                        <h3>Teaching mode</h3>
                                        <ul>
                                            <li>
                                            Online live session on the zoom app.
                                            </li>
                                            <li>
                                            Also recorded sessions for live classes if you missed any class.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="duration">
                                        <h3>Duration</h3>
                                        <ul>
                                            <li>1.5 hour <span>Including assignment & doubts discussion at the beginning and end of every class.</span> </li>
                                            <li><span>Separate assignment discussion sessions.</span> </li>
                                        </ul>
                                    </div>
                                    <div className="class-timmings">
                                        <h3>Class Timming</h3>
                                        <ul>
                                            <li>8:45pm to 10:15pm (3 days a week).</li>
                                            <li>Alternate days mostly(flexible with your exams & college curriculum).</li>
                                        </ul>
                            
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState===4?"coursePage-content coursepage-active-content":"coursePage-content"}>
                                <div className="features-wrapper">
                                    <div className="faetures-container">
                                        <img src={courseFeatures} className="course-features-image"alt="" />
                                    </div>
                                </div>
                                <div className="why-shouldyou-take-wrapper">
                                    <h3>What Do We Offer?</h3>
                                    
                                    <div className="taeching-mode">
                                        <ul>
                                            <li>
                                            Full support till you get placed.
                                            </li>
                                            <li>
                                            Access to our community.
                                            </li>
                                            <li>
                                            Lifetime access to this course.
                                            </li>
                                            <li>
                                            Course completion certificate.
                                            </li>
                                            <li>
                                            Doubt sessions.
                                            </li>
                                            <li>
                                            Resume building.
                                            </li>
                                            <li>
                                            Mock interviews.
                                            </li>
                                            <li>
                                            Online platform tutorials.
                                            </li>
                                            <li>
                                            Placement interview curated questions.
                                            </li>
                                            <li>
                                            Mentorship and doubt assistant.
                                            </li>
                                            <li>
                                            One to one special mentorship sessions.
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                {/* <div className="bottom-line">
                                    <p>
                                        <span>BOTTOM LINE:</span> You will learn Java with in-depth understanding and you will be able to use it for both college and industrial purposes.
                                        You will be able to easily crack placements with the skills you will learn in this course.
                                    </p>
                                </div> */}
                                
                            </div>

                            <div className={toggleState===5?"coursePage-content coursepage-active-content":"coursePage-content"}>
                                <div className="coursePage-teaxt-wrapper">
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="coursePage-overveiw-col2">
                        {/* <div className="course-overveiw-features">
                            <ul>
                                <li>
                                    <FontAwesomeIcon
                                    className='feature-icon'
                                    icon={faFile}/>
                                    <span className='feature-text'>Lectures</span>
                                    <span className='featureValue'>3</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                    className='feature-icon'
                                    icon={faPuzzlePiece}/>
                                    <span className='feature-text'>Quizzes</span>
                                    <span className='featureValue'>0</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                    className='feature-icon'
                                    icon={faClock}/>
                                    <span className='feature-text'>Duration</span>
                                    <span className='featureValue'>40 days</span>
                                </li>
                                
                                <li>
                                    <FontAwesomeIcon
                                    className='feature-icon'
                                    icon={faFile}/>
                                    <span className='feature-text'>Lectures</span>
                                    <span className='featureValue'>3</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                    className='feature-icon'
                                    icon={faCheckSquare}/>
                                    <span className='feature-text'>Assesments</span>
                                    <span className='featureValue'>Yes</span>
                                </li>
                            </ul>
                        </div> */}
                        <div className="register-button">
                            <HashLink to="/registration#top" state={{course:"dsa",image:"dsaPic"}} class="btn-1 btn--shimmer"> Register Now </HashLink>
                        </div>
                        <div className="course-price">
                            <button className='course-start'> <span>Batch starts on</span> <br /> 5th October 2022 </button>
                            <button className='course-start'> <span>Course Duration</span> <br /> 90 days </button>
                            <button>
                                <FontAwesomeIcon
                                className='ruppe-icon'
                                icon={faIndianRupee}
                            />3500 <span>on a one-time payment</span>
                            </button>
                            <button>
                                <FontAwesomeIcon
                                className='ruppe-icon'
                                icon={faIndianRupee}
                            />4500<span> with EMI payment option</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
