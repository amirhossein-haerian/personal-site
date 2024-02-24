import React, { Component } from 'react';
import { Link, Element , animateScroll as scroll} from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaChevronUp } from 'react-icons/fa';

import './home.css';
import Header from '../../Shared/Header/Header';
import AboutMe from '../../Shared/AboutMe/AboutMe';
import Education from '../../Shared/Education/Education';
import Skills from '../../Shared/Skills/Skills';
import Langue from '../../Shared/Language/Language';
import Course from '../../Shared/Course/Course';
import Research from '../../Shared/Research/Research';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goTop: false
		};
	}
	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	};
	handleScroll = (e) => {
		if (window.pageYOffset > 300) {
			if (!this.state.goTop) {
				document.querySelector('.goTop').classList.add('goLeft');
				this.setState({
					goTop: true
				});
			}
		} else if (window.pageYOffset < 300) {
			if (this.state.goTop) {
				if (document.querySelector('.goTop').classList.contains('goLeft')) {
					document.querySelector('.goTop').classList.remove('goLeft');
				}
				document.querySelector('.goTop').classList.add('goRight');
				this.setState({
					goTop: false
				});
			}
		}
		// if(window.pageYOffset > 200) {
		// 	alert('I AM AT THE TOP');
		//   }
	};
	render() {
		return (
			<div className="main-div">
				<div
					className="goTop"
					onClick={() => {
						scroll.scrollToTop();
					}}
				>
					<FaChevronUp />
				</div>
				<div className="main-top-container">
					<a className="scroll-button scroll-section">
						<Link to={`section0`} spy={true} smooth={true} duration={500} offset={-200}>
							<div className="mouse" />
							<div className="arrow-scroll" />
						</Link>
					</a>
					<Header
						items={[
							'About me',
							'Education & Experience',
							'Skills',
							'Languages',
							'Courses',
							'Researchs',
							'Contact'
						]}
					/>
					<ScrollAnimation
						animateOnce={true}
						offset={50}
						animateIn="bounceInRight"
						className="row d-flex justify-content-center align-items-center row-fix"
					>
						<div className="col-lg-6">
							<div className="main-top-image-container">
								<img className="main-top-image" src={require('../../../Static/img/programmer2.svg')} alt='programmer' />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="main-top-title-container">
								<p className="main-top-title">I am Amir</p>
								<p className="main-top-subtitle">A Software Developer</p>
							</div>
						</div>
					</ScrollAnimation>
					<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#f2f2f2"
							fill-opacity="1"
							d="M0,128L34.3,122.7C68.6,117,137,107,206,112C274.3,117,343,139,411,149.3C480,160,549,160,617,144C685.7,128,754,96,823,106.7C891.4,117,960,171,1029,181.3C1097.1,192,1166,160,1234,154.7C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
						/>
					</svg>
				</div>
				<Element name="section0">
					<AboutMe />
				</Element>
				<Element name="section1">
					<Education />
				</Element>
				<Element name="section2">
					<Skills />
				</Element>
				<Element name="section3">
					<Langue />
				</Element>
				<Element name="section4">
					<Course />
				</Element>
				<Element name="section5">
					<Research />
				</Element>
				<Element name="section6">
					<Contact />
				</Element>
				<Footer />
			</div>
		);
	}
}
export default App;
