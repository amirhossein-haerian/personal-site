import React, { Component } from "react";
import "./research.css";
import { FaLink } from "react-icons/fa";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      moreText: "look more",
    };
  }

  render() {
    return (
      <div className="research-main-container">
        <svg className="upwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2f2f2"
            fill-opacity="1"
            d="M0,192L30,186.7C60,181,120,171,180,144C240,117,300,75,360,74.7C420,75,480,117,540,122.7C600,128,660,96,720,101.3C780,107,840,149,900,138.7C960,128,1020,64,1080,85.3C1140,107,1200,213,1260,224C1320,235,1380,149,1410,106.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </svg>
        <h2 className="research-title">Projects</h2>
        <div className="research-container">
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInLeft" className="article-container">
            <div className="article-container-title">ML</div>
            <h4>Title</h4>
            ​ Heart Attack Prediction System
            <hr />
            <h4>Description</h4>
            in this project I implement an ML prediction model, ReactJS as frontend and Flask library in python as backend.
            <hr />
            <h4>year</h4>
            2024
            <span className="article-link">
              <a href="https://github.com/amirhossein-haerian/HAPS">
                <FaLink /> Link
              </a>
            </span>
          </ScrollAnimation>
          <br />
          <br />
          <br />
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="article-container">
            <div className="article-container-title">NodeJS</div>
            <h4>Title</h4>
            ​ Weather API
            <hr />
            <h4>Description</h4>
            Express (Node.js) has been used for the implementation of this API.
            <hr />
            <h4>year</h4>
            2022
            <span className="article-link">
              <a href="https://github.com/amirhossein-haerian/weatherAppByNode">
                <FaLink /> Link
              </a>
            </span>
          </ScrollAnimation>
          <br />
          <br />
          <br />
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInLeft" className="article-container">
            <div className="article-container-title">Paper</div>
            <h4>Title</h4>
            ​ Investigating factors affecting customer loyalty in C2C model e-commerce
            <hr />
            <h4>Conference</h4>
            The third national conference of knowledge and technology of electrical, computer and mechanical engineering of Iran
            <hr />
            <h4>year</h4>
            2019
            <span className="article-link">
              <a href="https://www.civilica.com/Paper-UTCONF03-UTCONF03_149=%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C-%D8%B9%D9%88%D8%A7%D9%85%D9%84-%D9%85%D9%88%D8%AB%D8%B1-%D8%A8%D8%B1-%D9%88%D9%81%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C-%D9%85%D8%B4%D8%AA%D8%B1%DB%8C%D8%A7%D9%86-%D8%AF%D8%B1-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%DA%A9-%D9%85%D8%AF%D9%84-C2C.html">
                <FaLink /> Link
              </a>
            </span>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="another-article-container article-container">
            <div className="another-article-container-title">Master Thesis</div>
            <h4>Title</h4>
            Development of a python toolkit for finding cancer related modules
            <hr />
            <h4>Supervisor</h4>
            Golnaz Taheri
            <hr />
            <h4>Year</h4>
            2024
          </ScrollAnimation>
          <div className="propsal-container" />
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2f2f2"
            fill-opacity="1"
            d="M0,128L30,122.7C60,117,120,107,180,101.3C240,96,300,96,360,112C420,128,480,160,540,165.3C600,171,660,149,720,144C780,139,840,149,900,170.7C960,192,1020,224,1080,218.7C1140,213,1200,171,1260,149.3C1320,128,1380,128,1410,128L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>
    );
  }
}

export default Research;
