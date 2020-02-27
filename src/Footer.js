import React, { Component } from 'react';
import './App.css';
import './extra/styles/footer.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer-main-container">
				<svg className="upwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f2f2f2"
						fill-opacity="1"
						d="M0,192L26.7,202.7C53.3,213,107,235,160,229.3C213.3,224,267,192,320,176C373.3,160,427,160,480,170.7C533.3,181,587,203,640,218.7C693.3,235,747,245,800,224C853.3,203,907,149,960,149.3C1013.3,149,1067,203,1120,208C1173.3,213,1227,171,1280,165.3C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
					/>
				</svg>
				<ScrollAnimation offset={50} animateIn="bunceInLeft">
					<p>طراحی و توسعه توسط امیرحسین حائریان</p>
				</ScrollAnimation>
			</div>
		);
	}
}

export default Footer;
