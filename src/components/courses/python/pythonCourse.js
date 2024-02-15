import React, { useState } from "react";
import "../../../components/css/coursePage.css";
import "../python/pythonCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import CourseFeatureCard from "../CourseFeatureCard";

function PythonCourse() {
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
        <div className="course-hero-image">
          <div className="coursePage-banner-container">
            <h2>Python for All</h2>
            {/* <FontAwesomeIcon className='coursePage-fontIcon' icon={faLessThan}  size="xs"/> */}
          </div>
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
                    Escape the frustration of scattered YouTube tutorials and
                    outdated courses. Designed for absolute beginners with no
                    prior coding experience, our comprehensive Python for all
                    course provides a seamless journey of learning python from
                    core concepts to mastering advance libraries like pandas,
                    numpy & matplotlib. We guide you through essential steps,
                    including the installation of free tools, theoritical
                    explaination with real life examples, writing code for each
                    problem, and assignments discussion, ensuring an engaging
                    and hands-on learning experience, all while sidestepping the
                    weariness induced by traditional, dense textbooks.
                  </p>
                  <div className="coursePage-what-youll-learn">
                    <h3>What you'll learn?</h3>
                    <ul>
                      <li>
                        Complete python knowledge, enabling you to explore
                        domains like application development, data analysis, and
                        advanced domains like ML & AI.
                      </li>
                      <li>
                        Problem-solving skills by solving practice problems
                        during the class on each topic & assignments after every
                        class.
                      </li>
                      <li>
                        In this Python course, you will learn the fundamentals
                        of programming from scratch, covering essential concepts
                        for beginners with no prior coding experience.
                      </li>
                      <li>
                        How to solve coding questions easily and efficiently.
                      </li>
                      <li>How to build a resume. </li>
                      <li>
                        How to use coding platforms like GFG, leetcode, etc.
                      </li>
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
                        Introduction to Python & basic setups & installations
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
                        Data types, variables (along with ASCII, typecasting,
                        Binary-Decimal)
                      </p>
                    </div>
                  </div>
                  <div className="course-contents">
                    <div className="serial-no">
                      <h3>03</h3>
                    </div>
                    <div className="section-title">
                      <p>Operators</p>
                    </div>
                  </div>
                  <div className="course-contents">
                    <div className="serial-no">
                      <h3>04</h3>
                    </div>
                    <div className="section-title">
                      <p>Data structure basic: Strings, List, Tuple</p>
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
                        <p>Data structure basic: Dictionary, Set</p>
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
                          Control Structures: Conditional statements (if, else,
                          elif)
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
                          Control Structures: Loops (for, while) & break,
                          continue
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
                        <p>Pattern programs for logic building</p>
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
                        <p>Advance pattern programs (optional)</p>
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
                        <p>Functions</p>
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
                        <p>Recursion </p>
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
                        <p>OOPs introduction</p>
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
                        <p>Constructors ( __init__ )</p>
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
                        <p>Self keyword</p>
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
                        <p>Inheritance</p>
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
                        <p>Polymorphism</p>
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
                        <p>Abstraction</p>
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
                        <p>Encapsulation</p>
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
                        <p>Lambda expression</p>
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
                        <p>Error handling</p>
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
                        <p>Modules introductions & Numpy </p>
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
                        <p>Pandas,Matplotlib</p>
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
                        <p>File I/O</p>
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
                        <p>Application of python</p>
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
                        Online live session on the Zoom / Microsoft Teams app.
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
                          including assignment & doubts discussion at the
                          beginning and end of every class.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="class-timmings">
                    <h3>Class Timming</h3>
                    <ul>
                      <li>9 pm to 10 pm (3 days / week).</li>
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
                      Python for All course
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
                        title="Structured Course"
                        item1="Well structured content"
                        item2="Assignments"
                        item3="Solution of assignments"
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
                        item2="Interview tips & preparations"
                        item3="Mock Interviews"
                      />
                    </div>
                  </div>
                </div>
                <div className="why-shouldyou-take-wrapper">
                  <h3>Why should you take this course?</h3>
                  <p>
                    Python has become most used programming language and
                    learning python offers a versatile and in-demand skill set,
                    equipping you to excel in various domains. Whether you're a
                    beginner or an experienced coder, Python's readability and
                    extensive libraries make it an ideal language for
                    application development, data analysis, web development, and
                    advanced domains like ML & AI. Learning Python not only
                    opens doors to diverse career opportunities but also
                    provides a solid foundation for exploring advanced fields
                    like machine learning and automation, ensuring you stay
                    relevant in the dynamic landscape of technology.
                  </p>
                </div>
                <div className="bottom-line">
                  <p>
                    <span>BOTTOM LINE:</span> You will learn Python with
                    in-depth understanding and you will be able to use it for
                    both college projects and industrial purposes. You will be
                    able to easily crack placements with the skills you will
                    learn in this course.
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
              <a
                className="btn-1 btn--shimmer"
                href="https://forms.gle/f7SV8Ar25G369yW2A"
              >
                Register Now
              </a>
            </div>
            <div className="course-price">
              <button className="course-start">
                {" "}
                <span>Batch starts on</span> <br /> 29th November 2023{" "}
              </button>
              <button>
                <span> Course Fee </span>
                <FontAwesomeIcon className="ruppe-icon" icon={faIndianRupee} />
                {" "}<span>1500</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PythonCourse;
