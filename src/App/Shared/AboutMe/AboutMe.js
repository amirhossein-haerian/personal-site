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
          <p className="description-text">My name is Amir, I was born in 1997, I raised in Tehran and currently based in Stockholm.</p>
          <p className="description-text">
            Watching movies is my main interest and I spend most of my free time watching movies. I am also adventurous and like traveling and gaining new experiences, and if the
            conditions are right, I will definitely go on a trip.
          </p>
          <p className="description-text">
            I call my self a geek and I hold a bachelor’s degree in Information Technology Engineering (IT) from Azad University of Tehran and I also finishing a master program in
            computer and systems sciences from Stockholm university, my interest in this field goes back to my school days, when I participated in computer familiarization classes
          </p>
          <p className="description-text">
            The four-year bachelor's period was a period with different and very useful experiences for me. I didn't have much experience in programming before my bachelor, and it
            can be said that I learned the programming logic with C and Java with university topics, but gradually my interest and Also, my enthusiasm for learning increased and I
            tried to challenge myself by doing projects of different lessons, even sometimes I did the projects of others, in somepoint some of my friends and I decided to work and
            practice as a team. That experience was a very valuable experience. It was in this team work that I started learning Front-End development and this was the beginning of
            my journey!
          </p>
          <p className="description-text">
            The reason I chose to become a Front-End Developer was because I feel that I have the ability and talent in it, and also when I work with a site or application, its
            convenience and beauty are very important to me, and I believe that as a Front-End developer If you can't do your job properly, the efforts can't be seen in the
            back-end, that's why I would like to increase my abilities in this matter everyday, which is a concern for me.
          </p>
          <p className="description-text">
            I have experienced an internship, a bootcamp and 1.5 years of being a full time front-end developer at one of the high-profile companies and I see myself confident that
            I can handle different situations and challenges.
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
                  « I believe that it does not matter how much experience you have  as a Front-End developer, you have to learn and keep your information up-to-date, because the use of modern (novel) technologies make differences »
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
