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

import shivu_img from "../assets/images/shivaraj.jpeg";
import chandana_img from "../assets/images/Chandana R.webp";
import nishant_img from "../assets/images/nishant.jpeg";
import sumana_img from "../assets/images/sumana.jpg";
import kushal_img from "../assets/images/kushal.webp";
import preethi_img from "../assets/images/preethi.jpg";
import male_img from "../assets/images/male_avatar.png";
import chendu_img from "../assets/images/chendu.jpg"
import nikhil_img from "../assets/images/nikhil_J.jpeg";
import shiva_img from "../assets/images/shiva.jpeg";

import StudentCard from "./placements/testimonials/StudentCard";
import { HashLink } from "react-router-hash-link";

const student = [
  {
    name: "Chandana",
    img: img2,
    linkdin: "https://www.linkedin.com/in/",
    review:
      "It's really a beneficial thing that I got to know about 4U academy and I joined it to learn Java initially. 4U is a unique academy which I have seen where we will be learning courses for our professional excellence. The way of teaching is completely different and easily understandable. So I am glad to take up few more courses from the academy.",
    company: "Sandvine",
    designation: "Software Engineer",
    ctc: "16.37",
  },
  {
    name: "Shivaraj",
    img: shivu_img,
    linkdin: "https://www.linkedin.com/in/shivarajkarjagi/",
    review:
      "I enrolled in JAVA course. I really enjoyed this course. Narendra is a great instructor and I felt I learnt a lot in this course. Great teacher. The teaching of the material was really good",
    company: "Cisco",
    designation: "Software Engineer",
    ctc: "18",
  },
  {
    name: "Sumana T M",
    img: sumana_img,
    linkdin: "https://www.linkedin.com/in/",
    review:
      "Classes of 4u academy are very well and beyond expectations. The study materials provided is better and deeper and helps to understand thoroughly, my hand written notes were very helpful for the interviews. The way of teaching is very impressive.",
    company: "Deloitte USI",
    designation: "Software Engineer",
    ctc: "7.6",
  },

  {
    name: "Shiva B B",
    img: shiva_img,
    ctc: "9 LPA",
    company: "H P",
    linkedIn: "https://www.linkedin.com/in/",
    review: "It was pretty nice , basically I was able strengthen my basics. This course is different from other online courses.The way they interact is too good. This course helped me to start my placements preparation."
  },
 
];


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
              
              {student.map((std) => (
                <div>
                  <StudentCard name={std.name} avtar={std.img} linkdin={std.linkdin}
                    comment={std.review}
                    company={std.company}
                    ctc={std.ctc}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <HashLink className="placement-page-link" to="/Narendra/#top">
            View all &rarr;
          </HashLink>
        </div>
      </div>
    </section>
  );
}
