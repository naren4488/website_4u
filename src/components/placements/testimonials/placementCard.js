import React from "react";
import "./PlacementCard.css";
import linkedIn_image from "./../../../assets/images/linkedin_logo.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function PlacementCard({
  image,
  name,
  linkedIn,
  review,
  salary,
  company,
}) {

  return (
    <>
      <div className="placement-card">
        <div className="photo-section">
          <div className="placement-card-img">
            <img src={image} alt={name} height="100%" width="100%" />
          </div>

          <a href={linkedIn}>
            <div className="linkedin">
            <FontAwesomeIcon className="linkedin" icon={faLinkedin} />{" "}
            </div>
          </a>
        </div>
        <div className="placement-card-body">
          <p>{review}</p>
        </div>
        <div className="placement-card-footer">
          <h3>{name}</h3>
          <div className="salary-box">
            <h4>{salary} </h4>
            <h4>|</h4>
            <h4>{company}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
