import React from "react";
import "./placement.css";
import PlacementCard from "./placementCard";
import placementData from "./leftPlacementData.json"
import rightPlacementData from "./rightPlacementData.json"
// all images for placed students
import shivu_img from "./../../../assets/images/shivaraj.jpeg"
import chandana_img from "./../../../assets/images/Chandana R.webp"
import nishant_img from "./../../../assets/images/nishant.jpeg"
import sumana_img from "./../../../assets/images/sumana.jpeg"
import kushal_img from "./../../../assets/images/kushal.webp"
import preethi_img from "./../../../assets/images/preethi.jpg"
import male_img from "./../../../assets/images/male_avatar.png"
// import shivu_img from "./../../../assets/images/shiva.jpeg"



export default function Narendra() {
  // console.log("printing from placement js", placementData);
  placementData[0].image = shivu_img;
  placementData[2].image = male_img;
  placementData[1].image = chandana_img;
  placementData[3].image = nishant_img;
  placementData[4].image = sumana_img;
  // placementData[0].image = shivu_img;
  rightPlacementData[0].image = kushal_img;
  rightPlacementData[1].image = preethi_img;
  rightPlacementData[2].image = male_img;
  rightPlacementData[3].image = male_img;
  rightPlacementData[4].image = male_img;


  // console.log("printing from placement js", placementData);
  return (
    <section className="narendra-card" id="top">
      <div className="top-heading">
        <h2>What we have achieved so far</h2>
        <h4>
          Our purpose is not mere program execution, but rather the precise
          calibration of individual talents
        </h4>

        <div className="top-highlight">
          <div className="highlight-card card-highlight">
            <p>
              4 Program
            </p>
          </div>

          <div className="highlight-card card-highlight">
            <p>
              8+ Colleges 
            </p>
          </div>
        </div>

        <div className="bottom-highlight">
          <div className="  card-highlight">
            <p>
              50+ Industrial
              <br />
              Projects
            </p>
          </div>

          <div className="highlight-card card-highlight">
            <p>
            8.9 LPA
              <br />
              Avg. package
            </p>
          </div>

          <div className="highlight-card card-highlight">
            <p>
              18 LPA
              <br/>
              Highest Package
            </p>
          </div>
        </div>
      </div>
      <div className="horizontal-breaker"></div>

      <div className="main-content">
        
        <h2>Unbelievable ? Hear from themselves...</h2>
        <div className="placement-grid">
          <div>
            {placementData.map(({name, salary, review, company, image, linkedIn}) => {
              // console.log('hello naren', name);
              return <PlacementCard name={name} salary={salary} review={review} image={image} company={company} linkedIn={linkedIn}/>
            })}
            
            
          </div>
          <div>
          {rightPlacementData.map(({name, salary, review, company, image, linkedIn}) => {
              // console.log('hello naren', name);
              return <PlacementCard name={name} salary={salary} review={review} image={image} company={company} linkedIn={linkedIn}/>
            })}
           
          </div>
        </div>
      </div>
    </section>
  );
}
