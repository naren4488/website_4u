import React from "react";
import "./studentCard.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import "../../css/Reviews.css";
import img1 from "../../../assets/images/Shivaraj Karjagi.webp";
import img2 from "../../../assets/images/Chandana R.webp";
import img3 from "../../../assets/images/Hitesh Kumawat.webp";
import img4 from "../../../assets/images/Puttaradhya.webp";
import img5 from "../../../assets/images/usha vg.webp";
import img6 from "../../../assets/images/Nikhil J.webp";
import img7 from "../../../assets/images/Chandra kiran Kona.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import { fa-duotone fa-quote-left } from "@fortawesome/free-solid-svg-icons";

function StudentCard(props) {
  return (
    <div>
      {/* <div class="rbd-review review1.2 ">
            <h3 class="rbd-heading">Chandana R</h3>
            <i class="renderSVG" data-icon="star" data-repeat="5"></i>
            <div class="rbd-content">
            <img alt="" class="rbd-gravatar" src={img2} />
            It's really a beneficial thing that I got to know about 4U academy and
            I joined it to learn Java initially. 4U is a unique academy which I
            have seen where we will be learning courses for our professional
            excellence. The way of teaching is completely different and easily
            understandable. So I am glad to take up few more courses from the
            academy.{" "}
            </div>
         <div class="rbd-review-meta">Written by Chandana R</div>
        </div> */}

      <div className="card-container ">
        <div className="img">
          <img alt="" class="student-img" src={img2} />
        </div>
        <div className="content">
          <h4 className="comment">
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{
                  "--fa-primary-color": "#7e8591",
                  "--fa-secondary-color": "#7e8591",
                }}
              />
            </span>
            {props.comment}
          </h4>

          <div className="student-details">
            <div className="upper">
              <h3 className="name">-Chandana</h3>
              <img src="" alt="" className="logo" />
            </div>
            <p className="company-name">
              Software Engineer at @Sandvine CTC-16.5 LPA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
