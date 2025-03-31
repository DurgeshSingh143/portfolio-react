import React from "react";
import "./Hero.css";
import resume_link from "../../assets/durgeshsingh.pdf";
import profile_img from "../../assets/DSS.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Durgesh Singh,</span> frontend developer based in INDIA.
      </h1>
      <p>
        I am a frontend developer from Rajasthan, INDIA with 6 months of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href={resume_link} download>
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
