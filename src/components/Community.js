import React from 'react'
import commImage from "../assets/images/community.webp";
import "./css/Community.css";

export default function Community() {
    return (
        <section className="community">
            <h1 className="section-heading">Our Community</h1>
            <div className="community-content">
                <div className="community-details">
                    <p className='community-para'>Our community consists of a good number of working professionals in a wide range of fields, who have undergone the placement process and successfully bagged good placements in various companies of repute. Our community is focused on helping each student who joins 4U Academy to meet their placement goals by tapping into the experience possessed by our network of working professionals.</p>
                </div>
                <div className="community-image">
                    <img src={commImage} alt="community" srcSet="" />
                </div>
            </div>
        </section>
    )
}
