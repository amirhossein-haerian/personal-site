import React, { Component } from 'react';
import './skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Collapse } from 'react-collapse';
import ScrollAnimation from 'react-animate-on-scroll';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			moreText: 'look more'
		};
	}

	render() {
		const mySkills = [
			{
				name: 'javascript',
				value: 90
			},
			{
				name: 'es6/7/8',
				value: 90
			},
			{
				name: 'python',
				value: 90
			},
			{
				name: 'HTML5',
				value: 90
			},
			{
				name: 'CSS3',
				value: 90
			},
			{
				name: 'Tailwind',
				value: 90
			},
			{
				name: 'React Hook',
				value: 90
			},
			{
				name: 'Rest API',
				value: 90
			},
			{
				name: 'git',
				value: 90
			},
			{
				name: 'ReactJS',
				value: 90
			},
			{
				name: 'Redux',
				value: 80
			},
			{
				name: 'Styled Components',
				value: 80
			},
			{
				name: 'TypeScript',
				value: 70
			},
			{
				name: 'Agile (SCRUM)',
				value: 70
			},
			{
				name: 'SQL',
				value: 70
			},
			{
				name: 'nodeJS',
				value: 70
			},
			{
				name: 'HeadLess CMS',
				value: 70
			},
			{
				name: 'Machine Learning Algorithms',
				value: 70
			},
			{
				name: 'Deep Learning',
				value: 70
			},
			{
				name: 'Python ML Libraries',
				value: 70
			},
			{
				name: 'MongoDB',
				value: 65
			},
			{
				name: 'Unit Test(Jest)',
				value: 65
			},
			{
				name: 'E2E test(Cypress)',
				value: 65
			},
			{
				name: 'WordPress',
				value: 65
			},
			{
				name: 'PhotoShop',
				value: 65
			},
			{
				name: 'ICDL',
				value: 65
			},
			{
				name: 'java SE',
				value: 65
			},
			{
				name: 'React Native',
				value: 65
			},
		];
		return (
			<div className="skills-main-container">
				<h2 className="skills-title">My Skills</h2>
				<ScrollAnimation animateOnce={true}  offset={50}  animateIn="bounceInRight" className="skills-container">
					<div className="row row-fix">
						{mySkills.map((item, index) => {
							if (index <= 5) {
								return (
									<div className="my-2 px-2 col-lg-2 col-md-4 col-sm-4 col-6">
										<div className="d-flex flex-column justify-content-around align-items-center Skills-box">
											<p>{item.name}</p>
											<div className="circle-ptogress">
												<CircularProgressbar
													value={item.value}
													text={`${item.value}%`}
													background
													backgroundPadding={2}
													strokeWidth={3}
													styles={buildStyles({
														backgroundColor: '#f2f2f2',
														textColor: '#6c94e7',
														pathColor: '#6c94e7',
														trailColor: 'transparent',
														textSize: '15px'
													})}
												/>
											</div>
										</div>
									</div>
								);
							}
						})}
						<Collapse isOpened={this.state.isOpen}>
							<div className="row row-fix">
								{mySkills.map((item, index) => {
									if (index > 5) {
										return (
											<div className="my-2 px-2 col-lg-2 col-md-4 col-sm-4 col-6">
												<div className="d-flex flex-column justify-content-around align-items-center Skills-box">
													<p>{item.name}</p>
													<div className="circle-ptogress">
														<CircularProgressbar
															value={item.value}
															text={`${item.value}%`}
															background
															backgroundPadding={2}
															strokeWidth={3}
															styles={buildStyles({
																backgroundColor: '#f2f2f2',
																textColor: '#6c94e7',
																pathColor: '#6c94e7',
																trailColor: 'transparent',
																textSize: '15px'
															})}
														/>
													</div>
												</div>
											</div>
										);
									}
								})}
							</div>
						</Collapse>
						<div className="more-container">
							<a
								onClick={() => {
									if (!this.state.isOpen) {
										this.setState({
											isOpen: true,
											moreText: 'Look less'
										});
									} else {
										this.setState({
											isOpen: false,
											moreText: 'Look More'
										});
									}
								}}
							>
								{this.state.moreText}
							</a>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		);
	}
}

export default Skills;
