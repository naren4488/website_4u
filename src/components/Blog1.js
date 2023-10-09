import React from 'react'
import "./css/BlogPage.css";
import photo from "../assets/images/akash.webp"

export default function Blog1() {
  return (
    <section className='fullBlog' id="top">
      <p className='blog-path'>Blog &#62; Getting Started With Placement Preparation </p>
      <h3 className="blog-heading">Getting Started With Placement Preparation</h3>
      <div className="blog-details-card">
        <div>
          <img src={photo} alt="author" className="author-image"/>
        </div>
        <div className="blog-details">
          <div className="blog-details-sub-card">
            <p className="blog-author">Aakash Binu</p>
            <p className="blog-date">Saturday, Sep 03, 2022 | 5 min read</p>
          </div>
        </div>
      </div>
      <hr />
      <img src="https://bit.ly/3RsnsnQ" alt="" className="blog-image" />
      <p className='blog-text'> 
      We all look to join good colleges with high placement rates, where companies come to cherry pick candidates and offer them high packages, in the hopes that we will be one of the few "lucky" ones that get that golden ticket of placements. But is it really that elusive? 
      </p>
      <p className="blog-text">
      Speaking as engineers and knowing other engineers who have been placed in good companies, we can assure you that preparing and sitting for placements is not as hard as you make it out to be. In this blog, we would like to outline a few things you should be doing which will greatly increase your chances of getting placed in good companies quickly. 
      </p>
      <p className="blog-text">
      There are also things mentioned in this article that students who are not in their final or penultimate year can do, so if you are a junior who wants to get an early start on the placement preparation journey, read on. 
      </p>
      <h5 className="blog-point">Decide on a preferred programming language</h5>
      <p className="blog-point-elob">
      Almost all the IT companies that come to colleges for placements have a programming round. One of the most frequent questions we get from juniors is "<span className="highlight">How many programming languages should I know to get placed?</span>". The answer to that is very simple. You need to know <span className="highlight">ONE</span> (Yes one) <span className='highlight'> Object Oriented Programming language </span> well, to perform well in the coding tests. Which means that you can pick one from Python, C++ or Java and start learning that in order to do well in placements. Very few companies come with strict requirements in terms of language i.e. there will be a limited amount of companies which will come up and ask for people to code in only one specific language like C or Java in their coding test. All other companies give the students the option to attempt the coding test in any language of their choice. 
      </p>
      <p className="blog-point-elob">
      Multiple languages is a good skill to have, but make sure you know the fundamentals of one language properly and know how to implement things like Problem Solving and Data Structures in atleast one language. Once you have proficiency over one language, you can pick up other similar languages in a very short period of time as the fundamental concepts remain the same, only the syntax varies. 
      </p>
      <h5 className="blog-point">Practice, practice and more practice (and then practice some more)</h5>
      <p className="blog-point-elob"> This point cannot be stressed enough to all students. Coding and programming is all about practice and being in touch with the concepts on a regular basis. Like all other things in life, once you stop practicing it, your skill level or the ease at which you do it decreases. Ideally, once placement season has started, you should be spending a good chunk of your time on just programming. The more you practice, the easier the solutions will come to you while you are attempting the company's coding test. Make use of platforms like Hackerrank and Leetcode to practice Language specific challenges, Problem Solving and Data Structures related problems.</p>
      <p className="blog-point-elob">  <span className='highlight'> Pay close attention to Problem Solving and Data Structures </span>. Data Structures is probably the most important topic you will need in coding tests, so make sure you are studying and keeping in touch with the concepts regularly. Ideally daily.</p>
      <h5 className="blog-point"> Practice General Aptitude</h5>
      <p className="blog-point-elob">Along with coding tests, most companies also test your general aptitude skills. You can refer to sites such as <span className='highlight'> <a href="http://indiabix.com">indiabix</a> </span> in order to sharpen your aptitude skills, pick up tips and tricks and look to solve aptitude questions as quickly as possible so that you have enough time left for the coding questions. Again, practice is key here.</p>
      <h5 className="blog-point">Focus on building your resume</h5>
      <p className="blog-point-elob">Understand that companies are looking for multi-faceted people. People who can contribute to the organisation in more ways than one. Being a brilliant coder is good, but if you cannot lead a team of programmers on a project, your value to the company will be slightly lesser. Companies cannot spend hours interviewing you to figure out what you are good at. That's where your resume comes in. A strong resume having multiple strengths, with appropriate proof for each, is your best ticket to getting placed quickly.
          Look to be involved in activities and events which help you build and flex your other skills like team building, management, communication etc. If your college has clubs/societies, make sure you are participating in the events they host in order to get experience and improve your skills. If you are part of any clubs/societies, make sure you are actively involved in the working of the society, which will help you massively as an individual and will give you credibility if any interviewer decides to question you more about you other skills mentioned. </p>
      <p className="blog-point-elob">The first question that interviewers ask in all interviews is " <span className="highlight">Tell me about yourself </span>". Ensure that the answer to that question is not restricted to your academic scores and your family background. Be on the lookout for all opportunities that will add weight to your personality and your resume, and do not be afraid to participate.</p>
      <h5 className="blog-point">Build good projects and know them inside out</h5>
      <p className="blog-point-elob">It is almost a 100% guarantee that in the interview you will be asked questions about the projects you have done during the course of your engineering. Make sure that you build interesting projects and know everything there is to know about the working, methodology and concept of the project. If you are short of ideas for interesting projects, the internet is your friend. You can find countless projects of varying difficulty level which you can develop and add to your resume. Reach out to your seniors and ask them for ideas as well. Make sure you are involved in the building of the project so that you can answer any questions on it. Good projects add good value to your resume and elevate you from the rest, so do keep that in mind.</p>
      <h5 className="blog-point">Improve your communication skills</h5>
      <p className="blog-point-elob">For all year students (1st to 4th year) :
          You may be the most talented, technically proficient person in the world. But if you are unable to convince your interviewer about the same in the short time frame that you get, then all that is irrelevant. Having good communication skills is a major asset to any individual, whether in personal or corporate life. Companies are on the lookout for people who can communicate their ideas effectively to peers and superiors. </p>
      <p className="blog-point-elob">There are many ways in which you can improve your communication skills. If you feel your language is not good enough, pay close attention to all the English movies, series and podcasts you listen to and pick up words and correct grammar from them. If you feel fluency is where you lack, make it a point to speak regularly in English with someone who can correct you, without demeaning you, when you make mistakes. Actively look to speak and get your thoughts out to other people. You might be an introvert who doesn't talk much, but make sure that whatever little you are talking, it is effective. There are plenty of resources available which help you to speak better. Make use of them and actively work on your speaking skills. Ultimately, your success in the interview will come down to how well you can convince the interviewer that you are the person for the job, using your words.</p>
      <p className="blog-text">So these are the few tips we wished to share with you. We hope this article has been helpful in atleast giving you a starting point with respect to placement preparation. We wish you all the best for your placement processes and may you land the company of your dreams!</p>
    </section>
  )
}
