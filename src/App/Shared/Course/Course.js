import React, { Component } from "react";
import "./course.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      moreText: "look more",
    };
  }

  render() {
    return (
      <div className="course-main-container">
        <h2 className="course-title">Courses</h2>
        <div className="course-container">
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="course-detail">
            I participated in the Network + courses of Kendo School to get familiar with the topic of network+.
            <IoMdCheckmarkCircleOutline className="check-icon" />
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="course-detail">
            In order to gain experience, I participated in ReactJS/React Native bootcamp of Rasa and learned a lot of things for about three months with the good team of this
            bootcamp, which I have posted the address of their website <a href="https://trs.college/"> here </a>.
            <IoMdCheckmarkCircleOutline className="check-icon" />
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="course-detail">
            I have participated in courses like: Data Mining, Machine Learning, Principals and foundation of Artificial intelligence, Internet of Things, Scientific Communication
            and Research Methodology, Research Methodology for Computer and Systems Sciences, Research topics in Data Science, Quantum Programming during my master.
            <IoMdCheckmarkCircleOutline className="check-icon" />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Course;
