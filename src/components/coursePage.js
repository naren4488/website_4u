import React,{useState} from 'react'
import "../components/css/coursePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
import courseFeatures from "../assets/images/featuresNormal.webp";
import {HashLink} from "react-router-hash-link"

function CoursePage() {
    const [toggleState, setToggleState] = useState(1);
    const [showStatus, setShowStatus] = useState("Show More")
    const [showMore, setShowMore] = useState(true)
    const toggleTab = (index)=>{
        setToggleState(index)
    }
    const toggleShow = ()=>{
        showMore?setShowStatus("Show Less"):setShowStatus("show More")
        setShowMore(!showMore)
        
    }
    console.log(showMore)
    return (
        <div id="top">
            <div className="coursepage_main-container">
                <div className="coursePage-banner-container">
                    <h2>Learn Java For Placement</h2>
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
                                        Like you, others were frustrated and fed up with fragmented Youtube tutorials or incomplete or outdated courses which assume you already know a bunch of stuff, as well as thick, college-like textbooks able to send even the most caffeine-fuelled coder to sleep. 
                                        This course assumes no previous coding experience and takes you from absolute beginner core concepts, like showing you the free tools you need to download and install, to writing your very first Java program to all the complete learning of Java.
                                    </p>
                                    <div className="coursePage-what-youll-learn">
                                        <h3>What you'll learn?</h3>
                                        <ul>
                                            <li>
                                                Complete core Java knowledge that you can use for your placement preparation.
                                            </li>
                                            <li>
                                                Problem-solving skills by solving practice problems during the class on each topic & assignments after every class.
                                            </li>
                                            <li>
                                                How to solve coding questions easily and efficiently.
                                            </li>
                                            <li>
                                                All important Java concepts.
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
                                        <p>Just a mindset to learn & grow, and a laptop with internet connectivity.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={toggleState===2?"coursePage-content coursepage-active-content":"coursePage-content"}>

                                <div className="coursePage-teaxt-wrapper">
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>01</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Introduction session & First java program</p>
                                            <div className="section-description">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>02</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Tool and software setup</p>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>03</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>JDK, JRE & JVM understanding</p>
                                        </div>
                                    </div>
                                    <div className="course-contents">
                                        <div className="serial-no">
                                            <h3>04</h3>
                                        </div>
                                        <div className="section-title">
                                            <p>Data types & Variables</p>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>05</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Operators & literals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>06</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Control flow statements(conditional, loops & jump statements)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>07</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Patterns</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>08</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Methods & Keywords</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>09</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Recursion</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>10</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Used input</p> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>11</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Arrays</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>12</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>2D arrays (matrix)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>13</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Oops introduction</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>14</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Objects and classes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>15</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Constructors</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>16</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>This and static keyword</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>17</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Inheritance</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>18</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Polymorphism</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>19</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Abstraction & java interface</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>20</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Encapsulation & access modifiers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>21</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Memory management in java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>21</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Strings </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showMore?"show-more-course-contents":"show-more-course-contents active-course-content"}>
                                        <div className="course-contents">
                                            <div className="serial-no">
                                                <h3>22</h3>
                                            </div>
                                            <div className="section-title">
                                                <p>Exception handling</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="show-more-button-container">
                                        <button onClick ={()=>toggleShow()}>{showStatus}</button>
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
                                            <li>1 hour <span>Including assignment & doubts discussion at the beginning and end of every class.</span></li>
                                        </ul>
                                    </div>
                                    <div className="class-timmings">
                                        <h3>Class Timming</h3>
                                        <ul>
                                            <li>9 pm to 10 pm (3 days a week).</li>
                                            <li>Alternate days mostly(Flexible with schedule).</li>
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
                                    <h3>Why should you take this course?</h3>
                                    <p>
                                    It is completely placement oriented which empowers your learning toward your placement journey Already 2 batches are over and 
                                    each student is 100 percent confident about their learning in java and they are currently doing great in their journey and they are able to apply this learning in
                                    their DSA journey as well as in interviews and also in industrial application.
                                    </p>
                                </div>
                                <div className="bottom-line">
                                    <p>
                                        <span>BOTTOM LINE:</span> You will learn Java with in-depth understanding and you will be able to use it for both college and industrial purposes.
                                        You will be able to easily crack placements with the skills you will learn in this course.
                                    </p>
                                </div>
                                
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
                            <HashLink to="/registration#top" state={{course:"java",image:"features"}} class="btn-1 btn--shimmer"> Register Now </HashLink>
                        </div>
                        <div className="course-price">
                            <button className='course-start'> <span>Batch starts on</span> <br /> 28th November 2022 </button>
                            <button>
                                <FontAwesomeIcon
                                className='ruppe-icon'
                                icon={faIndianRupee}
                            />1500 <span>on a one-time payment</span>
                            </button>
                            <button>
                                <FontAwesomeIcon
                                className='ruppe-icon'
                                icon={faIndianRupee}
                            />2000<span> with EMI payment option</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoursePage