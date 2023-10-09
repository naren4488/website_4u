import React from 'react'
import "./css/BlogPage.css";
import photo from "../assets/images/keerthana.webp"

export default function Blog2() {
    return (
        <section className='fullBlog' id="top">
            <p className='blog-path'>Blog &#62; Skills to learn in college </p>
        <h3 className="blog-heading">Skills to learn in college</h3>
        <div className="blog-details-card">
            <div>
            <img src={photo} alt="author" className="author-image"/>
            </div>
            <div className="blog-details">
            <div className="blog-details-sub-card">
                <p className="blog-author">Keerthana S Bidare</p>
                <p className="blog-date">Saturday, Sep 05, 2022 | 5 min read</p>
            </div>
            </div>
        </div>
        <hr />
        <img src="https://bit.ly/3qar6XH" alt="" className="blog-image" />
        <p className='blog-text'> In all Bollywood movies, college seems so much fun. After two years of continuous coaching, stress, and uncertainty, you'll want to do everything Sharukh Khan did in Kuch Kuch Hota Hai. As you go through these golden years, you'll make lifelong friends, find people who will inspire you for the rest of your life, fall in love, make mistakes, and make memories to cherish for years to come. The years you spend here are your formative years, and everything you learn will influence your life forever. Take advantage of these years as much as you can. This article will give you an overview of the skills that you need to acquire during your undergraduate studies</p>
        <p className="blog-text">Choose a hobby that fuels your soul: Learn a skill that you love. Get a skill that can make you happy even on your worst days. Get good at doing what you enjoy, whether it's dancing, sports, or musical instruments. You will feel refreshed after learning this, it will make your inner child happy. It is necessary to remind yourself to enjoy the little moments each semester as you have so many assignments and tests to complete. When you are studying, it's easier to learn about something you love. Once you get into the corporate world, you'll have different goals, so learning something you like becomes more challenging.</p>
        <p className="blog-text">Learn a skill that will help you in your career: Since you chose engineering, you might want to work in the technology field. Make yourself marketable by learning a skill. Learn more about data science or build multiple microcontroller projects if you have an interest in either. You should be able to use this skill to stand out in your interview. Your goal is to make yourself an asset, to have magnetic results that attract the best companies. Creating your career foundation right now is the beginning of your journey.</p>
        <p className="blog-text">Develop an entrepreneurial skill:- I'm sure you've already heard about side hustles on social media. We GenZ’s are learning smart ways to make money. All of us are striving toward financial freedom. The overwhelming amount of information already presented on social media about side hustles is an indication that ten years from now everyone will have multiple sources of income. You should not fall behind, so start now. Learn a skill that will make you money. Learn copywriting, and social media management or make YouTube videos. Find another source of income.</p>
        <p className="blog-text">One skill which is compulsory no matter what your plan is for the future is communication. Communication is everything. No matter how good you are or how hard you have worked on a project, if you cannot communicate what you want, no one can help you. Make sure you take every chance to go on stage, to interact with people and learn how to put forth your ideas.</p>
        <p className="blog-text">I think there is no rulebook which states that 'xyz' skill will make you successful. You have to be exceptional at what you want to do, that is when you will be successful. So even if you decide to learn one skill, give it everything you have and become a master at that one skill. Do not forget to have fun.</p>
        <p className="blog-text">All the best.</p>
        </section>
    )
}
