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
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function StudentCard(props) {
  return (
    <div>
      <div className="card-container">
        <div className="card-left-section">
          <img alt="" className="student-img" src={props.avtar} />
          <a href={props.linkdin}>
            <h3 className="name">
              {props.name}{" "}
              <span>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </h3>
          </a>
        </div>
        <div className="card-right-section">
          <div className="comment">
          <span>
            <FontAwesomeIcon
              className="quote"
              icon={faQuoteLeft}
              style={{
                "--fa-primary-color": "#7e8591",
                "--fa-secondary-color": "#7e8591",
              }}
            />
          </span>
            <h4 className="comment"> {props.comment}</h4>
          </div>
          <hr className="bar" />
          <p className="company-name">
            Software Engineer at @{props.company} | CTC-{props.ctc} LPA
          </p>
        </div>
      </div>



      {/* <div className="card-container ">
        <div className="profile-box">
          <img alt="" class="student-img" src={props.avtar} />
          <div className="upper">
            <a href={props.linkdin}>
              <h3 className="name">
                -{props.name}{" "}
                <span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </h3>
            </a>
          </div>
        </div>
        <div className="content">
          <span>
            <FontAwesomeIcon
              className="quote"
              icon={faQuoteLeft}
              style={{
                "--fa-primary-color": "#7e8591",
                "--fa-secondary-color": "#7e8591",
              }}
            />
          </span>
          <h4 className="comment"> {props.comment}</h4>

          <div className="student-details">
            <hr className="bar" />
            <p className="company-name">
              Software Engineer at @{props.company} | CTC-{props.ctc} LPA
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default StudentCard;
