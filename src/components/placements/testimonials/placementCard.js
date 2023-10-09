import React from "react";
import "./PlacementCard.css";

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
      <div className="my-card">
        <div className="photo-section">
          <div className="card-img">
            <img src={image} alt={name} height="100%" width="100%" />
          </div>
          <a href={linkedIn}>linkedIn</a>
        </div>
        <div className="card-body">
          <p>{review}</p>
          <div className="placement-card-footer">
            <h3>{name}</h3>
            <h4>{salary}</h4>
            <h4>{company}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
