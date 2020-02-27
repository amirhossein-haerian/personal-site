import React, { Component } from 'react';
import './App.css';
import './extra/styles/education.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="education-main-container">
				<svg className="upwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f2f2f2"
						fill-opacity="1"
						d="M0,192L34.3,192C68.6,192,137,192,206,160C274.3,128,343,64,411,58.7C480,53,549,107,617,117.3C685.7,128,754,96,823,106.7C891.4,117,960,171,1029,165.3C1097.1,160,1166,96,1234,85.3C1302.9,75,1371,117,1406,138.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
					/>
				</svg>
				<h2 className="education-title">سوابق تحصیلی</h2>
				<div className="edication-container">
					<ScrollAnimation animateOnce={true}  offset={50}  animateIn="bounceInRight" className="row row-fix d-flex justify-content-center align-items-center">
						<div className="col-md-2" />
						<div className="my-2 col-md-4">
							<div className="education-section-title">
								<p>دیپلم</p>
							</div>
						</div>
						<div className="my-2 col-md-4">
							<div className="education-section-detail">
								<p>تهران - دبیرستان کمال</p>
								<hr />
								<p>با معدل 18.75</p>
								<hr />
								<p>1390 - 1394</p>
							</div>
						</div>
						<div className="col-md-2" />
					</ScrollAnimation>
					<ScrollAnimation animateOnce={true}  offset={50}  animateIn="bounceInRight" className="row row-fix d-flex justify-content-center align-items-center row-reverse">
						<div className="col-md-2" />
						<div className="my-2 col-md-4">
							<div className="education-section-title1">
								<p>لیسانس</p>
							</div>
						</div>
						<div className="my-2 col-md-4">
							<div className="education-section-detail">
								<p>دانشگاه آزاد واحد تهران جنوب</p>
								<hr />
								<p>با معدل 16.4</p>
								<hr />
								<p>1394 - 1398</p>
							</div>
						</div>
						<div className="col-md-2" />
					</ScrollAnimation>
				</div>
				<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f2f2f2"
						fill-opacity="1"
						d="M0,128L30,133.3C60,139,120,149,180,144C240,139,300,117,360,138.7C420,160,480,224,540,218.7C600,213,660,139,720,117.3C780,96,840,128,900,154.7C960,181,1020,203,1080,181.3C1140,160,1200,96,1260,90.7C1320,85,1380,139,1410,165.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
					/>
				</svg>
			</div>
		);
	}
}

export default Education;
