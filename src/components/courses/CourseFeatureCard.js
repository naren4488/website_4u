
import React from "react";
import "./featureCard.css"
function CourseFeatureCard(props) {
  return (
    <div className="card">
      <h3 className="title">{props.title}</h3>
      <div className="img">
      <img src="" alt="" />
      </div>
      <ul className="list">
        <li className="list-items">{props.item1}</li>
        <li className="list-items">{props.item2}</li>
        <li className="list-items">{props.item3}</li>   
      </ul>
      <hr />
      
    </div>
  );
}

export default CourseFeatureCard;
