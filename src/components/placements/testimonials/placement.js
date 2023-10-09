import React from "react";
import "./placement.css";
import PlacementCard from "./placementCard";
import placementData from "./placementData.json"



export default function Narendra() {
  console.log("printing from placement js", placementData);
  return (
    <section className="narendra-card" id="top">
      <div className="top-heading">
        <h2>What we have achieved so far</h2>
        <h4>
          Our purpose is not mere program execution, but rather the precise
          calibration of individual talents
        </h4>

        <div className="top-highlight">
          <div className="highlight-card">
            <p>
              20LPA
              <br />
              Highest package
            </p>
          </div>

          <div className="highlight-card">
            <p>
              20LPA
              <br />
              Highest package
            </p>
          </div>
        </div>

        <div className="bottom-highlight">
          <div className="highlight-card">
            <p>
              20LPA
              <br />
              Highest package
            </p>
          </div>

          <div className="highlight-card">
            <p>
              20LPA
              <br />
              Highest package
            </p>
          </div>

          <div className="highlight-card">
            <p>
              20LPA
              <br />
              Highest package
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="main-content">
        <h2>Unbelievable ? Hear from themselves...</h2>
        <div className="placement-grid">
          <div>
            {placementData.map(({name, salary, review, company, image, linkedIn}) => {
              // console.log('hello naren', name);
              return <PlacementCard name={name} salary={salary} review={review} image={image} company={company} linkedIn={linkedIn}/>
            })}
            <PlacementCard
              name="Narendra"
              image="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=sph"
              salary="18LPA"
              company="4u academy"
              linkedIn="https://www.linkedin.com/in/narendrakajla77/"
              review="highly recommend others this course highly recommend others this course highly recommend others this course highly recommend others this course"
            />
            <PlacementCard
              name="Narendra"
              image="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=sph"
              salary="18LPA"
              company="4u academy"
              linkedIn="https://www.linkedin.com/in/narendrakajla77/"
              review="highly recommend others this course"
            />
          </div>
          <div>
            <PlacementCard
              name="Narendra"
              image="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=sph"
              salary="18LPA"
              company="4u academy"
              linkedIn="https://www.linkedin.com/in/narendrakajla77/"
              review="highly recommend others this course"
            />
            <PlacementCard
              name="Narendra"
              image="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=sph"
              salary="18LPA"
              company="4u academy"
              linkedIn="https://www.linkedin.com/in/narendrakajla77/"
              review="highly recommend others this course"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
