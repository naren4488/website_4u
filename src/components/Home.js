import React from 'react'
import Hero from "./Hero";
import Faq from "./Faq";
import Community from './Community';
import Reviews from "./Reviews";
import Courses from './Courses';
import Blog from "./Blog";

export default function Home() {
    return (
    <>
        <Hero/>
        <Courses/>
        <Reviews/>
        <Blog/>
        <Community/>
        <Faq/>
    </>
    )
}
