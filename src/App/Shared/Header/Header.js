import React, { Component } from 'react';
import './header.css';
import { HamburgerButton } from 'react-hamburger-button';
import { Link, Events, scroller } from 'react-scroll';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', function() {
			console.log('begin', arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log('end', arguments);
		});
	}

	scrollTo = (offset) => {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset: offset
		});
	};

	scrollToWithContainer = () => {
		let goToContainer = new Promise((resolve, reject) => {
			Events.scrollEvent.register('end', () => {
				resolve();
				Events.scrollEvent.remove('end');
			});

			scroller.scrollTo('scroll-container', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart'
			});
		});

		goToContainer.then(() =>
			scroller.scrollTo('scroll-container-second-element', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart',
				containerId: 'scroll-container'
			})
		);
	};

	// scrollToTop = () => {
	// 	scroll.scrollToTop();
	// };

	handleClick = () => {
		if (this.state.open) {
			document.querySelector('body').style.overflowY = 'auto';
			document.querySelector('.mobile-menu-container').style.opacity = '.7';
			document.querySelector('.mobile-menu-container').style.transform = 'translateX(100%)';
			document.querySelector('.hamburgur-button').style.backgroundColor = '#67647e';
		} else {
			document.querySelector('body').style.overflowY = 'hidden';
			document.querySelector('.mobile-menu-container').style.opacity = '1';
			document.querySelector('.mobile-menu-container').style.transform = 'translateX(0)';
			document.querySelector('.hamburgur-button').style.backgroundColor = '#b24343';
		}
		this.setState({
			open: !this.state.open
		});
	};

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render() {
		return (
			<div className="menu-body">
				<nav className="web-menu-container">
					<div className="web-menu-item">
						<a href="#">
							<img className="web-menu-logo" src={require('../../../Static/img/Logo.png')} />
						</a>
					</div>
					{this.props.items.map((item, index) => {
						{
							return (
								<div className="web-menu-item">
									<a>
										<Link
											to={`section${index}`}
											spy={true}
											smooth={true}
											duration={500}
											offset={index == 1 || index == 3 || index == 5 ? 50 : -200}
										>
											{item}
										</Link>
									</a>
								</div>
							);
						}
					})}
				</nav>
				<div className="menu-section">
					<a className="hamburgur-button">
						<HamburgerButton
							open={this.state.open}
							onClick={this.handleClick}
							width={20}
							height={20}
							strokeWidth={4}
							color="#f2f2f2"
							animationDuration={0.5}
						/>
					</a>
				</div>
				<div className="mobile-menu-container">
					<nav className="mobile-menu-items">
						{this.props.items.map((item, index) => {
							{
								return (
									<div className="mobile-menu-item">
										<a>
											<Link
												to={`section${index}`}
												spy={true}
												smooth={true}
												duration={500}
												offset={index == 1 || index == 3 || index == 5 ? 25 : -100}
												onClick={() => this.handleClick()}
											>
												{item}
											</Link>
										</a>
									</div>
								);
							}
						})}
					</nav>
				</div>
			</div>
		);
	}
}

export default Header;
