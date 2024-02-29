import React, { Component } from "react";
import "../AboutMe/aboutme.css";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="description-main-container">
        <h2 className="aboutme-title">About Me</h2>
        <ScrollAnimation animateOnce={true} animateIn="bounceInRight" className="description-text-container">
          <FaQuoteLeft className="left-quote" />
          <FaQuoteRight className="right-quote" />
          <p className="description-text">My name is Amir, I was born in 1997, I was raised in Tehran and currently based in Stockholm.</p>
          <p className="description-text">
            Watching movies is my main interest; I spend most of my free time watching them. I am also adventurous and like traveling and gaining new experiences, and if the
            conditions are right, I will definitely go on a trip.
          </p>
          <p className="description-text">
            I call myself a geek, and I hold a bachelor's degree in Information Technology Engineering (IT) from Azad University of Tehran. I am also finishing a master's program
            in computer and systems sciences from Stockholm University; my interest in this field goes back to my school days when I participated in computer familiarization
            classes.
          </p>
          <p className="description-text">
            I have had different and beneficial experiences during the four-year bachelor's period. I only had a little experience in programming before my bachelor's. I learned
            programming logic with C and Java with university topics. Still, gradually, my interest and enthusiasm for learning increased. I tried challenging myself by doing
            projects for different lessons; I even did projects for others only to gain experience. Some of my friends and I decided to work and practice as a team. That experience
            was precious and this was the beginning of my journey!
          </p>
          <p className="description-text">
            I chose to become a Software Developer because I feel I have the ability and talent for it. Also, when I work with a website or application, its convenience
            is very important to me. I believe that as a developer you must be able to not only deliver codes but also admirable products.
          </p>
          <p className="description-text">
            I have experienced an internship, a boot camp, and 2.5 years of being a full-time software developer at a high-profile company. I am confident that I can handle
            different situations and challenges.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="bounceInRight" className="aboutme-bottom">
          <div className="row row-fix d-flex justify-content-center align-items-center">
            <div className="col-lg-2">
              <img className="my-3 img-fluid aboutme-image" src={require("../../../Static/img/personal.jpg")} />
            </div>
            <div className="col-lg-10">
              <div className="my-3 important-description-text-container">
                <p className="description-text">
                  « I believe that it does not matter how much experience you have as a developer, you have to learn and keep your information up-to-date, because the use
                  of modern (novel) technologies make differences »
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default AboutMe;
