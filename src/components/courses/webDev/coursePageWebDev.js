import React, { useState } from "react";
import "../../../components/css/coursePage.css";
import "../webDev/webdevcoursepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import courseFeatures from "../../../assets/images/featuresNormal.webp";
import { HashLink } from "react-router-hash-link";
import CourseFeatureCard from "../CourseFeatureCard";

function CoursePage() {
  const [toggleState, setToggleState] = useState(1);
  const [showStatus, setShowStatus] = useState("Show More");
  const [showMore, setShowMore] = useState(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleShow = () => {
    showMore ? setShowStatus("Show Less") : setShowStatus("show More");
    setShowMore(!showMore);
  };
  console.log(showMore);
  return (
    <div id="top">
      <div className="coursepage_main-container">
        <div className="coursePage-banner-container">
          <h2>Learn Web Devlopment</h2>
          {/* <FontAwesomeIcon className='coursePage-fontIcon' icon={faLessThan}  size="xs"/> */}
        </div>

        <div className="coursePage-course-overveiw-wrapper">
          <div className="coursePage-overveiw-col1">
            <div className="coursePage-bloc-tabs">
              <button
                className={
                  toggleState === 1
                    ? "coursePage-tabs coursePage-active-tabs"
                    : "coursePage-tabs"
                }
                onClick={() => toggleTab(1)}
              >
                Course Overveiw
              </button>
              <button
                onClick={() => toggleTab(2)}
                className={
                  toggleState === 2
                    ? "coursePage-tabs coursePage-active-tabs"
                    : "coursePage-tabs"
                }
              >
                Course Curriculum
              </button>
              <button
                onClick={() => toggleTab(3)}
                className={
                  toggleState === 3
                    ? "coursePage-tabs coursePage-active-tabs"
                    : "coursePage-tabs"
                }
              >
                Class Structure
              </button>
              <button
                onClick={() => toggleTab(4)}
                className={
                  toggleState === 4
                    ? "coursePage-tabs coursePage-active-tabs"
                    : "coursePage-tabs"
                }
              >
                Course Features
              </button>
              {/* <button
                            onClick={()=>toggleTab(5)}
                            className={toggleState ===5 ? "coursePage-tabs coursePage-active-tabs":"coursePage-tabs"}>
                                Reveiws
                            </button> */}
            </div>

            <div className="coursePage-content-tabs">
              <div
                className={
                  toggleState === 1
                    ? "coursePage-content coursepage-active-content"
                    : "coursePage-content"
                }
              >
                <div className="coursePage-text-wrapper">
                  <h3>Course Description</h3>
                  <p>
                    Like you, others were frustrated and fed up with fragmented
                    Youtube tutorials or incomplete or outdated courses which
                    assume you already know a bunch of stuff, as well as thick,
                    college-like textbooks able to send even the most
                    caffeine-fuelled coder to sleep. This course assumes no
                    previous coding experience and takes you from absolute
                    beginner core concepts, like showing you the free tools you
                    need to download and install, to creating your very first
                    website to all the complete learning of Web Devloment.
                  </p>
                  <div className="coursePage-what-youll-learn">
                    <h3>What you'll learn?</h3>
                    <ul>
                      <li>
                        Complete Web Development knowledge that you can use for
                        your projects.
                      </li>
                      <li>
                        Project based learning by solving assignments after
                        every class.
                      </li>
                      <li>
                        Approach to make real life intractive and dynamic Web
                        Applications.
                      </li>
                      <li>
                        Mega Projects: Flipkart, MakeMyTrip, Weather App,
                        Magma-3D
                      </li>
                      <li>How to use Git, Github and Hosting your websites.</li>
                      <li>How to build a resume.</li>
                      <li>
                        How to give your best in interviews with the help of
                        mock interviews.
                      </li>
                    </ul>
                  </div>
                  <div className="coursePage-requirements">
                    <h3>Any prerequisite or requirements</h3>
                    <p>
                      Just a mindset to learn & grow, and a laptop with internet
                      connectivity.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2
                    ? "coursePage-content coursepage-active-content"
                    : "coursePage-content"
                }
              >
                <div className="coursePage-teaxt-wrapper">
                  <div className="course-contents">
                    <div className="serial-no">
                      <h3>01</h3>
                    </div>
                    <div className="section-title">
                      <p>
                        Introduction to Internet: Client Server Architecture
                      </p>
                      <div className="section-description"></div>
                    </div>
                  </div>
                  <div className="course-contents">
                    <div className="serial-no">
                      <h3>02</h3>
                    </div>
                    <div className="section-title">
                      <p>
                        Tool and software setup : Understanding the Browser
                        engine and Devloper tools
                      </p>
                    </div>
                  </div>
                  <div className="course-contents">
                    <div className="serial-no">
                      <h3>03</h3>
                    </div>
                    <div className="section-title">
                      <p>Html5 introduction boilerplate template</p>
                    </div>
                  </div>
                  <div className="course-contents">
                    <div className="serial-no">
                      <h3>04</h3>
                    </div>
                    <div className="section-title">
                      <p>CSS: Basics, fonts, icons, positions, container</p>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>05</h3>
                      </div>
                      <div className="section-title">
                        <p>CSS3: Flex-box and Grid layout</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>06</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          Advance CSS : Animations, Media Queries, responsive
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>07</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          CSS libraries: Class Based Css - Bootstrap,
                          TailwindCSS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>08</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          Project 1: Clone of a real life website & Git, Github
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>09</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          Introduction to Javascript: exicution context and call
                          Stack in Browser
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>10</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          Javascipt datatypes, variables, Operators, basic
                          questions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>11</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          Hoisting in javascript, Conditional and loops in js
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>12</h3>
                      </div>
                      <div className="section-title">
                        <p> Arrays & Objects</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>13</h3>
                      </div>
                      <div className="section-title">
                        <p> Functions, Callback Functions & Callback hell</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>14</h3>
                      </div>
                      <div className="section-title">
                        <p>Promises in Javascript : Async & await </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>15</h3>
                      </div>
                      <div className="section-title">
                        <p>DOM Manipulation</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>16</h3>
                      </div>
                      <div className="section-title">
                        <p>
                          Event Handling in Javascipt : Listeners & Handlers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>17</h3>
                      </div>
                      <div className="section-title">
                        <p>Class Project: 2 </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>18</h3>
                      </div>
                      <div className="section-title">
                        <p>Map, Filter, Reduce methods</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>19</h3>
                      </div>
                      <div className="section-title">
                        <p>Import & export Js Modules</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>20</h3>
                      </div>
                      <div className="section-title">
                        <p>Error handling in Js: try, catch, finally</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>21</h3>
                      </div>
                      <div className="section-title">
                        <p>Rest Api</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>21</h3>
                      </div>
                      <div className="section-title">
                        <p>Project 1: Flipkart Clone </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>22</h3>
                      </div>
                      <div className="section-title">
                        <p>Project 2: MakeMyTrip Clone</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>23</h3>
                      </div>
                      <div className="section-title">
                        <p>Project 3: Weather Clone</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>24</h3>
                      </div>
                      <div className="section-title">
                        <p>Project 4: Magma 3D : animated</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>25</h3>
                      </div>
                      <div className="section-title">
                        <p>Hosting or deployment of projects</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      showMore
                        ? "show-more-course-contents"
                        : "show-more-course-contents active-course-content"
                    }
                  >
                    <div className="course-contents">
                      <div className="serial-no">
                        <h3>26</h3>
                      </div>
                      <div className="section-title">
                        <p>Resume Building : Mentorship</p>
                      </div>
                    </div>
                  </div>
                  <div className="show-more-button-container">
                    <button onClick={() => toggleShow()}>{showStatus}</button>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 3
                    ? "coursePage-content coursepage-active-content"
                    : "coursePage-content"
                }
              >
                <div className="coursePage-teaxt-wrapper">
                  <div className="taeching-mode">
                    <h3>Teaching mode</h3>
                    <ul>
                      <li>
                        Online live session on the zoom / Microsoft Teams app.
                      </li>
                      <li>
                        Also recorded sessions for live classes if you missed
                        any class.
                      </li>
                      <li>Daily / Weekly Assingments.</li>
                    </ul>
                  </div>
                  <div className="duration">
                    <h3>Duration</h3>
                    <ul>
                      <li>
                        1 hour{" "}
                        <span>
                          Including assignment & doubts discussion at the
                          beginning and end of every class.
                        </span>
                      </li>
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

              <div
                className={
                  toggleState === 4
                    ? "coursePage-content coursepage-active-content"
                    : "coursePage-content"
                }
              >
                <div className="features-wrapper">
                  <div className="faetures-container">
                    {/* <img
                      src={courseFeatures}
                      className="course-features-image"
                      alt=""
                    /> */}

                    <h2 className="title">
                      Complete Web Devlopment Course : Project Based
                    </h2>
                    <hr className="titlehr" />
                    <div className="feature-card-conatiner">
                      <CourseFeatureCard
                        title="Live Classes"
                        item1=" 3 Classes in a Week"
                        item2="Doubt Sessions"
                        item3="Class recordings"
                      />
                      <CourseFeatureCard
                        title="Projects"
                        item1="Project based learning"
                        item2="Weekly projects"
                        item3="Mega projects"
                      />
                      <CourseFeatureCard
                        title="1:1 Mentorship"
                        item1="Career Guidence"
                        item2="Soft Skills"
                        item3="Progress Tracking"
                      />
                      <CourseFeatureCard
                        title="Mock Interviews"
                        item1="Resume Building"
                        item2="Mock Interviews"
                        item3="Refferals & Professional Networking"
                      />
                    </div>
                  </div>
                </div>
                <div className="why-shouldyou-take-wrapper">
                  <h3>Why should you take this course?</h3>
                  <p>
                    Web development is a high-demand skill that can lead to a
                    well-paying and rewarding career. Web developers create and
                    maintain websites and web applications, and they can work in
                    a variety of industries. If you are interested in a career
                    in tech or simply want to learn how to create and maintain
                    your own websites and want to make some amazing projects, then this web development course is a great
                    option for you.
                  </p>
                </div>
                <div className="bottom-line">
                  <p>
                    <span>BOTTOM LINE:</span> You will learn Web Devlopment with in-depth
                    understanding and you will be able to use it for both
                    college projects and industrial purposes. You will be able to easily
                    crack placements with the skills you will learn in this
                    course.
                  </p>
                </div>
              </div>

              <div
                className={
                  toggleState === 5
                    ? "coursePage-content coursepage-active-content"
                    : "coursePage-content"
                }
              >
                <div className="coursePage-teaxt-wrapper"></div>
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
              {/* <HashLink
                to="/registration#top"
                state={{ course: "java", image: "features" }}
                class="btn-1 btn--shimmer"
              >
                {" "}
                Register Now{" "}
              </HashLink> */}
              <a className="btn-1 btn--shimmer" href="https://forms.gle/kGwMV7vY9xmfeZN89">Register Now</a>
            </div>
            <div className="course-price">
              <button className="course-start">
                {" "}
                <span>Batch starts on</span> <br /> 15th October 2023{" "}
              </button>
              <button>
                <FontAwesomeIcon className="ruppe-icon" icon={faIndianRupee} />
                5000 <span>on a one-time payment</span>
              </button>
              <button>
                <FontAwesomeIcon className="ruppe-icon" icon={faIndianRupee} />
                6000<span> with EMI payment option (1500₹/Month)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
