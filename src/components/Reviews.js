import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./css/Reviews.css";
import img1 from "../assets/images/Shivaraj Karjagi.webp";
import img2 from "../assets/images/Chandana R.webp";
import img3 from "../assets/images/Hitesh Kumawat.webp";
import img4 from "../assets/images/Puttaradhya.webp";
import img5 from "../assets/images/usha vg.webp";
import img6 from "../assets/images/Nikhil J.webp";
import img7 from "../assets/images/Chandra kiran Kona.webp";
import StudentCard from "./placements/testimonials/StudentCard";
import { HashLink } from 'react-router-hash-link';




export default function Reviews() {
  return (
    <section className="reviews" id="testimonial">
      <h1 className="section-heading">What our Students say...</h1>
      <div class="rbd-core-ui">
        <div class="rbd-review-slider">
          <div class="rbd-review-container">
            <Carousel
              className="carousel"
              autoPlay={true}
              showThumbs={false}
              interval={5000}
              infiniteLoop={true}
              showIndicators={false}
              showStatus={false}
              showArrows={true}
            >
                <div><StudentCard comment="It's really a beneficial thing that I got to know about 4U academy
            and I joined it to learn Java initially. 4U is a unique academy
            which I have seen where we will be learning courses for our
            professional excellence. The way of teaching is completely different
            and easily understandable. So I am glad to take up few more courses
            from the academy." /></div>

            
                <div><StudentCard/></div>
                <div><StudentCard/></div>
                <div><StudentCard/></div>
              
            </Carousel>
            
          </div>
          <HashLink className='placement-page-link' to="/Narendra/#top">View all &rarr;</HashLink>
        </div>
      </div>
    </section>
  );
}
