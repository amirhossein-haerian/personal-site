import React, { Component } from 'react';
import './language.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Language extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			moreText: 'مشاهده بیشتر'
		};
	}

	render() {
		return (
			<div className="languege-main-container">
				<svg className="upwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f2f2f2"
						fill-opacity="1"
						d="M0,96L30,85.3C60,75,120,53,180,64C240,75,300,117,360,112C420,107,480,53,540,58.7C600,64,660,128,720,144C780,160,840,128,900,138.7C960,149,1020,203,1080,197.3C1140,192,1200,128,1260,101.3C1320,75,1380,85,1410,90.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
					/>
				</svg>
				<h2 className="languege-title">زبان</h2>
				<div className="language-container">
					<div className="row row-fix">
						<div className="my-2 col-lg-6">
							<ScrollAnimation
								animateOnce={true}
								offset={50}
								animateIn="bounceInRight"
								className="language-box persian"
							>
								<div className="light-box">
									<p>زبان مادری</p>
								</div>
							</ScrollAnimation>
						</div>
						<div className="my-2 col-lg-6">
							<ScrollAnimation
								animateOnce={true}
								offset={50}
								animateIn="bounceInRight"
								className="language-box english"
							>
								<div className="light-box">
									<p>در حال یادگیری ، سطح فعلی Intermediate</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
				<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f2f2f2"
						fill-opacity="1"
						d="M0,128L30,154.7C60,181,120,235,180,229.3C240,224,300,160,360,128C420,96,480,96,540,122.7C600,149,660,203,720,234.7C780,267,840,277,900,261.3C960,245,1020,203,1080,192C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
					/>
				</svg>
			</div>
		);
	}
}

export default Language;
