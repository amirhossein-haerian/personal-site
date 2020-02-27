import React, { Component } from 'react';
import './course.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import ScrollAnimation from 'react-animate-on-scroll';

class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			moreText: 'مشاهده بیشتر'
		};
	}

	render() {
		return (
			<div className="course-main-container">
				<h2 className="course-title">دوره ها</h2>
				<div className="course-container">
					<ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="course-detail">
						<IoMdCheckmarkCircleOutline className="check-icon" />
						برای آشنایی با مبحث شبکه در دوره های Network + آموزشگاه کندو شرکت کردم.
					</ScrollAnimation>
					<ScrollAnimation animateOnce={true} offset={50} animateIn="bounceInRight" className="course-detail">
						<IoMdCheckmarkCircleOutline className="check-icon" />
						برای کسب تجربه در بوت کمپ Front-End مجموعه رسا شرکت کردم و حدود سه ماه در کنار تیم خوب این
						مجموعه مطالب زیادی رو یاد گرفتم ، که آدرس سایتشون رو <a href="https://trs.college/"> اینجا </a>
						گذاشتم.
					</ScrollAnimation>
				</div>
			</div>
		);
	}
}

export default Course;
